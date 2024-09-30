import React from "react";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/signin");
  };

  return (
    <div className="text-center mt-5">
      <h1>Welcome to Our E-Commerce Platform</h1>
      <p className="lead">Buy and sell products with ease.</p>
      <button className="btn btn-primary mt-3" onClick={handleGetStarted}>
        Get Started
      </button>
    </div>
  );
}

export default LandingPage;
