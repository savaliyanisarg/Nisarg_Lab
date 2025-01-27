import React, { useState } from "react";

const AlphanumericInput = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    // Remove all non-alphanumeric characters
    const sanitizedValue = value.replace(/[^a-zA-Z0-9]/g, "");
    setInputValue(sanitizedValue);
  };

  return (
    <div style={{ margin: "20px", fontFamily: "Arial, sans-serif" }}>
      <label htmlFor="alphanumeric" style={{ display: "block", marginBottom: "10px", fontWeight: "bold" }}>
        Alphanumeric Input:
      </label>
      <input
        id="alphanumeric"
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter letters and numbers"
        style={{
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          width: "300px",
        }}
      />
      <p style={{ marginTop: "10px", fontSize: "14px", color: "#555" }}>
        Only letters and numbers are allowed.
      </p>
    </div>
  );
};

export default AlphanumericInput;
