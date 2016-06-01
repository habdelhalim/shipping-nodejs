var soap = require('soap');
var Account = require('../../model/account.js')
var TrackEvent = require('../../model/track.js');

var url = 'https://ws.dev.aramex.net/shippingapi/tracking/service_1_0.svc?singleWsdl';

function fillClientInfo(account){
    return {
        'UserName': account.username,
        'Password': account.password,
        'Version': account.version,
        'AccountNumber': account.account_no,
        'AccountPin': account.pin,
        'AccountEntity': account.entity,
        'AccountCountryCode': account.country,
    }
}

function prepareRequest(account, awb){
    return {
            'ClientInfo': fillClientInfo(account), 
            'Shipments': [{'string': awb}]
    }
}

function callTrack(client, request, callback) {
    client.TrackShipments(request, function (err, result) {

        var events = []
        if (result.TrackingResults != null) {
            var results = result.TrackingResults.KeyValueOfstringArrayOfTrackingResultmFAkxlpY
            var tracking = results[0].Value.TrackingResult 
            events = tracking.map(
                tr => new TrackEvent(
                    false, tr.UpdateDateTime, tr.UpdateCode, tr.UpdateDescription, tr.WaybillNumber))
        }

        callback(events)
    })
}

function TrackShipment(awb, callback) {
    Account.find(1, function (error, accounts) {
        var account = accounts[0]
        soap.createClient(url, function (err, client) {
            var request = prepareRequest(account, awb)
            callTrack(client, request, callback)
        })
    })
}

module.exports = {
    track: TrackShipment
}
