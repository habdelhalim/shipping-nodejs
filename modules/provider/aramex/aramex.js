var soap = require('soap');
var TrackEvent = require('../../model/track.js');
var parseString = require('xml2js').parseString

var url =
    'https://ws.dev.aramex.net/shippingapi/tracking/service_1_0.svc?singleWsdl';
var request = function(awb) {
    return {
        'ShipmentTrackingRequest': {
            'Shipments': [awb]
        }
    }
}

function TrackShipment(awb, callback) {
    soap.createClient(url, function(err, client) {
        client.TrackShipments(request(awb), function(err, result) {
            console.log(result)
            parseString(result, (error, js) => console.log(
                error, js))

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
