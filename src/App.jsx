import React, { useState } from 'react';
import Header from './components/Header/Header';
import CategoryNav from './components/CategoryNav/CategoryNav';
import MenuGrid from './components/MenuGrid/MenuGrid';
import Cart from './components/Cart/Cart';
import { menuData } from './data/menu';
import CategoryButton from './components/CategoryNav/CategoryButton';

function App() {
  const [activeCategory, setActiveCategory] = useState('salads');
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const filteredItems = menuData.items.filter(
    (item) => item.categoryId === activeCategory
  );

  const addToCart = (item) => {
  setCartItems(prev => {
    const existing = prev.find(i => i.id === item.id);
    if (existing) {
      return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
    }
    return [...prev, { ...item, quantity: 1 }];
  });
};

const updateQuantity = (id, delta) => {
  setCartItems(prev => prev.map(item => {
    if (item.id === id) {
      const newQty = item.quantity + delta;
      return newQty > 0 ? { ...item, quantity: newQty } : item;
    }
    return item;
  }));
};

const removeFromCart = (id) => {
  setCartItems(prev => prev.filter(item => item.id !== id));
};

  return (
    <div className="app">
      <Header />
      <CategoryNav 
        categories={menuData.categories} 
        activeCategory={activeCategory} 
        setActiveCategory={setActiveCategory} 
      />
      <MenuGrid 
        items={filteredItems} 
        onAdd={addToCart} 
      />
      <Cart 
  cartItems={cartItems} 
  updateQuantity={updateQuantity} 
  removeFromCart={removeFromCart}
  isOpen={isCartOpen}
  setIsOpen={setIsCartOpen}
/>
                 <CategoryButton 
  categories={menuData.categories} 
  activeCategory={activeCategory} 
  setActiveCategory={setActiveCategory}  />
    </div>
  );
}

export default App;