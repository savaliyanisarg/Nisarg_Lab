import React, { useState } from "react";

const ColorPicker = () => {
  const [backgroundColor, setBackgroundColor] = useState("#ffffff"); // State for background color
  const [textColor, setTextColor] = useState("#000000"); // State for text color

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1>Color Picker</h1>
      
      {/* Background Color Picker */}
      <div style={{ marginBottom: "20px" }}>
        <label
          htmlFor="bgColorPicker"
          style={{ display: "block", marginBottom: "10px", fontWeight: "bold" }}
        >
          Pick Background Color:
        </label>
        <input
          id="bgColorPicker"
          type="color"
          value={backgroundColor}
          onChange={(e) => setBackgroundColor(e.target.value)}
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            cursor: "pointer",
          }}
        />
      </div>

      {/* Text Color Picker */}
      <div style={{ marginBottom: "20px" }}>
        <label
          htmlFor="textColorPicker"
          style={{ display: "block", marginBottom: "10px", fontWeight: "bold" }}
        >
          Pick Text Color:
        </label>
        <input
          id="textColorPicker"
          type="color"
          value={textColor}
          onChange={(e) => setTextColor(e.target.value)}
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            cursor: "pointer",
          }}
        />
      </div>

      {/* Paragraph */}
      <div
        style={{
          backgroundColor: backgroundColor,
          color: textColor,
          padding: "20px",
          borderRadius: "10px",
          textAlign: "center",
          border: "1px solid #ddd",
        }}
      >
        <p style={{ fontSize: "18px", fontWeight: "bold" }}>
          This is a customizable paragraph! Change my background and text color using the pickers above.
        </p>
      </div>
    </div>
  );
};

export default ColorPicker;
