var tracking = require('./tracking.js')
var shipping = require('./shipping.js')

var facade = function (app) {
    app.get('/track/:courier?/:awb?', tracking.track)
    app.get('/ship', shipping.ship)
}

module.exports = {
    setup: facade
}
