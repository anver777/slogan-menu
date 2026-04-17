import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Cart.css';

const Cart = ({ cartItems, updateQuantity, removeFromCart, isOpen, setIsOpen }) => {
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (cartItems.length === 0) return null;

  return (
    <>
      {/* Плавающая кнопка (оставляем как была) */}
      {!isOpen && (
        <motion.div className="cart-floating-btn" onClick={() => setIsOpen(true)}>
          <div className="btn-content">
            <span className="items-count">{cartItems.length}</span>
            <span className="btn-total">{total} ₽</span>
          </div>
        </motion.div>
      )}

      <AnimatePresence>
        {isOpen && (
          <motion.div className="cart-overlay" onClick={() => setIsOpen(false)}>
            <motion.div className="cart-sheet" onClick={(e) => e.stopPropagation()}>
              <div className="sheet-handle" onClick={() => setIsOpen(false)} />
              
              <div className="cart-items-list">
                {cartItems.map((item) => (
                  <div className="cart-item" key={item.id}>
                    <div className="cart-item-info">
                      <span className="cart-item-name">{item.name}</span>
                      <span className="cart-item-price">{item.price * item.quantity} ₽</span>
                    </div>

                    <div className="cart-controls" onClick={(e) => e.stopPropagation()}>
  <div className="quantity-selector">
    <button 
      onClick={(e) => {
        e.stopPropagation();
        updateQuantity(item.id, -1);
      }}
    >
      −
    </button>
    
    <span>{item.quantity}</span>
    
    <button 
      onClick={(e) => {
        e.stopPropagation();
        updateQuantity(item.id, 1);
      }}
    >
      +
    </button>
  </div>
  
  <button 
    className="remove-icon-btn" 
    onClick={(e) => {
      e.stopPropagation();
      removeFromCart(item.id);
    }}
  >
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2">
      <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2M10 11v6M14 11v6" />
    </svg>
  </button>
</div>
                  </div>
                ))}
              </div>

              <div className="cart-footer">
                <div className="footer-total">
                  <span>Итого</span>
                  <span>{total} ₽</span>
                </div>
                <button className="order-btn">Заказать</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Cart;