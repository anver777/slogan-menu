import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './MenuGrid.css';

const MenuGrid = ({ items, onAdd }) => {
  return (
    <div className="menu-container">
      <AnimatePresence mode='wait'>
        <motion.div 
          key={items[0]?.categoryId || 'empty'} 
          className="menu-list"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          {items.map((item) => (
            <div className="menu-card" key={item.id}>
              <div className="card-info">
                <div className="card-header">
                  <h3 className="item-name">{item.name}</h3>
                  <span className="item-weight">{item.weight}</span>
                </div>
                <p className="item-desc">{item.desc}</p>
                <span className="item-price">{item.price} ₽</span>
              </div>
              
              <button 
                className="add-button" 
                onClick={() => onAdd(item)}
                aria-label="Добавить в корзину"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 5V19M5 12H19" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default MenuGrid;