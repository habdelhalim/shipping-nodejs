var soap = require('soap');
var Account = require('../../model/account.js')
var TrackEvent = require('../../model/track.js');

var url = 'http://212.93.160.150/NaqelAPIDemo/XMLShippingService.asmx?wsdl'

function fillClientInfo(account) {
    return {
        'ClientID': account.username,
        'Password': account.password,
        'Version': '1.0'
    }
}

function prepareRequest(account, awb) {
    var request = {
        'ClientInfo': fillClientInfo(account),
        'WaybillNo': awb
    }

    return request
}

function callTrack(client, request, callback) {
    client.TraceByWaybillNo(request, function(err, result) {
        var events = []
        if (result.TraceByWaybillNoResult != null) {
            var tracking = result.TraceByWaybillNoResult.Tracking
            events = tracking.map(
                tr => new TrackEvent(
                    tr.HasError, tr.Date, tr.ActivityCode, tr.Activity, tr.WaybillNo))
        }

        callback(events)
    })
}

function TrackShipment(awb, callback) {
    Account.find(2, function(error, accounts) {
        var account = accounts[0]
        soap.createClient(url, function(err, client) {
            var request = prepareRequest(account, awb)
            callTrack(client, request, callback)
        })
    })
}

module.exports = {
    track: TrackShipment
}
