import React, { useState } from "react";
import "./App.css";

const agentNames = [
  "GinaWilliams",
  "Jake Williams",
  "Jamie John",
  "John Doe",
  "Jeff Stewart",
  "Paula M. Keith"
];

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleInputChange = (event) => {
    const { value } = event.target;
    console.log(value)
    setInputValue(value);
    setShowDropdown(value.trim().startsWith("@"));
    setSelectedIndex(-1);
  };

  const handleKeyDown = (event) => {
    const { keyCode } = event;
    if (keyCode === 38 && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    } else if (keyCode === 40 && selectedIndex < agentNames.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    } else if (keyCode === 13 && selectedIndex >= 0) {
      setInputValue(agentNames[selectedIndex]);
      setShowDropdown(false);
    }
  };

  const handleAgentClick = (agentName) => {
    setInputValue(agentName);
    setShowDropdown(false);
  };

  return (
    <div className="App">
      <div className="input-container">
  <span>
        <textarea
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Type @ to find Agent..."
        />
</span>
       
        {showDropdown && (
          <ul className="dropdown">
            {agentNames.map((agentName, index) => (
              <li
                key={agentName}
                className={selectedIndex === index ? "selected" : ""}
                onClick={() => handleAgentClick(agentName)}
              >
              
                {agentName}
       
               
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
