import React, { useState } from 'react';
import './App.css';  // Optional: For additional styling

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="App">
      <h1>React Input Text Example</h1>
      <input
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type something here..."
      />
      <p>Current Input: {inputValue}</p>
    </div>
  );
};

export default App;
