function DashboardCards({
  totalOrders,
  pendingOrders,
  approvedOrders,
  preparingOrders,
  readyOrders,
  deliveryOrders,
  deliveredOrders,
  cancelledOrders,
  todayRevenue,
  totalRevenue,
}) {
  const cards = [
    {
      title: "Total Orders",
      value: totalOrders,
      color: "#3498db",
      icon: "📦",
    },
    {
      title: "Pending",
      value: pendingOrders,
      color: "#f39c12",
      icon: "🟡",
    },
    {
      title: "Approved",
      value: approvedOrders,
      color: "#2ecc71",
      icon: "✅",
    },
    {
      title: "Preparing",
      value: preparingOrders,
      color: "#9b59b6",
      icon: "👨‍🍳",
    },
    {
      title: "Ready",
      value: readyOrders,
      color: "#16a085",
      icon: "📦",
    },
    {
      title: "Out For Delivery",
      value: deliveryOrders,
      color: "#2980b9",
      icon: "🛵",
    },
    {
      title: "Delivered",
      value: deliveredOrders,
      color: "#27ae60",
      icon: "🎉",
    },
    {
      title: "Cancelled",
      value: cancelledOrders,
      color: "#e74c3c",
      icon: "❌",
    },
    {
      title: "Today's Revenue",
      value: `₹${todayRevenue}`,
      color: "#ff4d6d",
      icon: "💰",
    },
    {
      title: "Total Revenue",
      value: `₹${totalRevenue}`,
      color: "#00b894",
      icon: "💵",
    },
  ];

  return (
    <div className="stats">
      {cards.map((card, index) => (
        <div
          className="card"
          key={index}
          style={{
            borderTop: `5px solid ${card.color}`,
          }}
        >
          <h3>{card.icon}</h3>

          <h2>{card.value}</h2>

          <p>{card.title}</p>
        </div>
      ))}
    </div>
  );
}

export default DashboardCards;