// AdminDashboard.jsx
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getOrders, updateOrderStatus, deleteOrder } from "../services/adminService";
import "../admin.css";
import DashboardCards from "../components/DashboardCards";
import SearchBar from "../components/SearchBar";
import OrderCard from "../components/OrderCard";
import SalesChart from "../components/SalesChart";
import TopProducts from "../components/TopProducts";
import ExportExcel from "../components/ExportExcel";

export default function AdminDashboard() {
  const [orders,setOrders]=useState([]);
  const [loading,setLoading]=useState(true);
  const [search,setSearch]=useState("");
  const [statusFilter,setStatusFilter]=useState("All");
  const [paymentFilter, setPaymentFilter] = useState("All");
  const navigate=useNavigate();

  useEffect(()=>{loadOrders();},[]);

  async function loadOrders(){
    try{
      setLoading(true);
      const data=await getOrders();
      setOrders(data);
    }finally{
      setLoading(false);
    }
  }

  async function handleStatusChange(id,status){
    await updateOrderStatus(id,status);
    loadOrders();
  }

  async function handleDelete(id){
    if(!window.confirm("Delete this order?")) return;
    await deleteOrder(id);
    loadOrders();
  }

  const filteredOrders=useMemo(()=>orders.filter(o=>{
    const s=search.toLowerCase();
    const a=o.orderId?.toLowerCase().includes(s);
    const b=o.customer?.name?.toLowerCase().includes(s);
    const c=o.customer?.phone?.includes(search);
   const d =
  statusFilter === "All" ||
  o.status === statusFilter;

const e =
  paymentFilter === "All" ||
  o.paymentMethod === paymentFilter;

return (a || b || c) && d && e;
  }),[orders,search,statusFilter,paymentFilter]);

  if(loading) return <h2 style={{textAlign:"center"}}>Loading...</h2>;

  return (
    <div className="admin-page">
      <div className="admin-header">

    <h1>🍦 Sangwan Cafe Admin</h1>

    <button
      className="logout-btn"
      onClick={()=>{
        localStorage.clear();
        navigate("/admin/login");
      }}
    >
      Logout
    </button>

</div>

<DashboardCards
  totalOrders={orders.length}
  pendingOrders={orders.filter(o=>o.status==="Pending").length}
  approvedOrders={orders.filter(o=>o.status==="Approved").length}
  preparingOrders={orders.filter(o=>o.status==="Preparing").length}
  readyOrders={orders.filter(o=>o.status==="Ready").length}
  deliveryOrders={orders.filter(o=>o.status==="Out For Delivery").length}
  deliveredOrders={orders.filter(o=>o.status==="Delivered").length}
  cancelledOrders={orders.filter(o=>o.status==="Cancelled").length}
  todayRevenue={0}
  totalRevenue={orders.reduce((sum,order)=>sum+order.total,0)}
/>

<SearchBar
  search={search}
  setSearch={setSearch}
  statusFilter={statusFilter}
  setStatusFilter={setStatusFilter}
  paymentFilter={paymentFilter}
  setPaymentFilter={setPaymentFilter}
/>
      <ExportExcel orders={filteredOrders} />
      
      <SalesChart orders={orders} />

      <TopProducts orders={orders} />

        <div className="orders-list">

  {filteredOrders.map((order) => (

    <OrderCard
      key={order._id}
      order={order}
      handleStatusChange={handleStatusChange}
      handleDelete={handleDelete}
    />

  ))}

</div>

</div>

);

}