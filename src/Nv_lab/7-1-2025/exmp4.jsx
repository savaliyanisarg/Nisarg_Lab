import React, { useState } from 'react';

const CharacterCount = () => {
  const [text, setText] = useState('');

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <textarea 
        value={text} 
        onChange={handleInputChange} 
        placeholder="Type something..." 
      />
      <p>Total number of characters: {text.length}</p>
    </div>
  );
};

export default CharacterCount;
