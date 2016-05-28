var soap = require('soap');
var url = 'https://ws.dev.aramex.net/shippingapi/tracking/service_1_0.svc?singleWsdl';
var args = {name: 'value'};

function TrackShipment() {
  soap.createClient(url, function(err, client) {
      client.TrackShipments(args, function(err, result) {
          console.log(result);
      });
  });
}

module.exports = {
  track: TrackShipment
}
