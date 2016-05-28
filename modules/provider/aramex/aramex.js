var soap = require('soap');
var TrackEvent = require('../../model/track.js');

var url = 'https://ws.dev.aramex.net/shippingapi/tracking/service_1_0.svc?singleWsdl';
var args = {name: 'value'};

function TrackShipment(awb, callback) {
  soap.createClient(url, function(err, client) {
      client.TrackShipments(args, function(err, result) {
          console.log(result)

          var events = []
          events.push(new TrackEvent())
          console.log(events)
          callback(events)
      });
  });
}

module.exports = {
  track: TrackShipment
}
