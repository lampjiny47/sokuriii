import React from 'react';

const TextInput = ({ label, onChange, value }) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div>
      <label>{label}</label>
      <input type="text" value={value} onChange={handleChange} />
    </div>
  );
};

export default TextInput;
