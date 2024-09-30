// src/components/Footer.js
import React, { useState } from "react";

function Footer() {
  const [contactEmail, setContactEmail] = useState("");

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (contactEmail.trim() === "") {
      alert("Please enter a valid email address.");
      return;
    }
    // For demonstration, we'll just alert the email. Integrate with backend as needed.
    alert(
      `Thank you for contacting us, ${contactEmail}! We'll get back to you shortly.`
    );
    setContactEmail("");
  };

  return (
    <footer className="text-center py-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3">
            <h5>About Us</h5>
            <p>Your trusted platform for buying and selling products.</p>
            <h6>Email: alikhshahin@gmail.com</h6>
            <h6>Phone: +20 114 052 9420</h6>
          </div>

          <div className="col-md-4 mb-3">
            <h5>Contact Us</h5>
            <form onSubmit={handleContactSubmit}>
              <div className="mb-2">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary btn-sm">
                Submit
              </button>
            </form>
          </div>

          <div className="col-md-4 mb-3">
            <h5>Follow Us</h5>
            <a href="#" className="me-2">
              Facebook
            </a>
            <a href="#" className="me-2">
              Twitter
            </a>
            <a href="#" className="me-2">
              Instagram
            </a>
          </div>
        </div>
        <hr style={{ borderColor: "var(--color-secondary)" }} />
        <p>
          &copy; {new Date().getFullYear()} E-Commerce App. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
