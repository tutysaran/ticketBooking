import React, { useState, useEffect } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { LoginSocialGoogle } from "reactjs-social-login";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/home");
    }
  }, [navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "admin@gmail.com" && password === "123") {
      localStorage.setItem("token", "dummy_token");
      setMessage("✅ Login successful!");
      setTimeout(() => navigate("/home"), 1000);
    } else {
      setMessage("❌ Invalid email or password.");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #74ebd5, #acb6e5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          maxWidth: "400px",
          width: "100%",
          padding: "2rem",
          borderRadius: "1rem",
          backgroundColor: "white",
          boxShadow: "0 0 15px rgba(0,0,0,0.2)",
        }}
      >
        <h3 style={{ textAlign: "center", marginBottom: "1rem" }}>
          Welcome back!
        </h3>
        <p style={{ textAlign: "center", color: "#888" }}>
          Please enter your details
        </p>

        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: "1rem" }}>
            <label>Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              style={{
                width: "100%",
                padding: "0.5rem",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <label>Password</label>
            <div style={{ position: "relative", display: "flex" }}>
              <input
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                style={{
                  flex: 1,
                  padding: "0.5rem",
                  borderRadius: "5px 0 0 5px",
                  border: "1px solid #ccc",
                  borderRight: "none",
                }}
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  padding: "0.5rem",
                  background: "#eee",
                  border: "1px solid #ccc",
                  borderLeft: "none",
                  borderRadius: "0 5px 5px 0",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "0.6rem",
              backgroundColor: "#0d6efd",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              fontWeight: "bold",
              marginBottom: "0.5rem",
            }}
          >
            Log In
          </button>

          {message && (
            <div
              style={{
                textAlign: "center",
                marginTop: "0.5rem",
                color: message.includes("✅") ? "green" : "red",
              }}
            >
              {message}
            </div>
          )}
        </form>

        <div style={{ marginTop: "1rem", textAlign: "center" }}>
          <LoginSocialGoogle
            client_id="1015285058515-mp1bflguooeh8otgbf9kk2rm64v9b1lg.apps.googleusercontent.com"
            access_type="offline"
            onResolve={({ provider, data }) => {
              localStorage.setItem("token", "google_token");
              setMessage("✅ Google login successful!");
              setTimeout(() => navigate("/home"), 1000);
            }}
            onReject={(err) => {
              console.error("Login Failed:", err);
              setMessage("❌ Google login failed.");
            }}
          >
            <button
              style={{
                backgroundColor: "#db4437",
                color: "white",
                padding: "0.6rem",
                width: "100%",
                border: "none",
                borderRadius: "5px",
                fontWeight: "bold",
              }}
            >
              <i className="fa-brands fa-google me-2"></i> Log In with Google
            </button>
          </LoginSocialGoogle>
        </div>

        {/* <p style={{ textAlign: "center", marginTop: "1rem" }}>
          Don’t have an account?{" "}
          <button
            onClick={() => navigate("/signup")}
            style={{
              background: "none",
              border: "none",
              color: "#0d6efd",
              textDecoration: "underline",
              cursor: "pointer",
              padding: 0,
            }}
          >
            Sign Up
          </button>
        </p> */}
      </div>
    </div>
  );
};

export default Login;
