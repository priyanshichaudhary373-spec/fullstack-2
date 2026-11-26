import React, { useState } from "react";

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mobile", price: 20000 },
    { id: 3, name: "Headphones", price: 2000 }
  ]);

  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const checkout = () => {
    if (cart.length === 0) return;

    setOrders([...orders, ...cart]);
    setCart([]);
    alert("Order placed successfully!");
  };

  const addProduct = () => {
    if (!name || !price || Number(price) <= 0) return;

    setProducts([
      ...products,
      {
        id: Date.now(),
        name,
        price: Number(price)
      }
    ]);

    setName("");
    setPrice("");
  };

  const deleteProduct = (id) => {
    setProducts(products.filter(p => p.id !== id));
  };

  const total = cart.reduce((sum, p) => sum + p.price, 0);

  return (
    <div>
      <h1>E-Commerce Website</h1>

      <h2>All Products</h2>

      {products.map(p => (
        <div key={p.id}>
          <h3>{p.name}</h3>
          <p>Price: ₹{p.price}</p>
          <button onClick={() => addToCart(p)}>
            Add to Cart
          </button>
        </div>
      ))}

      <h2>Shopping Cart</h2>

      {cart.map((p, i) => (
        <p key={i}>{p.name} - ₹{p.price}</p>
      ))}

      <h3>Total: ₹{total}</h3>

      <button onClick={checkout}>
        Proceed to Payment (Demo)
      </button>

      <h2>Successful Orders</h2>

      {orders.map((p, i) => (
        <p key={i}>{p.name} - ₹{p.price}</p>
      ))}

      <h2>Seller Admin Panel</h2>

      <input
        placeholder="Product Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <input
        placeholder="Product Price"
        type="number"
        value={price}
        onChange={e => setPrice(e.target.value)}
      />

      <button onClick={addProduct}>Add Product</button>

      <h3>Edit / Delete Products</h3>

      {products.map(p => (
        <div key={p.id}>
          {p.name} - ₹{p.price}
          <button onClick={() => {
            const newName = prompt("Enter new name", p.name);
            const newPrice = prompt("Enter new price", p.price);

            if (newName && Number(newPrice) > 0) {
              setProducts(products.map(item =>
                item.id === p.id
                  ? { ...item, name: newName, price: Number(newPrice) }
                  : item
              ));
            }
          }}>
            Edit
          </button>

          <button onClick={() => deleteProduct(p.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;