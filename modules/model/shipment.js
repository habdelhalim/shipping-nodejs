function Parcel() {

}

function Address() {

}

function Shipment() {
    this.id = ''
    this.reference = ''
    this.carrier = ''
    this.accountNumber = ''
    this.fromAddress = new Address()
    this.returnAddress = new Address()
    this.toAddress = new Address()
    this.buyerAddress = new Address()
    this.parcel = new Parcel()
    this.isReturn = false
    this.trackingCode = ''
    this.status = ''
    this.refundStatus = ''
    this.comments = ''
    this.createdAt = ''
    this.updatedAt = ''
    this.paymentType = '' // PREPAID, COD, THIRD_PARTY
    this.currency = ''
    this.totalAmount = ''
    this.fees = {}
    this.domestic = false
    this.clientInfo = {}
    this.options = {}
}

module.exports = Shipment
