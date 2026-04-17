import React from 'react';
import './CategoryNav.css';

const CategoryNav = ({ categories, activeCategory, setActiveCategory }) => {
  return (
    <nav className="category-nav">
      <div className="nav-scroll-container">
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`nav-item ${activeCategory === cat.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat.id)}
          >
            <span className="nav-icon">{cat.icon}</span>
            <span className="nav-name">{cat.name}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default CategoryNav;