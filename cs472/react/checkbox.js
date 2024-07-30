import React, { useState } from 'react';
import './App.css'; // Optional: For additional styling

const App = () => {
  const [selectedValue, setSelectedValues] = useState(['java', 'javascript']);

  const handleCheckboxChange = (event) => {
    console.log(event.target.checked, event.target.value);
    setSelectedValues(prev => {
      if(event.target.checked)
        return [...prev].concat(event.target.value);
      else// Remove previous value
        return [...prev].filter(prevValue=>prevValue!=event.target.value)
    })

  };

  return (
    <div className="App">
      <h1>React Checkbox Example</h1>
      <label>Checkbox</label>
      <input type='checkbox' value='java' onChange={handleCheckboxChange} checked={selectedValue.includes('java')}/>
      <label>Java</label>
      <input type='checkbox' value='javascript' onChange={handleCheckboxChange} checked={selectedValue.includes('javascript')}/>
      <label>Javascript</label>
      <p><b>Selected Fruit:  </b>{selectedValue.join(',')}</p>
    </div>
  );
};

export default App;
