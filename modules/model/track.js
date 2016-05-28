function TrackEvent(){
  this.isError = false
  this.message = ''
  this.eventDatetime = Date()
  this.eventDesc = ''
  this.activityCode = ''
  this.shipmentStatus = ''
  this.awb = ''
  this.comments = ''
}

module.exports = TrackEvent
