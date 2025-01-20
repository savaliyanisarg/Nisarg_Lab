import React, { useState } from 'react';

const ToggleText = () => {
  const [text, setText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const handleToggleVisibility = () => {
    setIsVisible(prevState => !prevState);
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter some text"
      />
      <button onClick={handleToggleVisibility}>
        {isVisible ? 'Hide Text' : 'Show Text'}
      </button>
      {isVisible && <p>{text}</p>}
    </div>
  );
};

export default ToggleText;
