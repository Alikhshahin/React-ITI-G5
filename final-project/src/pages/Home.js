import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

function Home() {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    let products = [];
    users.forEach((user) => {
      user.products.forEach((product) => {
        products.push({ ...product, owner: user.username });
      });
    });
    setAllProducts(products);
  }, []);

  return (
    <div>
      <h2 className="text-center mb-4">All Products</h2>
      {allProducts.length === 0 ? (
        <p className="text-center">No products available.</p>
      ) : (
        <div className="row">
          {allProducts.map((product, index) => (
            <div className="col-md-4" key={index}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
