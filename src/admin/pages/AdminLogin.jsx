import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginAdmin } from "../services/authService";
import "../admin.css";

function AdminLogin() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  async function handleLogin(e) {

    e.preventDefault();

    try {

      setLoading(true);

      const data = await loginAdmin(
        username,
        password
      );

      localStorage.setItem(
        "adminToken",
        data.token
      );

      localStorage.setItem(
        "adminInfo",
        JSON.stringify(data.admin)
      );

      localStorage.setItem(
        "adminLoggedIn",
        "true"
      );

      navigate("/admin");

    } catch (error) {

      alert(error.message);

    } finally {

      setLoading(false);

    }

  }

  return (

    <div className="login-page">

      <form
        className="login-box"
        onSubmit={handleLogin}
      >

        <h1>🍦 Sangwan Cafe</h1>

        <h2>Admin Login</h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) =>
            setUsername(e.target.value)
          }
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          required
        />

        <button disabled={loading}>

          {loading ? "Logging in..." : "Login"}

        </button>

      </form>

    </div>

  );

}

export default AdminLogin;