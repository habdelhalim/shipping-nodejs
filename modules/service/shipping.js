var track = function(req, res) {
  if(req.params.courier === undefined) {
    res.send('courier not found')
    return
  }

  if(req.params.awb === undefined) {
    res.send('awb not found')
    return
  }

  res.send('tracking service')
}

var ship = function(req, res) {
  res.send('shipping service')
}

var service = function(app) {
  app.get('/track/:courier?/:awb?', track)
  app.get('/ship', ship)
}

module.exports = {
  setup: service
}
