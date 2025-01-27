import React, { useState } from "react";

const Pagination = () => {
  // Static array of 25 items
  const items = Array.from({ length: 25 }, (_, index) => `Item ${index + 1}`);
  
  const [currentPage, setCurrentPage] = useState(1); // State to track the current page
  const itemsPerPage = 5; // Number of items per page

  // Calculate the items to display for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = items.slice(startIndex, endIndex);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1>Pagination Example</h1>

      {/* Display the current items */}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {currentItems.map((item, index) => (
          <li
            key={index}
            style={{
              marginBottom: "10px",
              padding: "10px",
              backgroundColor: "#f4f4f4",
              borderRadius: "5px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            {item}
          </li>
        ))}
      </ul>

      {/* Pagination buttons */}
      <div style={{ marginTop: "20px" }}>
        {Array.from({ length: Math.ceil(items.length / itemsPerPage) }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            style={{
              padding: "10px 15px",
              margin: "0 5px",
              backgroundColor: currentPage === index + 1 ? "#007bff" : "#ccc",
              color: currentPage === index + 1 ? "#fff" : "#000",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontWeight: currentPage === index + 1 ? "bold" : "normal",
              transition: "background-color 0.3s ease",
            }}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
