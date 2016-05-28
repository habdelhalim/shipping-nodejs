var TrackEvent = require('../model/track.js')

var track = function(req, res) {
  if(req.params.courier === undefined) {
    res.send('courier not found')
    return
  }

  if(req.params.awb === undefined) {
    res.send('awb not found')
    return
  }

  var trackEvents = []
  var trackEvent = new TrackEvent()
  trackEvents.push(trackEvent)
  trackEvents.push(trackEvent)
  trackEvents.push(trackEvent)
  trackEvents.push(trackEvent)
  trackEvents.push(trackEvent)
  res.json(trackEvents)
}

module.exports = { track: track }
