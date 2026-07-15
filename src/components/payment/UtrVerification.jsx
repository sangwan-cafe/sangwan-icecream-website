import { useState } from "react";
import "./payment.css";

function UtrVerification({
  onVerified,
}) {

  const [utr, setUtr] = useState("");
  const [error, setError] = useState("");

  const verifyPayment = () => {

    const value = utr.trim();

    if (!value) {
      setError("Please enter your UTR Number.");
      return;
    }

    if (value.length < 12) {
      setError("UTR should be at least 12 characters.");
      return;
    }

    setError("");

    onVerified(value);

  };

  return (

    <div className="payment-card">

      <h2>🔐 Payment Verification</h2>

      <p>
        Enter the UTR / Transaction ID received after payment.
      </p>

      <input
        type="text"
        placeholder="Enter UTR Number"
        value={utr}
        onChange={(e) => setUtr(e.target.value)}
        className="utr-input"
      />

      {error && (

        <p className="payment-error">

          {error}

        </p>

      )}

      <button
        className="next-btn"
        onClick={verifyPayment}
      >
        ✅ Verify Payment
      </button>

    </div>

  );

}

export default UtrVerification;