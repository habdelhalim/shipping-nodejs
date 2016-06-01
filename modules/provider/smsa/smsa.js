var soap = require('soap');
var Account = require('../../model/account.js')
var TrackEvent = require('../../model/track.js');

var url = 'http://smsaweb.cloudapp.net:8080/track.svc?singleWsdl';

function prepareRequest(account, awb){
    return {
        'awb': awb,
        'username': account.username,
        'password': account.password
    }
}

function callTrack(client, request, callback) {
    client.getSMSATrackingDetails(request, function (err, result) {

        var events = []
        if (result && result.getSMSATrackingDetailsResult != null) {

            var results = result.getSMSATrackingDetailsResult
            var tracking = results.TrackRslt
            events = tracking.map(
                tr => new TrackEvent(
                    false, tr.EventTime, tr.StatusCode, tr.EventDesc, request.awb))
        }

        callback(events)
    })
}

function TrackShipment(awb, callback) {
    Account.find(3, function (error, accounts) {
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
