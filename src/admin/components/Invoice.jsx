import logo from "../../assets/logo.png";
import "./invoice.css";
function Invoice({ order }) {

  if (!order) return null;

  return (


    <div className="invoice watermark-container">

     <img
    src={logo}
    alt="Watermark"
    className="watermark-logo"
  />
  
      <div className="invoice-header">

        <img
          src={logo}
          alt="Sangwan Cafe"
          className="invoice-logo"
        />

        <h1>Sangwan Cafe</h1>

        <p>Ice Cream • Shakes • Coffee</p>

        <p>Shop No. 15, Shree Mahasati Kripa Complex</p>

        <p>Arga</p>

        <p>📞 +91 9991312301</p>

      </div>

      <hr />

      <div className="invoice-info">

        <p>

          <strong>Invoice No :</strong>

          {order.orderId}

        </p>

        <p>

          <strong>Date :</strong>

          {new Date(order.createdAt).toLocaleString()}

        </p>

      </div>

      <hr />

      <div className="customer-info">

        <h3>Customer Details</h3>

        <p>

          <strong>Name :</strong>

          {order.customer.name}

        </p>

        <p>

          <strong>Phone :</strong>

          {order.customer.phone}

        </p>

        <p>

          <strong>Address :</strong>

          {order.customer.address}

        </p>

      </div>
            <hr />

      <table className="invoice-table">

        <thead>

          <tr>

            <th>Item</th>

            <th>Qty</th>

            <th>Rate</th>

            <th>Total</th>

          </tr>

        </thead>

        <tbody>

          {order.items.map((item, index) => (

            <tr key={index}>

              <td>{item.name}</td>

              <td>{item.qty}</td>

              <td>₹{item.price}</td>

              <td>₹{item.price * item.qty}</td>

            </tr>

          ))}

        </tbody>

      </table>

      <div className="invoice-total">

        <h2>

          Grand Total : ₹{order.total}

        </h2>

      </div>

      <div className="payment-box">

        <strong>Payment :</strong>{" "}

        {order.paymentMethod === "prepaid"
          ? "✅ PAID"
          : "💵 CASH ON DELIVERY"}

      </div>

      {order.paymentMethod === "prepaid" && (

        <div className="utr-box">

          <strong>UTR :</strong>

          {order.utr}

        </div>

      )}

      {order.customer.note && (

        <div className="note-box">

          <strong>Customer Note :</strong>

          <p>{order.customer.note}</p>

        </div>

      )}

      <div className="invoice-footer">

        <h2>❤️ Thank You ❤️</h2>

        <p>Visit Again</p>

        <p>Sangwan Cafe</p>

      </div>

    </div>

  );

}

export default Invoice;