import { useState } from "react";
import CheckoutForm from "./CheckoutForm";
import PaymentStep from "./PaymentStep";
import ReviewOrder from "./ReviewOrder";
import OrderSubmitted from "./OrderSubmitted";
import { createOrder } from "../../services/orderService";

function CheckoutFlow({
  cart,
  total,

  customer,
  setCustomer,

  paymentMethod,

  utr,
  setUtr,

  whatsappOrder,

}) {

  const [step, setStep] = useState(1);

  const [orderId, setOrderId] = useState("");
  
  const [loading, setLoading] = useState(false);

  // Don't show checkout if cart is empty
  if (cart.length === 0) return null;

  // COD doesn't need payment screen
  const nextFromCustomer = () => {

    if (paymentMethod === "cod") {

      setStep(3);

    } else {

      setStep(2);

    }

  };

  return (

    <div className="checkout-wrapper">

      {/* STEP 1 */}

      {step === 1 && (

        <CheckoutForm

          customer={customer}

          setCustomer={setCustomer}

          onNext={nextFromCustomer}

        />

      )}

      {/* STEP 2 */}

      {step === 2 && (

        <PaymentStep

          total={total}

          setUtr={setUtr}

          onNext={() => setStep(3)}

        />

      )}

      {/* STEP 3 */}


{step === 3 && (

  <ReviewOrder
    cart={cart}
    customer={customer}
    total={total}
    paymentMethod={paymentMethod}
    utr={utr}
   onSubmit={async () => {

  try {

    setLoading(true);

    const now = new Date();

    const id =
      `SIC-${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, "0")}${String(now.getDate()).padStart(2, "0")}-${String(now.getHours()).padStart(2, "0")}${String(now.getMinutes()).padStart(2, "0")}${String(now.getSeconds()).padStart(2, "0")}`;

    const orderData = {

      orderId: id,

      customer,

      items: cart.map(item => ({
        name: item.name,
        price: item.price,
        qty: item.qty,
      })),

      paymentMethod,

      utr,

      total,

    };

    await createOrder(orderData);

    setOrderId(id);

    setStep(4);

  } catch (error) {

    console.error(error);

    alert("❌ Order save failed.");

  } finally {

    setLoading(false);

  }

}}
  />

)}

{step === 4 && (

 <OrderSubmitted

  orderId={orderId}

  whatsappOrder={whatsappOrder}
  />

)}

      

    </div>

  );

}

export default CheckoutFlow;