// SignupForm.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import "bootstrap/dist/css/bootstrap.min.css";
import backgroundImage from "../Images/lobby.jpg"; // Replace with your image

const SignupForm = () => {
  const [phone, setPhone] = useState("");
  const navigate = useNavigate(); // ✅ For navigation

  const handleVerify = (e) => {
    e.preventDefault();
    alert(`Verification code sent to ${phone}`);
  };

  const handleSignInRedirect = () => {
    navigate("/signin"); // ✅ Redirect to SignIn page
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
      {/* Black overlay */}
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
        <div className="row">
          <div className="col-md-6 d-flex flex-column justify-content-center text-white">
            <h1 style={{ fontSize: "3rem", fontWeight: "700", lineHeight: "1.3" }}>
              Welcome to Our  BookHo
            </h1>
            <p style={{ fontSize: "1.25rem", lineHeight: "1.6", marginTop: "10px" }}>
              Book your stay, explore amenities, and enjoy a luxurious experience.
              Join us today and make your stay unforgettable!
            </p>
          </div>
          {/* Right form */}
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
              <h2 className="text-center mb-4">Login / Signup</h2>
              <form onSubmit={handleVerify}>
                <div className="mb-3">
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Enter your phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100 mb-3">
                  Verify
                </button>
              </form>
              <p className="text-center" style={{ fontSize: "14px" }}>
                Prefer to Sign in with password instead?{" "}
                <span
                  style={{
                    color: "#0d6efd",
                    cursor: "pointer",
                    textDecoration: "underline",
                  }}
                  onClick={handleSignInRedirect} // ✅ Navigate on click
                >
                  Click here
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
