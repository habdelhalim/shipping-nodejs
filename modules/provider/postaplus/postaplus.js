var soap = require('soap');
var xml2js = require('xml2js');
var Account = require('../../model/account.js')
var TrackEvent = require('../../model/track.js');

var url = 'https://ws05.ffdx.net/ffdx_ws/v12/service_ffdx.asmx?WSDL'

function fillClientInfo(account) {
    return {
        'wsVersion': account.version,
        'FileType': 2,
        'Action': 'Download',
        'EntityID': account.username,
        'EntityPIN': account.password,
        'AccessID': account.entity,
        'AccessPIN': account.pin
    }
}

function prepareRequest(account, awb) {
    var builder = new xml2js.Builder();
    var accessRequest = {
        'WSGET': {
            'AccessRequest': fillClientInfo(account),
            'ReferenceNumber': awb
        }
    }

    return {
        'Username': account.entity,
        'Password': account.pin,
        'xmlStream': builder.buildObject(accessRequest)
    }
}

function callTrack(client, request, callback) {
    client.WSDataTransfer(request, function(err, result) {
        console.log(result)

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
    Account.find(4, function(error, accounts) {
        var account = accounts[0]
        soap.createClient(url, function(err, client) {
            var request = prepareRequest(account, awb)
            console.log(request)
            callTrack(client, request, callback)
        })
    })
}

module.exports = {
    track: TrackShipment
}
