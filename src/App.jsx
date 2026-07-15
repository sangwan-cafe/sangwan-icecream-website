import "./App.css";

import { Routes, Route, Navigate } from "react-router-dom";

import Hero from "./components/Hero";
import Menu from "./components/menu/Menu";
import Contact from "./components/Contact";
import Payment from "./components/Payment";
import Footer from "./components/Footer";
import Reviews from "./components/Reviews";
import Stats from "./components/Stats";

import AdminDashboard from "./admin/pages/AdminDashboard";
import AdminLogin from "./admin/pages/AdminLogin";

function HomePage() {
  return (
    <div className="app">
      <Hero />
      <Menu />
      <Contact />
      <Payment />
      <Reviews />
      <Stats />
      <Footer />
    </div>
  );
}

function ProtectedAdmin() {

  const isLoggedIn =
    localStorage.getItem("adminLoggedIn") === "true";

  return isLoggedIn ? (
    <AdminDashboard />
  ) : (
    <Navigate to="/admin/login" replace />
  );

}

function App() {

  return (

    <Routes>

      <Route
        path="/"
        element={<HomePage />}
      />

      <Route
        path="/admin/login"
        element={<AdminLogin />}
      />

      <Route
        path="/admin"
        element={<ProtectedAdmin />}
      />

    </Routes>

  );

}

export default App;