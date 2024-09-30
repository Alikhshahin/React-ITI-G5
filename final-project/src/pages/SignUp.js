import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");

    console.log(existingUsers);
    const userExists = existingUsers.find(
      (user) => user.username === username || user.email === email
    );
    if (userExists) {
      alert("User with this username or email already exists!");
    } else {
      const newUser = { username, email, password, products: [] };
      localStorage.setItem(
        "users",
        JSON.stringify([...existingUsers, newUser])
      );
      alert("Sign up successful! Please sign in.");
      navigate("/signin");
    }
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-6">
        <h2>Sign Up</h2>
        <form onSubmit={handleSignUp}>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create a password"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
