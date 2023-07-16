import React, { useState } from 'react';

function Dropdown({ onOptionSelect, category }) {
    const dropdown = ["Inquiries", "Suggestions", "General Correspondence"];
    const dropdownParas = ["If you have any questions about our products or services, please don't hesitate to ask." +
    "Our team is ready to provide you with the information you need.", "We continually strive to improve our offerings and service. " +
    "If you have any suggestions or feedback, we would be pleased to hear from you.", "We welcome all forms of communication. Whether" +
    "you have a specific concern or simply wish to discuss our services, we're here to assist."];
  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onOptionSelect(event.target.value); // Pass the selected option to the parent component
  };

  return (
    <div className="dropdown">
      <select value={category} onChange={handleOptionChange}>
        {/* Generating options dynamically from the lookbackOptions array */}
        {dropdown.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;