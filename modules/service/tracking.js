var TrackEvent = require('../model/track.js')
var Providers = require('../provider/providers.js')

var track = function(req, res) {
  if(req.params.courier === undefined) {
    res.send('courier not found')
    return
  }

  if(req.params.awb === undefined) {
    res.send('awb not found')
    return
  }
  
  var provider = Providers.getProvider(req.params.courier)
  if(provider === undefined) {
    res.send('provider not found : '+ req.params.courier)
    return
  }

  var trackEvents = provider.track(req.params.awb)
  res.json(trackEvents)
}

module.exports = { track: track }
