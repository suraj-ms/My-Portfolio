import React, { useState } from 'react';
import '../styles/Accordion.css'; // Optional: Create a CSS file for styling

// Accordion Item Component
const AccordionItem = ({ title, content, isOpen, onToggle }) => {
  return (
    <div className="accordion-item">
      <div className="accordion-header" onClick={onToggle}>
        <h3>{title}</h3>
        <span>{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && (
        <div className="accordion-content">
          {Array.isArray(content) ? (
            <ul>
              {content.map((child, index) => {
                if (typeof child === 'object') {
                  // Render object with image and details
                  return (
                    <li key={index} className="accordion-object-item">
                      {child.img && <span span className="accordion-item-image" > <img src={child.img} alt={child.title}  /> </span>}
                      <div className="accordion-item-details">
                        <h4>{child.title}</h4>
                        {child.company && <p><strong>Company:</strong> {child.company}</p>}
                        <p>{child.def}</p>
                      </div>
                    </li>
                  );
                }
                // Render plain text for simpler content
                return <li key={index}>{child}</li>;
              })}
            </ul>
          ) : (
            content
          )}
        </div>
      )}
    </div>
  );
};


// Main Accordion Component
const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;

