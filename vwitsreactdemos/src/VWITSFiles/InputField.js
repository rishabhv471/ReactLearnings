// InputField.js

import React, { useState } from 'react';

const InputField = () => {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Type something..."
      />
      <p>Text: {inputText}</p>
    </div>
  );
};

export default InputField;
