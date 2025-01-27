import React, { useState } from "react";

const DayNightTheme = () => {
  const [isDay, setIsDay] = useState(true); // State to track the theme (day or night)

  // Toggle theme handler
  const toggleTheme = () => {
    setIsDay((prevIsDay) => !prevIsDay);
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: isDay ? "#f5f5dc" : "#2c3e50",
        color: isDay ? "#000000" : "#ecf0f1",
        fontFamily: "Arial, sans-serif",
        transition: "all 0.5s ease",
      }}
    >
      <h1>{isDay ? "Day Theme" : "Night Theme"}</h1>
      <p>
        Switch between day and night themes by toggling the button below.
      </p>
      <label
        style={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          marginTop: "20px",
        }}
      >
        <span style={{ marginRight: "10px" }}>
          {isDay ? "🌞 Day Mode" : "🌜 Night Mode"}
        </span>
        <input
          type="checkbox"
          checked={!isDay}
          onChange={toggleTheme}
          style={{
            width: "50px",
            height: "25px",
            appearance: "none",
            backgroundColor: isDay ? "#ccc" : "#34495e",
            borderRadius: "50px",
            position: "relative",
            outline: "none",
            transition: "all 0.5s ease",
          }}
        />
        <div
          style={{
            width: "20px",
            height: "20px",
            backgroundColor: isDay ? "#ffffff" : "#f1c40f",
            borderRadius: "50%",
            position: "absolute",
            top: "2.5px",
            left: isDay ? "2.5px" : "27.5px",
            transition: "all 0.5s ease",
          }}
        />
      </label>
    </div>
  );
};

export default DayNightTheme;
