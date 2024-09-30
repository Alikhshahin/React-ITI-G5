// src/pages/Dashboard.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState("");
  const navigate = useNavigate();

  const handleAddProduct = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      alert("Please sign in first!");
      navigate("/signin");
      return;
    }

    const newProduct = { name, price, description, photo };
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const updatedUsers = users.map((u) => {
      if (u.username === user.username) {
        u.products = u.products ? [...u.products, newProduct] : [newProduct];
        return u;
      }
      return u;
    });
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    // Update the current user in local storage
    localStorage.setItem(
      "user",
      JSON.stringify({
        ...user,
        products: user.products ? [...user.products, newProduct] : [newProduct],
      })
    );

    alert("Product added successfully!");
    // Optionally, reset the form
    setName("");
    setPrice("");
    setDescription("");
    setPhoto("");
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <h2>Add New Product</h2>
        <form onSubmit={handleAddProduct}>
          <div className="mb-3">
            <label className="form-label">Product Name</label>
            <input
              type="text"
              className="form-control"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Price ($)</label>
            <input
              type="number"
              className="form-control"
              required
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              min="0"
              step="0.01"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea
              className="form-control"
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="mb-3">
            <label className="form-label">Photo URL</label>
            <input
              type="text"
              className="form-control"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
              placeholder="Enter image URL or leave blank"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}

export default Dashboard;
