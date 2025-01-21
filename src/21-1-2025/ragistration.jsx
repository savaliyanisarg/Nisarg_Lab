import React, { useState } from "react";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    cricketerName: "",
    gender: "",
    email: "",
    matches: [],
    password: "",
    confirmPassword: "",
    country: "",
  });

  const [submittedData, setSubmittedData] = useState(null);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prevData) => {
        const newMatches = checked
          ? [...prevData.matches, value]
          : prevData.matches.filter((match) => match !== value);
        return { ...prevData, matches: newMatches };
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.cricketerName.length < 8) {
      setError("Cricketer name must be at least 8 characters long.");
      return;
    }

    if (!/^[\w-\.]+@[\w-\.]+\.[a-z]{2,}$/i.test(formData.email)) {
      setError("Invalid email format.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setError("");
    setSubmittedData(formData);
  };

  return (
    <div style={{ margin: "20px" }}>
      <h2>Cricketer Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Cricketer Name: 
            <input
              type="text"
              name="cricketerName"
              value={formData.cricketerName}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>Gender: </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={formData.gender === "Male"}
              onChange={handleChange}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={formData.gender === "Female"}
              onChange={handleChange}
            />
            Female
          </label>
        </div>
        <div>
          <label>
            Email: 
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>Matches:</label>
          <label>
            <input
              type="checkbox"
              name="matches"
              value="ODI"
              onChange={handleChange}
              checked={formData.matches.includes("ODI")}
            />
            ODI
          </label>
          <label>
            <input
              type="checkbox"
              name="matches"
              value="TEST"
              onChange={handleChange}
              checked={formData.matches.includes("TEST")}
            />
            TEST
          </label>
          <label>
            <input
              type="checkbox"
              name="matches"
              value="T20"
              onChange={handleChange}
              checked={formData.matches.includes("T20")}
            />
            T20
          </label>
          <label>
            <input
              type="checkbox"
              name="matches"
              value="Domestic"
              onChange={handleChange}
              checked={formData.matches.includes("Domestic")}
            />
            Domestic
          </label>
        </div>
        <div>
          <label>
            Password: 
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Confirm Password: 
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Country: 
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
            >
              <option value="">--Select--</option>
              <option value="India">India</option>
              <option value="Australia">Australia</option>
              <option value="England">England</option>
              <option value="South Africa">South Africa</option>
            </select>
          </label>
        </div>
        <div>
          <button type="submit">Save</button>
        </div>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {submittedData && (
        <table border="1" style={{ marginTop: "20px", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>Cricketer Name</th>
              <th>Gender</th>
              <th>Email</th>
              <th>Matches</th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{submittedData.cricketerName}</td>
              <td>{submittedData.gender}</td>
              <td>{submittedData.email}</td>
              <td>{submittedData.matches.join(", ")}</td>
              <td>{submittedData.country}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}

export default RegistrationForm;
