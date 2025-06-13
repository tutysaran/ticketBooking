import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { LoginSocialGoogle } from "reactjs-social-login";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "admin@gmail.com" && password === "123") {
      setMessage("✅ Login successful!");
      setTimeout(() => navigate("/home"), 1000);
    } else {
      setMessage("❌ Invalid email or password.");
    }
  };

  return (
    <div
      className="background">
      <div className="container-fluid d-flex align-items-center justify-content-center min-vh-100" style={{backgroundColor:"transparent"}}>
        <div
          className="card p-4 shadow-lg"
          style={{
            maxWidth: "400px",
            width: "100%",
          // Transparent white
            borderRadius: "1rem",
          }}
        >
          <h3 className="text-center mb-3">Welcome back!</h3>
          <p className="text-center text-muted">Please enter your details</p>

          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
              />
            </div>

            <div className="mb-3 position-relative">
              <label className="form-label">Password</label>
              <div className="input-group">
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                />
                <span
                  className="input-group-text"
                  style={{ cursor: "pointer" }}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>

            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="rememberCheck"
                />
                <label className="form-check-label" htmlFor="rememberCheck">
                  Remember for 30 days
                </label>
              </div>
              <a href="#" className="text-decoration-none">
                Forgot password?
              </a>
            </div>

            <button type="submit" className="btn btn-primary w-100 mb-2">
              Log In
            </button>

            {message && (
              <div className="alert alert-info mt-2 text-center" role="alert">
                {message}
              </div>
            )}
          </form>

          <div className="my-3 text-center">
            <LoginSocialGoogle
              client_id="1015285058515-mp1bflguooeh8otgbf9kk2rm64v9b1lg.apps.googleusercontent.com"
              access_type="offline"
              onResolve={({ provider, data }) => {
                console.log("Login Success:", provider, data);
                setMessage("✅ Google login successful!");
                setTimeout(() => navigate("/home"), 1000);
              }}
              onReject={(err) => {
                console.error("Login Failed:", err);
                setMessage("❌ Google login failed.");
              }}
            >
              <button className="btn btn-danger w-100">
                <i className="fa-brands fa-google me-2"></i> Log In with Google
              </button>
            </LoginSocialGoogle>
          </div>

          <p className="text-center">
            Don’t have an account?{" "}
            <button
              className="btn btn-link p-0"
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
