import React, { useState } from 'react';
import DesignModal from './DesignModal';

function DesignCard({ title, description, preview, images, fullText }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="design-card">
        <img src={preview} alt={title} className="design-preview" />
        <h3>{title}</h3>
        <p>{description}</p>
        <button onClick={() => setIsOpen(true)}>View More</button>
      </div>

      {isOpen && (
        <DesignModal
          title={title}
          images={images}
          fullText={fullText}
          onClose={() => setIsOpen(false)}
        />
      )}
    </>
  );
}

export default DesignCard;
