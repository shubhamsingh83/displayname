import React, { useState } from "react";
import './App.css';

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");
  const handleSubmit=(event)=>{
    event.preventDefault();
    if (firstName && lastName) {
      setFullName(`${firstName} ${lastName}`);
    }
  };
  return (
    <div className="form-container">
    <form onSubmit={handleSubmit}>
        <div>
          <h1>Full Name Display</h1>
          <label>
            First Name:
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Last Name:
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </label>
        </div>
        <button
          type="submit"
        >
          Submit
        </button> 
      </form>
      {fullName && <p className="full-name">Full Name: {fullName}</p>}
    </div>
  );
}

export default App;
