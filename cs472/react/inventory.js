import React, { useState } from 'react';

const InventoryTable = () => {
    // State for managing the list of items
    const [items, setItems] = useState([
        { name: 'dd', price: 30, image: '/ddd.jpeg' },
        { name: 'dddd', price: 30 }
    ]);
    
    // State for managing form input values
    const [itemName, setItemName] = useState('');
    const [itemPrice, setItemPrice] = useState('');
    const [itemQuantity, setItemQuantity] = useState('');
    const [editingIndex, setEditingIndex] = useState(null);

    // Handle form submission
    const addOrUpdate = () => {
      // Add new item
      const newItem = { name: itemName, price: itemPrice, quantity: itemQuantity };
        if (editingIndex !== null) {
            // Update existing item
            const updatedItems = [...items];
            updatedItems[editingIndex] = newItem;
            setItems(updatedItems);
            setEditingIndex(null);
        } else {
            setItems(items.concat(newItem));
        }
        // Clear form fields
        setItemName('');
        setItemPrice('');
        setItemQuantity('');
    };

    const editRow = (index) => {
        setItemName(items[index].name);
        setItemPrice(items[index].price);
        setItemQuantity(items[index].quantity);
        setEditingIndex(index);
    };

    const deleteRow = (index) => {
        const updatedItems = items.filter((_, i) => i !== index);
        setItems(updatedItems);
    };

    return (
        <div>
            <div>
                Name: <input type="text" value={itemName} onChange={(e) => setItemName(e.target.value)} />
                Price: <input type="text" value={itemPrice} onChange={(e) => setItemPrice(e.target.value)} />
                Quantity: <input type="text" value={itemQuantity} onChange={(e) => setItemQuantity(e.target.value)} />
                <button onClick={addOrUpdate}>
                    {editingIndex !== null ? 'Update' : 'Add'}
                </button>
            </div>
            <table style={{ borderCollapse: 'collapse', borderSpacing: 0, width: '100%', border: '1px solid #ddd' }}>
                <thead>
                    <tr>
                        <th style={{ textAlign: 'left', padding: '16px' }}>Name</th>
                        <th style={{ textAlign: 'left', padding: '16px' }}>Price</th>
                        <th style={{ textAlign: 'left', padding: '16px' }}>Quantity</th>
                        <th style={{ textAlign: 'left', padding: '16px' }}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index) => (
                        <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#f2f2f2' : 'white' }}>
                            <td style={{ padding: '16px' }}>{item.name}</td>
                            <td style={{ padding: '16px' }}>{item.price}</td>
                            <td style={{ padding: '16px' }}>{item.quantity}</td>
                            <td style={{ padding: '16px' }}>
                                <button onClick={() => editRow(index)}>Edit</button>
                                <button onClick={() => deleteRow(index)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default InventoryTable;
