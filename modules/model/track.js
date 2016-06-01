function TrackEvent(isError, eventDatetime, activityCode, eventDesc, awb) {
    this.isError = isError
    this.message = ''
    this.eventDatetime = eventDatetime
    this.eventDesc = eventDesc
    this.activityCode = activityCode
    this.shipmentStatus = ''
    this.awb = awb
    this.comments = ''
}

module.exports = TrackEvent
