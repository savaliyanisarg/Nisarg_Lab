import React, { useState } from "react";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]); // State to store tasks
  const [taskInput, setTaskInput] = useState(""); // State for adding tasks
  const [taskToRemove, setTaskToRemove] = useState(""); // State for removing tasks

  // Function to add a task
  const addTask = () => {
    if (taskInput.trim() !== "") {
      setTasks([...tasks, taskInput]); // Add the new task to the list
      setTaskInput(""); // Clear the input field
    } else {
      alert("Please enter a valid task.");
    }
  };

  // Function to remove a task by its number
  const removeTask = () => {
    const taskIndex = parseInt(taskToRemove, 10) - 1; // Convert input to a zero-based index
    if (!isNaN(taskIndex) && taskIndex >= 0 && taskIndex < tasks.length) {
      const updatedTasks = tasks.filter((_, index) => index !== taskIndex);
      setTasks(updatedTasks);
      setTaskToRemove(""); // Clear the input field
    } else {
      alert("Invalid task number. Please enter a valid number.");
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>To-Do List</h1>

      {/* Input for adding tasks */}
      <div style={{ marginBottom: "15px" }}>
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Enter a new task"
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            width: "300px",
            marginRight: "10px",
          }}
        />
        <button
          onClick={addTask}
          style={{
            padding: "10px 15px",
            backgroundColor: "#4caf50",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Add Task
        </button>
      </div>

      {/* Input for removing tasks */}
      <div style={{ marginBottom: "15px" }}>
        <input
          type="number"
          value={taskToRemove}
          onChange={(e) => setTaskToRemove(e.target.value)}
          placeholder="Enter task number to remove"
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            width: "300px",
            marginRight: "10px",
          }}
        />
        <button
          onClick={removeTask}
          style={{
            padding: "10px 15px",
            backgroundColor: "#f44336",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Remove Task
        </button>
      </div>

      {/* Display tasks */}
      <div>
        <h2>Your Tasks</h2>
        {tasks.length > 0 ? (
          <ul>
            {tasks.map((task, index) => (
              <li key={index} style={{ marginBottom: "10px" }}>
                Task {index + 1}: {task}
              </li>
            ))}
          </ul>
        ) : (
          <p>No tasks added yet.</p>
        )}
      </div>
    </div>
  );
};

export default ToDoList;
