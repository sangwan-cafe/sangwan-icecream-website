function Cart({
  
  cart,
  increaseQty,
  decreaseQty,
  removeItem,
  total,
  paymentMethod,
  setPaymentMethod,
  setShowCheckout,
}) {

  return (

    <div className="order-box">

      <h2>🛒 Your Order</h2>

      {cart.length === 0 ? (

        <>
          <div className="empty-cart">
            <h3>Your Cart is Empty</h3>
            <p>Add your favourite ice cream 🍦</p>
          </div>

          <button
            className="checkout-btn"
            onClick={() =>
              window.scrollTo({
                top: 700,
                behavior: "smooth",
              })
            }
          >
            Browse Menu
          </button>
        </>

      ) : (

        <>

          {cart.map((item) => (

            <div className="cart-item" key={item.id}>

              <div className="cart-left">

                <div className="cart-image">
                  {item.image ? (
                    <img src={item.image} alt={item.name} />
                  ) : (
                    "🍦"
                  )}
                </div>

                <div className="cart-info">
                  <h3>{item.name}</h3>
                  <p>₹{item.price}</p>
                </div>

              </div>

              <div className="qty-box">

                <button onClick={() => decreaseQty(item.id)}>
                  −
                </button>

                <span>{item.qty}</span>

                <button onClick={() => increaseQty(item.id)}>
                  +
                </button>

              </div>

              <div className="price">
                ₹{item.price * item.qty}
              </div>

              <button
                className="remove-btn"
                onClick={() => removeItem(item.id)}
              >
                ❌
              </button>

            </div>

          ))}
<div className="payment-method">
  

  <h3>Choose Payment Method</h3>

  <label className="payment-option">
    <input
      type="radio"
      name="payment"
      value="cod"
      checked={paymentMethod === "cod"}
      onChange={(e) => setPaymentMethod(e.target.value)}
    />

    💵 Cash on Delivery
  </label>

  <label className="payment-option">
    <input
      type="radio"
      name="payment"
      value="prepaid"
      checked={paymentMethod === "prepaid"}
      onChange={(e) => setPaymentMethod(e.target.value)}
    />
    💳 Prepaid (Online)
  </label>

</div>
          <div className="cart-summary">

            <div className="summary-row">
              <span>Items</span>
              <span>{cart.length}</span>
            </div>

            <div className="summary-row total">
              <span>Total</span>
              <span>₹{total}</span>
            </div>

            <button
  className="checkout-btn"
  onClick={() => setShowCheckout(true)}
>
  Proceed to Checkout →
</button>

          </div>

        </>

      )}

    </div>

  );


}

export default Cart;