import React, { useState } from 'react';

const App = () => {
  // Initial state for source and destination lists
  const [sourceList, setSourceList] = useState(['rose', 'lily', 'daffodil']);
  const [destinationList, setDestinationList] = useState([]);

  const moveMap = {
    source: { from: sourceList, to: destinationList, setSource: setSourceList, setDestination: setDestinationList },
    destination: { from: destinationList, to: sourceList, setSource: setDestinationList, setDestination: setSourceList }
  }

  // Function to move selected items from source to destination
  const move = (from, all = false) => {
    // Retrieve the list object from moveMap based on the 'from' key
    const list = moveMap[from];
    // Determine the items to be selected based on the 'all' flag
    const selection = all ? list.from : selectedItems;
    
    const newFromList = list.from.filter(item => !selection.includes(item));
    const newToList = list.to.concat(selection);

    list.setSource(newFromList);
    list.setDestination(newToList);
  };

  // Function to handle selection changes
  const handleSelectionChange = (event) => {
    setSelectedItems([...event.target.selectedOptions].map(option => option.value));
  };

  const [selectedItems, setSelectedItems] = useState([]);

  return (
    <div style={{
      display: 'grid',
      gap: '30px',
      gridTemplateColumns: '1fr 1fr 1fr',
      border: '1px solid blue'
    }}>
      <select
        multiple
        name="source"
        onChange={handleSelectionChange}
        value={selectedItems}
      >
        {sourceList.map(item => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <button onClick={() => move('source' )}>&gt;</button>
        <button onClick={() => move('source',  true)}>&gt;&gt;</button>
        <button onClick={() => move('destination')}>&lt;</button>
        <button onClick={() => move('destination', true)}>&lt;&lt;</button>
      </div>
      <select
        multiple
        name="destination"
        onChange={handleSelectionChange}
        value={selectedItems}
      >
        {destinationList.map(item => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default App;
