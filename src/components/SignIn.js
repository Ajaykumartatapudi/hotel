// src/components/SignIn.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import backgroundImage from "../Images/signin.jpg"; // Use same background for consistency

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Logged in with ${email}`);
  };

  const handleSignUpRedirect = () => {
    navigate("/signup"); // ✅ Redirects to Signup page
  };

  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.6)",
        }}
      ></div>

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div className="row justify-content-center">
          <div className="col-md-6 d-flex justify-content-center">
            <div
              style={{
                background: "rgba(255,255,255,0.95)",
                padding: "30px",
                borderRadius: "10px",
                width: "100%",
                maxWidth: "400px",
                boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
              }}
            >
              {/* ✅ Added heading and tagline */}
              <div className="text-center mb-4">
                <h3 className="fw-bold" style={{ color: "#0d6efd" }}>
                  BookHo.com
                </h3>
                <h5 className="mt-2">Sign in or create an account</h5>
                <p className="text-muted" style={{ fontSize: "14px" }}>
                  Unlock a world of stays with one account across BookHo
                </p>
              </div>

              {/* Sign-in Form */}
              <form onSubmit={handleLogin}>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100 mb-3">
                  Sign In
                </button>
              </form>

              {/* Redirect to Sign Up */}
              <p className="text-center" style={{ fontSize: "14px" }}>
                Don’t have an account?{" "}
                <span
                  style={{
                    color: "#0d6efd",
                    cursor: "pointer",
                    textDecoration: "underline",
                  }}
                  onClick={handleSignUpRedirect}
                >
                  Sign up
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
