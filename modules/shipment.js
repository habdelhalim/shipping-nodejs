var shipment = {
 id,
 reference,
 carrier,
 accountNumber,

}
  public enum PaymentType {
    PREPAID, COD, THIRD_PARTY
  }

  private Address fromAddress;//The origin address
  private Address returnAddress;//default is origin address
  private Address toAddress;//The destination address
  private Address buyerAddress;//Address	The buyer's address, defaults to "to address"
  private Parcel Parcel;//	The dimensions and weight of the package

  private boolean isReturn;//
  private String trackingCode;
  private String status;
  private String refundStatus;//The current status of the shipment refund process. Possible values are "submitted", "refunded", "rejected".
  private String comments;

  private Date createdAt;
  private Date updatedAt;

  //Financial Information
  private PaymentType paymentType;
  private String currency;
  private Float totalAmount;

  private Map<Fee.FeeType, Fee> fees = new HashMap<>();
  private boolean domestic;
  private Map<String, String> clientInfo = new HashMap<>();//client specific info
  private Map<String, String> options = new HashMap<>();//carrier-specific options passed to the shipment
