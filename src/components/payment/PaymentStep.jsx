import { useState } from "react";
import "./payment.css";
import qrImage from "../../assets/qr.png";

function PaymentStep({
  total,
  onNext,
  setUtr,
}) {

  const [utr, setLocalUtr] = useState("");
  const [proof, setProof] = useState(null);

  const upiId = "ishusangwan346@ybl";

  const receiver = "Ishu Sangwan";

  const payLink =
    `upi://pay?pa=${upiId}&pn=${encodeURIComponent(receiver)}&am=${total}&cu=INR`;

  const copyUPI = async () => {

    await navigator.clipboard.writeText(upiId);

    alert("UPI ID Copied");

  };

  const continuePayment = () => {

    if (!proof) {

      alert("Please upload payment screenshot.");

      return;

    }

    if (!utr.trim()) {

      alert("Please enter UTR Number.");

      return;

    }

    if (utr.length < 12) {

      alert("Invalid UTR Number.");

      return;

    }

    setUtr(utr);

    onNext();

  };

  return (

    <div className="payment-card">

      <h2>💳 Pay Online</h2>

      <h3>₹{total}</h3>

      <div className="upi-id">

        {upiId}

      </div>

      <button

        className="copy-btn"

        onClick={copyUPI}

      >

        📋 Copy UPI ID

      </button>

      <a

        href={payLink}

        className="phonepe-btn"

      >

        📱 Open PhonePe

      </a>

      <div className="or">

        OR

      </div>

      <img

        src={qrImage}

        className="payment-qr"

        alt="QR"

      />

      <label className="upload-box">

        📷 Upload Payment Screenshot

        <input

          type="file"

          accept="image/*"

          hidden

          onChange={(e)=>

            setProof(e.target.files[0])

          }

        />

      </label>

      {

        proof && (

          <p>

            ✅ {proof.name}

          </p>

        )

      }

      <input

        type="text"

        placeholder="Enter UTR Number"

        value={utr}

        onChange={(e)=>

          setLocalUtr(e.target.value)

        }

        className="checkout-input"

      />

      <button

        className="continue-btn"

        onClick={continuePayment}

      >

        Continue →

      </button>

    </div>

  );

}

export default PaymentStep;