import React, { useState } from 'react';

const EmailValidator = () => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(null);

  const handleInputChange = (event) => {
    const emailInput = event.target.value;
    setEmail(emailInput);

    // Regular expression for email validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    setIsValid(emailPattern.test(emailInput));
  };

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={handleInputChange}
        placeholder="Enter your email"
      />
      <p>
        {isValid === null
          ? ''
          : isValid
          ? 'Valid email address!'
          : 'Invalid email address!'}
      </p>
    </div>
  );
};

export default EmailValidator;
