import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './CategoryNav.css';

const CategoryButton = ({ categories, activeCategory, setActiveCategory }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (id) => {
    setActiveCategory(id);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Поднимаем вверх при смене категории
  };

  return (
    <>
      {/* Сама плавающая кнопка */}
      <div className="category-floating-wrapper">
        <button className="category-fab" onClick={() => setIsOpen(!isOpen)}>
          <div className={`burger-icon ${isOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <span className="fab-text">КАТЕГОРИИ</span>
        </button>
      </div>

      {/* Выплывающее меню категорий */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="category-popup-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div 
              className="category-popup-content"
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="popup-grid">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    className={`popup-item ${activeCategory === cat.id ? 'active' : ''}`}
                    onClick={() => handleSelect(cat.id)}
                  >
                    <span className="popup-icon">{cat.icon}</span>
                    <span className="popup-name">{cat.name}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CategoryButton;