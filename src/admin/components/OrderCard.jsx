import PrintInvoice from "./PrintInvoice";
import PdfInvoice from "./PdfInvoice";

import {
  FaPhoneAlt,
  FaWhatsapp,
  FaTrash,
  FaMapMarkerAlt,
} from "react-icons/fa";

function OrderCard({


  order,

  handleStatusChange,

  handleDelete,

}) {

  const whatsappMessage = encodeURIComponent(

    `Hello ${order.customer.name},

Your Order (${order.orderId}) is now ${order.status}.

Thank you for choosing Sangwan Cafe 🍦`

  );

  return (

    <div className="order-card">

      <div className="order-top">

        <h3>{order.orderId}</h3>

        <span
          className={
            order.status
              .toLowerCase()
              .replace(/\s+/g, "-")
          }
        >
          {order.status}
        </span>

      </div>

      <hr />

      <p>

        <strong>👤 Customer</strong>

        <br />

        {order.customer.name}

      </p>

      <p>

        <strong>📞 Phone</strong>

        <br />

        {order.customer.phone}

      </p>

      <p>

        <strong>📍 Address</strong>

        <br />

        {order.customer.address}

      </p>

      {

        order.customer.note && (

          <p>

            <strong>📝 Note</strong>

            <br />

            {order.customer.note}

          </p>

        )

      }

      <hr />

      <strong>🍦 Ordered Items</strong>

      {

        order.items.map((item,index)=>(

          <div
            key={index}
            className="item-row"
          >

            <span>

              {item.name}

            </span>

            <span>

              × {item.qty}

            </span>

            <span>

              ₹{item.price * item.qty}

            </span>

          </div>

        ))

      }

      <hr />

      <p>

        <strong>Total</strong>

        {" : "}

        ₹{order.total}

      </p>

      <p>

        <strong>Payment</strong>

        {" : "}

        {order.paymentMethod}

      </p>

      {

        order.paymentMethod==="prepaid" && (

          <p>

            <strong>UTR</strong>

            {" : "}

            {order.utr}

          </p>

        )

      }

      <p>

        <strong>Ordered On</strong>

        {" : "}

        {

          new Date(order.createdAt)

            .toLocaleString()

        }

      </p>

      <div className="contact-buttons">

        <a

          href={`tel:${order.customer.phone}`}

          className="call-btn"

        >

          <FaPhoneAlt />

        </a>

        <a

          href={`https://wa.me/91${order.customer.phone}?text=${whatsappMessage}`}

          target="_blank"

          rel="noreferrer"

          className="whatsapp-btn"

        >

          <FaWhatsapp />

        </a>

        <a

          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(order.customer.address)}`}

          target="_blank"

          rel="noreferrer"

          className="map-btn"

        >

          <FaMapMarkerAlt />

        </a>

      </div>

      <div className="order-actions">

        <select

          className="status-select"

          value={order.status}

          onChange={(e)=>

            handleStatusChange(

              order._id,

              e.target.value

            )

          }

        >

          <option value="Pending">Pending</option>

          <option value="Approved">Approved</option>

          <option value="Preparing">Preparing</option>

          <option value="Ready">Ready</option>

          <option value="Out For Delivery">

            Out For Delivery

          </option>

          <option value="Delivered">

            Delivered

          </option>

          <option value="Cancelled">

            Cancelled

          </option>

        </select>

        <button

          className="delete-btn"

          onClick={()=>

            handleDelete(order._id)

          }

        >

          <FaTrash />

          Delete

        </button>

      </div>

<PdfInvoice order={order} />

    </div>

  );

}

export default OrderCard;