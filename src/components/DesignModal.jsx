import React from 'react';
import './DesignModal.css';

function DesignModal({ title, images = [], fullText, onClose }) {
  const handleBackgroundClick = (e) => {
    if (e.target.className === 'modal-overlay') {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleBackgroundClick}>
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>✕</button>
        <h2>{title}</h2>
        <p>{fullText}</p>
        <div className="image-grid">
          {images.map((src, index) => (
            <img key={index} src={src} alt={`Slide ${index + 1}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default DesignModal;
