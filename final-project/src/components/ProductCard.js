import React from "react";

function ProductCard({ product }) {
  const { name, price, description, photo, owner } = product;

  return (
    <div className="card mb-4 shadow-sm">
      <img
        src={photo || "https://via.placeholder.com/150"}
        className="card-img-top"
        alt={name}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">By: {owner}</h6>
        <p className="card-text">{description}</p>
        <p className="card-text">
          <strong>Price:</strong> ${price}
        </p>
      </div>
    </div>
  );
}

export default ProductCard;
