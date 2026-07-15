import "./PaymentModal.css";
import qrImage from "../../assets/qr.png";

function PaymentModal({
  showPaymentModal,
  setShowPaymentModal,
  total,
  setPaymentDone,
}) {

  if (!showPaymentModal) return null;

  return (

    <div className="payment-modal">

      <div className="payment-box">

        <h2>💳 Scan & Pay</h2>

        <img
          src={qrImage}
          alt="QR Code"
          className="payment-qr"
        />

        <h3>Amount : ₹{total}</h3>

        <p>
          Scan the QR code using any UPI App
        </p>

        <button
          className="paid-btn"
          onClick={() => {

            setPaymentDone(true);

            setShowPaymentModal(false);

          }}
        >
          ✅ I've Paid
        </button>

        <button
          className="close-btn"
          onClick={() =>
            setShowPaymentModal(false)
          }
        >
          Close
        </button>

      </div>

    </div>

  );

}

export default PaymentModal;