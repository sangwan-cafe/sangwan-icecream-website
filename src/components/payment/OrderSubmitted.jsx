import "./payment.css";

function OrderSubmitted({

  orderId,

  whatsappOrder,

}) {

  return (

    <div className="payment-card">

      <div className="success-icon">

        ✅

      </div>

      <h2>

        Order Submitted

      </h2>

      <p>

        Thank you for ordering from

        <strong> Sangwan's Cafe</strong>

      </p>

      <div className="order-id-box">

        <h3>Order ID</h3>

        <h2>{orderId}</h2>

      </div>

      <div className="pending-box">

        🟡 Payment Status

        <br />

        Pending Verification

      </div>

      <p>

        We will verify your payment shortly.

      </p>

      <button

        className="continue-btn"

        onClick={whatsappOrder}

      >

        Continue to WhatsApp →

      </button>

    </div>

  );

}

export default OrderSubmitted;