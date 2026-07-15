const API_URL = "http://localhost:5000/api/orders";

export async function createOrder(orderData) {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to create order");
    }

    return data;

  } catch (error) {
    console.error("Create Order Error:", error);
    throw error;
  }
}