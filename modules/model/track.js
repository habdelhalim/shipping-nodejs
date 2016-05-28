function TrackEvent(eventDatetime, activityCode, eventDesc){
  this.isError = false
  this.message = ''
  this.eventDatetime = eventDatetime
  this.eventDesc = eventDesc
  this.activityCode = activityCode
  this.shipmentStatus = ''
  this.awb = ''
  this.comments = ''
}

module.exports = TrackEvent
