import "./payment.css";

function UpiPayment({
  total,
  onNext,
}) {

  const upiId = "ishusangwan346@ybl";
  const receiver = "Ishu Sangwan";

  const upiLink =
    `upi://pay?pa=${upiId}&pn=${encodeURIComponent(receiver)}&am=${total}&cu=INR`;

  const copyUpi = async () => {
    await navigator.clipboard.writeText(upiId);
    alert("UPI ID Copied");
  };

  return (

    <div className="payment-card">

      <h2>💳 Pay Online</h2>

      <h3>Amount : ₹{total}</h3>

      <p>
        Pay using PhonePe, Google Pay or any UPI App.
      </p>

      <div className="upi-box">

        {upiId}

      </div>

      <button
        className="copy-btn"
        onClick={copyUpi}
      >
        📋 Copy UPI ID
      </button>

      <a
        href={upiLink}
        className="phonepe-btn"
      >
        📱 Open PhonePe
      </a>

      <button
        className="next-btn"
        onClick={onNext}
      >
        I Have Completed Payment →
      </button>

    </div>

  );

}

export default UpiPayment;