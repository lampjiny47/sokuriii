import React from 'react';

const TextArea = ({ label, onChange, value }) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div>
      <label>{label}</label>
      <textarea value={value} onChange={handleChange} />
    </div>
  );
};

export default TextArea;
