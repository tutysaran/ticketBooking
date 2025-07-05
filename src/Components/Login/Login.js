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
        background: "linear-gradient(to right, #2BC0E4, #EAECC6)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          maxWidth: "420px",
          width: "100%",
          padding: "2.5rem",
          borderRadius: "1rem",
          background: "rgba(255, 255, 255, 0.95)",
          boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
          backdropFilter: "blur(10px)",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "10px",
            background: "linear-gradient(to right, #6a11cb, #2575fc)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: "bold",
            fontSize: "28px",
          }}
        >
          Welcome Back!
        </h2>
        <p style={{ textAlign: "center", color: "#555", marginBottom: "2rem" }}>
          Log in to continue
        </p>

        <form onSubmit={handleLogin}>
          {/* Email */}
          <div style={{ marginBottom: "1.5rem" }}>
            <label style={{ display: "block", marginBottom: "5px", color: "#333" }}>
              Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              style={{
                width: "100%",
                padding: "0.7rem",
                borderRadius: "8px",
                border: "1px solid #ccc",
                outline: "none",
                fontSize: "15px",
              }}
            />
          </div>

          {/* ✅ Password with corrected alignment */}
          <div style={{ marginBottom: "1.5rem" }}>
            <label style={{ display: "block", marginBottom: "5px", color: "#333" }}>
              Password
            </label>
            <div style={{ position: "relative" }}>
              <input
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                style={{
                  width: "100%",
                  padding: "12px 50px 12px 15px",
                  borderRadius: "8px",
                  border: "1px solid #ccc",
                  fontSize: "15px",
                  outline: "none",
                  boxSizing: "border-box",
                }}
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: "absolute",
                  top: "50%",
                  right: "12px",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                  color: "#444",
                  fontSize: "18px",
                }}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "0.75rem",
              backgroundColor: "#2575fc",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              fontWeight: "bold",
              fontSize: "16px",
              cursor: "pointer",
              marginBottom: "1rem",
              transition: "0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#1a5edb")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#2575fc")}
          >
            Log In
          </button>

          {/* Message */}
          {message && (
            <div
              style={{
                textAlign: "center",
                marginTop: "0.5rem",
                color: message.includes("✅") ? "green" : "red",
                fontWeight: "bold",
              }}
            >
              {message}
            </div>
          )}
        </form>

        {/* Google Login */}
        <div style={{ marginTop: "1.5rem", textAlign: "center" }}>
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
                padding: "0.7rem",
                width: "100%",
                border: "none",
                borderRadius: "8px",
                fontWeight: "bold",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              <i className="fa-brands fa-google me-2"></i> Log In with Google
            </button>
          </LoginSocialGoogle>
        </div>
      </div>
    </div>
  );
};

export default Login;
