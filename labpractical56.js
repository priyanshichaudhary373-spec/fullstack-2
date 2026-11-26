const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let products = [
  { id: 1, name: "Laptop", price: 50000, rating: 4.5 },
  { id: 2, name: "Mobile", price: 20000, rating: 4.2 }
];

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.post("/api/products", (req, res) => {
  const product = {
    id: Date.now(),
    ...req.body
  };
  products.push(product);
  res.json(product);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});


// App.jsx (React Frontend)

import React, { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const addProduct = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        price: Number(price),
        rating: Number(rating)
      })
    });

    const data = await res.json();
    setProducts([...products, data]);
    setName("");
    setPrice("");
    setRating("");
  };

  return (
    <div>
      <h1>Product List</h1>

      {products.map(p => (
        <div key={p.id}>
          <h3>{p.name}</h3>
          <p>Price: {p.price}</p>
          <p>Rating: {p.rating}</p>
        </div>
      ))}

      <h2>Add Product</h2>

      <form onSubmit={addProduct}>
        <input placeholder="Name" value={name}
          onChange={e => setName(e.target.value)} required />

        <input placeholder="Price" type="number" value={price}
          onChange={e => setPrice(e.target.value)} required />

        <input placeholder="Rating" type="number" value={rating}
          onChange={e => setRating(e.target.value)} required />

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default App;