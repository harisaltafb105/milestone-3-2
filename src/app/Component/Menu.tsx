"use client";
import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { Product } from "@/types";

const Menu = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/products");
        if (!response.ok) throw new Error(`Error: ${response.status}`);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError("Failed to load products.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();

    // Load cart from localStorage
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      let updatedCart;

      if (existingItem) {
        updatedCart = prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: (item.quantity || 0) + 1 } : item
        );
      } else {
        updatedCart = [...prevCart, { ...product, quantity: 1 }];
      }

      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    localStorage.removeItem("cart");
    setCart([]);
    setOrderConfirmed(true);

    setTimeout(() => setOrderConfirmed(false), 3000);
  };

  // ✅ Calculate Total Price & Quantity
  const totalQuantity = cart.reduce((acc, item) => acc + (item.quantity || 1), 0);
  const totalPrice = cart.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);

  return (
    <div className="relative min-h-screen py-6">
      <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('/bur1.jpg')" }}></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center mb-8">
        <h1 className="text-4xl font-bold text-black mb-4">Delicious Burgers</h1>
        <p className="text-xl text-gray-700">Try our mouthwatering selection!</p>
      </div>

      {orderConfirmed && (
        <div className="bg-green-500 text-white text-center p-4 rounded-lg shadow-md mb-6">
          ✅ Order Confirmed! Thank you for your purchase.
        </div>
      )}

      <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {loading ? (
          <p className="text-center text-gray-600">Loading products...</p>
        ) : error ? (
          <p className="text-center text-red-600">{error}</p>
        ) : products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
          ))
        ) : (
          <p className="text-center text-gray-600">No products available.</p>
        )}
      </div>

      {/* ✅ Cart Summary Section */}
      {cart.length > 0 && (
        <div className="fixed bottom-4 right-4 bg-white shadow-lg p-4 rounded-lg w-72">
          <h2 className="text-lg font-bold mb-2">🛒 Cart Summary</h2>
          <p>Total Items: {totalQuantity}</p>
          <p>Total Price: ${totalPrice.toFixed(2)}</p>

          <button
            className="mt-3 bg-blue-600 text-white w-full py-2 rounded-md cursor-pointer hover:bg-blue-700 transition"
            onClick={handleCheckout}
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Menu;
