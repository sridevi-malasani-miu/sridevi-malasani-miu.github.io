import React, { useState } from 'react';
import './App.css'; // Optional: For additional styling

const App = () => {
  const [selectedValue, setSelectedValue] = useState('cherry');

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const options = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'cherry', label: 'Cherry' }
  ];

  return (
    <div className="App">
      <h1>React Radio Btn Example</h1>
      {options.map(function (option) {
        return (
          <label> {option.label}
            <input name='radioGrp' value={option.value} type='radio' onChange={handleSelectChange} checked={option.value==selectedValue} />
          </label>
        );
      })}
      <p>Selected Fruit: {selectedValue}</p>
    </div>
  );
};

export default App;
