import React, { useState } from "react";
import "./Signup.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: "",
    confirmPassword: ""
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
    e.preventDefault();

    // Validation
    if (!form.username || !form.password || !form.confirmPassword) {
      setError("All fields are required");
      return;
    }

    if (form.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setError("");

    console.log("Signup Data:", form);

    // 👉 Later: send to backend API

    // Redirect to login after signup
    navigate("/");
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Create Account</h2>
        <p className="subtitle">Join the IPL Auction</p>

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

          {/* Confirm Password */}
          <div className="input-group">
            <input
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm Password"
              value={form.confirmPassword}
              onChange={handleChange}
            />
          </div>

          {/* Error */}
          {error && <p className="error">{error}</p>}

          {/* Button */}
          <button type="submit">Sign Up</button>
        </form>

        {/* Login Link */}
        <p className="login-link">
          Already have an account? <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;