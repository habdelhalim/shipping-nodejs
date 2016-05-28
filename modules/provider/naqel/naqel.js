var soap = require('soap');
var TrackEvent = require('../../model/track.js');
var parseString = require('xml2js').parseString

var url = 'http://212.93.160.150/NaqelAPIDemo/XMLShippingService.asmx?wsdl'
var request = function (awb) { return { 'ClientInfo': {}, 'WaybillNo' : awb  } }

function TrackRequest(awb) {
  this.ClientInfo = { 'ClientID': '901', 'Password': 'naqe', 'Version' : '1.0'}
  this.WayBillNo = awb
}

function TrackShipment(awb, callback) {
  soap.createClient(url, function(err, client) {

    client.TraceByWaybillNo(new TrackRequest(awb), function(err, result) {
      var events = []
      if(result.TraceByWaybillNoResult != null) {
        var tracking = result.TraceByWaybillNoResult.Tracking 
        console.log(tracking)
        events = tracking.map( tr => new TrackEvent(tr.Date, tr.ActivityCode, tr.Activity))
      }

      callback(events)
    })

  })
}

module.exports = {
  track: TrackShipment
}
