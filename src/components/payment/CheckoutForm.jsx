import "./payment.css";

function CheckoutForm({
  customer,
  setCustomer,
  onNext,
}) {

  const handleChange = (e) => {
    setCustomer({
      ...customer,
      [e.target.name]: e.target.value,
    });
  };

  const continueCheckout = () => {

    if (customer.name.trim() === "") {
      alert("Please enter your name.");
      return;
    }

    if (!/^[0-9]{10}$/.test(customer.phone)) {
      alert("Enter a valid 10 digit mobile number.");
      return;
    }

    if (customer.address.trim() === "") {
      alert("Please enter delivery address.");
      return;
    }

    onNext();

  };

  return (

    <div className="checkout-card">

      <h2>👤 Customer Details</h2>

      <p>
        Please fill your delivery information.
      </p>

      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={customer.name}
        onChange={handleChange}
        className="checkout-input"
      />

      <input
        type="tel"
        name="phone"
        placeholder="Mobile Number"
        value={customer.phone}
        onChange={handleChange}
        className="checkout-input"
      />

      <textarea
        name="address"
        placeholder="Complete Delivery Address"
        value={customer.address}
        onChange={handleChange}
        className="checkout-input textarea"
      />

      <textarea
        name="note"
        placeholder="Special Instructions (Optional)"
        value={customer.note}
        onChange={handleChange}
        className="checkout-input textarea"
      />

      <button
        className="continue-btn"
        onClick={continueCheckout}
      >
        Continue →
      </button>

    </div>

  );

}

export default CheckoutForm;