function ShippingProvider(trackAwb, updateAwb, createAwb, createAwbRange, deleteAwbRange, getActiveAwbRange) {
    this.trackAwb = trackAwb
    this.updateAwb = updateAwb
    this.createAwb = createAwb
    this.createAwbRange = createAwbRange
    this.deleteAwbRange = deleteAwbRange
    this.getActiveAwbRange = getActiveAwbRange
}

module.exports = ShippingProvider
