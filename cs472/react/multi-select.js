import React, { useState } from 'react';
import './App.css'; // Optional: For additional styling

const App = () => {
  const [selectedValue, setSelectedValue] = useState(['cherry','apple']);

  const handleSelectChange = (event) => {
    console.log(event.target.selectedOptions);
    let values=[];
    for(let htmlEle of event.target.selectedOptions){
      values.push(htmlEle.value)
    }
    setSelectedValue(values);
  };

  const options = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'cherry', label: 'Cherry' }
  ];

  return (
    <div className="App">
      <h1>React Select Example</h1>
      <select multiple  onChange={handleSelectChange} style={{ padding: '8px', fontSize: '16px' }}>
        {options.map(function (option) {
          return (
            <option key={option.value} value={option.value} selected={selectedValue.includes(option.value)}>
              {option.label}
            </option>
          );
        })}
      </select>
      <p>Selected Fruit: {selectedValue.join(',')}</p>
    </div>
  );
};

export default App;
