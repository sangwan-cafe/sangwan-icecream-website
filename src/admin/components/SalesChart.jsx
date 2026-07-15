import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function SalesChart({ orders }) {

const weekRevenue = [0, 0, 0, 0, 0, 0, 0];

orders.forEach((order) => {
  if (order.status !== "Delivered") return;

  const day = new Date(order.createdAt).getDay();

  // Sunday = 0, Monday = 1 ...
  const index = day === 0 ? 6 : day - 1;

  weekRevenue[index] += order.total;
});

  const labels = [
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
    "Sun",
  ];

  const data = {
    labels,
        datasets: [
      {
        label: "Revenue (₹)",
        data: weekRevenue,
        borderColor: "#ff4d6d",
        backgroundColor: "rgba(255,77,109,0.2)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
      title: {
        display: true,
        text: "Weekly Sales",
      },
    },
  };

  return (
    <div className="chart-card">
      <Line
        data={data}
        options={options}
      />
    </div>
  );
}

export default SalesChart;