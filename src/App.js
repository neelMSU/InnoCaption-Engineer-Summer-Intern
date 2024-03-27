// src/App.js (Modifications for a Sidebar)
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from './components/CartContext';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './App.css'; 

function App() {
  return (
    <CartProvider>
      <div className="App">
        <div className="main-content">
          <ProductList />
        </div>
        <div className="sidebar">
          <Cart />
        </div>
      </div>
    </CartProvider>
  );
}

export default App;
