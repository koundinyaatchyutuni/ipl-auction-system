import React, { useState } from "react";
import "./Login.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

function Login() {
  const [form, setForm] = useState({
    username: "",
    password: ""
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // 🔥 prevents page reload

    if (!form.username || !form.password) {
      setError("All fields are required");
      return;
    }

    setError("");
    console.log("Login Data:", form);

    // 👉 Later: API call
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>IPL Auction</h2>

        <form onSubmit={handleSubmit}>
          {/* Username */}
          <div className="input-group">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={form.username}
              onChange={handleChange}
            />
          </div>

          {/* Password */}
          <div className="input-group password-group">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
            />

            <span
              className="eye-icon"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {/* Error */}
          {error && <p className="error">{error}</p>}

          {/* Button */}
          <button type="submit">Login</button>
        </form>

        {/* Signup link */}
        <p className="signup-link">
          New here? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;