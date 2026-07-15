import "./payment.css";

function ReviewOrder({
  customer,
  cart,
  total,
  paymentMethod,
  utr,
  onSubmit,
}) {

  return (

    <div className="payment-card">

      <h2>📋 Review Your Order</h2>

      <div className="review-section">

        <h3>👤 Customer Details</h3>

        <p><strong>Name:</strong> {customer.name}</p>

        <p><strong>Phone:</strong> {customer.phone}</p>

        <p><strong>Address:</strong> {customer.address}</p>

        {customer.note && (
          <p><strong>Note:</strong> {customer.note}</p>
        )}

      </div>

      <div className="review-section">

        <h3>🍦 Order Items</h3>

        {cart.map((item) => (

          <div
            key={item.id}
            className="review-item"
          >

            <span>

              {item.name} × {item.qty}

            </span>

            <span>

              ₹{item.price * item.qty}

            </span>

          </div>

        ))}

      </div>

      <div className="review-section">

        <h3>💳 Payment</h3>

        <p>

          <strong>Method:</strong>{" "}

          {paymentMethod === "prepaid"
            ? "Prepaid (UPI)"
            : "Cash on Delivery"}

        </p>

        {paymentMethod === "prepaid" && (

          <p>

            <strong>UTR:</strong> {utr}

          </p>

        )}

      </div>

      <div className="review-total">

        Total : ₹{total}

      </div>

      <button

        className="continue-btn"

        onClick={onSubmit}

      >

        ✅ Confirm Order

      </button>

    </div>

  );

}

export default ReviewOrder;