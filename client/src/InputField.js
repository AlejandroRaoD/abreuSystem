import React, { useContext } from 'react';
import { FormContext } from './FormContext';

function InputField({ label, name, type = "text" }) {
  const { formData, handleChange } = useContext(FormContext);

  return (
    <div>
      <label>
        {label}: 
        <input 
          name={name} 
          type={type} 
          value={formData[name]} 
          onChange={handleChange} 
        />
      </label>
    </div>
  );
}

export default InputField;
