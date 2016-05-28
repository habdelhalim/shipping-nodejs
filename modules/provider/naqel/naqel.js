var account = require('../../model/account.js')
var soap = require('soap');
var TrackEvent = require('../../model/track.js');
var parseString = require('xml2js').parseString

var url = 'http://212.93.160.150/NaqelAPIDemo/XMLShippingService.asmx?wsdl'
var request = function (awb) {
    return {'ClientInfo': {}, 'WaybillNo': awb}
}

function TrackShipment(awb, callback) {
    account.find(2, function (error, accounts) {
        var account = accounts[0]
        console.log(account)

        var ClientInfo = {'ClientID': account.username, 'Password': account.password, 'Version': '1.0'}

        soap.createClient(url, function (err, client) {
            var request = {ClientInfo: ClientInfo, WayBillNo: awb}
            console.log(request)
            client.TraceByWaybillNo(request, function (err, result) {
                var events = []
                if (result.TraceByWaybillNoResult != null) {
                    var tracking = result.TraceByWaybillNoResult.Tracking
                    console.log(tracking)
                    events = tracking.map(tr => new TrackEvent(tr.Date, tr.ActivityCode, tr.Activity)
                )
                }

                callback(events)
            })

        })
    })
}

module.exports = {
    track: TrackShipment
}
