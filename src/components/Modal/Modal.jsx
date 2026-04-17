import React from 'react';
import { motion } from 'framer-motion';
import './Modal.css';

const Modal = ({ item, close, onAdd }) => {
  return (
    <motion.div className="modal-backdrop" onClick={close}>
      <motion.div className="premium-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-bar"></div>
        <h2>{item.name}</h2>
        <p className="modal-desc">{item.desc}</p>
        
        <div className="modal-info">
          <span className="modal-weight">{item.weight}</span>
          <span className="modal-price">{item.price}₽</span>
        </div>

        <button 
          className="btn-confirm" 
          onClick={() => {
            onAdd(item);
            close(); 
          }}
        >
          ДОБАВИТЬ В ЗАКАЗ
        </button>
      </motion.div>
    </motion.div>
  );
};

export default Modal;