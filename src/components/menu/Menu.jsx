import "./menu.css";
import { useState } from "react";

import products from "./products";
import ProductCard from "./ProductCard";
import Cart from "./Cart";
import SearchBar from "./SearchBar";
import CategoryTabs from "./CategoryTabs";
import CheckoutFlow from "../payment/CheckoutFlow";

function Menu() {

  const [cart, setCart] = useState([]);

  const [search, setSearch] = useState("");

  const [paymentMethod, setPaymentMethod] = useState("cod");

const [utr, setUtr] = useState("");

const [customer, setCustomer] = useState({
  name: "",
  phone: "",
  address: "",
  note: "",
});

const [showCheckout, setShowCheckout] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(products.map((item) => item.category))
  ];

  const filteredProducts = products.filter((item) => {

    const categoryMatch =
      selectedCategory === "All" ||
      item.category === selectedCategory;

    const searchMatch =
      item.name
        .toLowerCase()
        .includes(search.toLowerCase());

    return categoryMatch && searchMatch;

  });

  // ==========================
  // ADD TO CART
  // ==========================

  function addToCart(product) {

    const existing = cart.find(
      (item) => item.id === product.id
    );

    if (existing) {

      setCart(

        cart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                qty: item.qty + 1
              }
            : item
        )

      );

    } else {

      setCart([

        ...cart,

        {
          ...product,
          qty: 1
        }

      ]);

    }

  }

  // ==========================
  // INCREASE
  // ==========================

  function increaseQty(id) {

  setCart(

    cart.map((item) =>
      item.id === id
        ? {
            ...item,
            qty: item.qty + 1
          }
        : item
    )

  );

}

    // ==========================
  // DECREASE
  // ==========================

  function decreaseQty(id) {
    setCart(
      cart
        .map((item) =>
          item.id === id
            ? { ...item, qty: item.qty - 1 }
            : item
        )
        .filter((item) => item.qty > 0)
    );
  }

  // ==========================
  // REMOVE ITEM
  // ==========================

  function removeItem(id) {
    setCart(
      cart.filter((item) => item.id !== id)
    );
  }

  // ==========================
  // TOTAL
  // ==========================

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  // ==========================
  // WHATSAPP ORDER
  // ==========================

 function whatsappOrder() {

  if (cart.length === 0) {
    alert("Please add at least one item.");
    return;
  }

  // Generate Order ID
  const now = new Date();

  const orderId =
    `SIC-${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, "0")}${String(now.getDate()).padStart(2, "0")}-${String(now.getHours()).padStart(2, "0")}${String(now.getMinutes()).padStart(2, "0")}${String(now.getSeconds()).padStart(2, "0")}`;

  let message = "";

  message += "🍦 *SANGWAN'S CAFE*%0A";
  message += "━━━━━━━━━━━━━━━━━━%0A%0A";

  message += `🆔 Order ID : ${orderId}%0A%0A`;

  message += "👤 *Customer Details*%0A";
  message += `Name : ${customer.name}%0A`;
  message += `Phone : ${customer.phone}%0A`;
  message += `Address : ${customer.address}%0A`;

  if (customer.note.trim() !== "") {
    message += `Note : ${customer.note}%0A`;
  }

  message += "%0A━━━━━━━━━━━━━━━━━━%0A%0A";

  message += "🍦 *Order Items*%0A%0A";

  cart.forEach((item, index) => {

    message += `${index + 1}. ${item.name}%0A`;
    message += `Qty : ${item.qty}%0A`;
    message += `Price : ₹${item.price}%0A`;
    message += `Subtotal : ₹${item.price * item.qty}%0A%0A`;

  });

  message += "━━━━━━━━━━━━━━━━━━%0A";
  message += `💰 Total : ₹${total}%0A%0A`;

  message += `💳 Payment : ${
    paymentMethod === "prepaid"
      ? "Prepaid (Online)"
      : "Cash on Delivery"
  }%0A`;

  if (paymentMethod === "prepaid") {

    message += "🟡 Status : Pending Verification%0A";
    message += `🧾 UTR : ${utr}%0A`;

  }

  message += "%0A━━━━━━━━━━━━━━━━━━%0A";
  message += "✅ Please verify the payment before preparing the order.";

  window.open(
    `https://wa.me/919991312301?text=${message}`,
    "_blank"
  );

}

  return (

    <section className="menu">

      <div className="menu-title">
        <h2>🍦 Our Menu</h2>
        <p>Fresh Ice Cream • Shakes • Coffee</p>
      </div>

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <CategoryTabs
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <div className="menu-container">

        {filteredProducts.map((product) => (

          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />

        ))}

      </div>

      <Cart

  cart={cart}
  increaseQty={increaseQty}
  decreaseQty={decreaseQty}
  removeItem={removeItem}
  total={total}
  paymentMethod={paymentMethod}
  setPaymentMethod={setPaymentMethod}
  setShowCheckout={setShowCheckout}
/>

{showCheckout && (
  <CheckoutFlow
    cart={cart}
    total={total}
    customer={customer}
    setCustomer={setCustomer}
    paymentMethod={paymentMethod}
    utr={utr}
    setUtr={setUtr}
    whatsappOrder={whatsappOrder}
  />

  )}

    </section>

  );

}

export default Menu;