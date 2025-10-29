import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <>
      <footer className="footer bg-dark text-light py-5 ">
        <div className="container">
          <div className="row justify-content-center text-center text-md-start">
            {/* Top Destinations */}
            <div className="col-md-3 col-sm-6 mb-4">
              <h5 className="footer-heading">Top Destinations</h5>
              <ul className="footer-list">
                <li>Hotels in United States of America</li>
                <li>Hotels in Andhra Pradesh</li>
                <li>Hotels in Telangana</li>
                <li>Hotels in Kerala</li>
              </ul>
            </div>

            {/* Support & FAQs */}
            <div className="col-md-3 col-sm-6 mb-4">
              <h5 className="footer-heading">Support & FAQs</h5>
              <ul className="footer-list">
                <li>Your bookings</li>
                <li>FAQs</li>
                <li>Contact us</li>
                <li>Review a property</li>
                <li>Policies</li>
                <li>Terms & Conditions</li>
                <li>Privacy</li>
                <li>Cookies</li>
              </ul>
            </div>

            {/* Other Information */}
            <div className="col-md-3 col-sm-6 mb-4">
              <h5 className="footer-heading">Other Information</h5>
              <ul className="footer-list">
                <li>About Us</li>
                <li>Careers</li>
                <li>Hotels near me</li>
                <li>Travel Guides</li>
                <li>Vacation rentals</li>
                <li>One Key credit cards</li>
                <li>Content guidelines and reporting content</li>
              </ul>
            </div>

            {/* New Section */}
            <div className="col-md-3 col-sm-6 mb-4">
              <h5 className="footer-heading">For Suppliers, Affiliates and the Media</h5>
              <ul className="footer-list">
                <li>Affiliate with us</li>
                <li>Expedia Partner Solutions</li>
                <li>Newsroom</li>
                <li>Promote with Us</li>
                <li>Travel Agents</li>
              </ul>
            </div>
          </div>

          <hr className="border-secondary my-4" />

          <div className="text-center">
            <p className="mb-0 small">
              © {new Date().getFullYear()} <strong>BookHo.com</strong> — All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Inline Custom Styles */}
      <style>{`
        .footer {
          background-color: #111;
          color: #ccc;
        }

        .footer-heading {
          font-weight: 700;
          font-size: 1.1rem;
          color: #fff;
          margin-bottom: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .footer-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-list li {
          margin-bottom: 0.5rem;
          cursor: pointer;
          transition: color 0.2s ease-in-out;
        }

        .footer-list li:hover {
          color: #f8d210;
        }

        hr {
          border-color: #444;
        }

        @media (max-width: 768px) {
          .footer {
            text-align: center;
          }

          .footer-heading {
            margin-top: 1rem;
          }
        }
      `}</style>
    </>
  );
};

export default Footer;