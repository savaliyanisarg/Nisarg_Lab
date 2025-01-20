import React, { useState } from 'react';

const Exce1 = () => {
    const [num1] = useState(5);
    const [num2] = useState(4);

    return (
        <div>
            <p>Addition: {num1 + num2}</p>
            <p>Subtraction: {num1 - num2}</p>
            <p>Multiplication: {num1 * num2}</p>
            <p>Division: {num2 !== 0 ? (num1 / num2):"not divided"}</p>
        </div>
    );
};

export default Exce1;