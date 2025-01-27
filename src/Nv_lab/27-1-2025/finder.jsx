import React, { useState } from "react";

const ContentFinder = () => {
  const [items, setItems] = useState(["Apple", "Banana", "Cherry", "Date", "Elderberry"]);
  const [searchTerm, setSearchTerm] = useState(""); // State for search input
  const [newItem, setNewItem] = useState(""); // State for new item input

  // Filtered items based on search term
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Add new item to the list
  const addItem = () => {
    if (newItem.trim() !== "") {
      setItems([...items, newItem]);
      setNewItem(""); // Clear input
    }
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1>Content Finder</h1>

      {/* Search Box */}
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Search items..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: "10px",
            width: "100%",
            maxWidth: "300px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
      </div>

      {/* Display Filtered Items */}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
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
          ))
        ) : (
          <li>No items match your search.</li>
        )}
      </ul>

      {/* Add New Item */}
      <div style={{ marginTop: "20px" }}>
        <input
          type="text"
          placeholder="Add new item..."
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          style={{
            padding: "10px",
            width: "100%",
            maxWidth: "300px",
            marginRight: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <button
          onClick={addItem}
          style={{
            padding: "10px 15px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Add Item
        </button>
      </div>
    </div>
  );
};

export default ContentFinder;
