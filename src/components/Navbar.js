// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FaHome, FaInfoCircle, FaHeadset, FaSignInAlt, FaUserPlus } from "react-icons/fa";
import logo from "../Images/logo.svg"; // ✅ make sure this path is correct

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light shadow-sm"
      style={{
        height: "80px",
        paddingLeft: "20px",
        paddingRight: "5px",
      }}
    >
      <div className="container-fluid">
        <Link
          className="navbar-brand fw-bold d-flex align-items-center"
          to="/"
          style={{
            marginLeft: "0",
            textDecoration: "none",
            color: "#000",
          }}
        >
          <img
            src={logo}
            alt="BookHo Logo"
            style={{
              height: "55px",
              width: "auto",
              objectFit: "contain",
              marginRight: "10px",
            }}
          />
          {/* <span style={{ fontSize: "1.6rem", fontWeight: "600" }}>BookHo</span> */}
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
          aria-controls="navMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

            {/* Home */}
            <li className="nav-item">
              <Link className="nav-link active d-flex align-items-center" to="/">
                <FaHome className="me-2" /> Home
              </Link>
            </li>

            {/* About */}
            <li className="nav-item">
              <Link className="nav-link d-flex align-items-center" to="/about">
                <FaInfoCircle className="me-2" /> About
              </Link>
            </li>

            {/* Support */}
            <li className="nav-item">
              <Link className="nav-link d-flex align-items-center" to="/support">
                <FaHeadset className="me-2" /> Support
              </Link>
            </li>

            {/* ✅ Sign In Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle d-flex align-items-center ms-2"
                href="#"
                id="signinDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{
                  color: "#000",
                  fontWeight: "500",
                  transition: "all 0.3s ease",
                  padding: "6px 14px",
                  borderRadius: "6px",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#007bff";
                  e.target.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "";
                  e.target.style.color = "#000";
                }}
              >
                <FaSignInAlt className="me-2" /> Sign In
              </a>

              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="signinDropdown">
                <li>
                  <Link className="dropdown-item d-flex align-items-center" to="/signin">
                    <FaSignInAlt className="me-2" /> Sign In
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item d-flex align-items-center" to="/signup">
                    <FaUserPlus className="me-2" /> Sign Up
                  </Link>
                </li>
              </ul>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
