import React, { useState, useEffect } from 'react';

const InventoryTable = () => {
    // State for managing the list of items
    const [items, setItems] = useState([
        { name: 'dd', price: 30, quantity: 200 },
        { name: 'dddd', price: 30 }
    ]);

    // State for managing form input values
    const [itemName, setItemName] = useState('');
    const [itemPrice, setItemPrice] = useState('');
    const [itemQuantity, setItemQuantity] = useState('');
    const [editingIndex, setEditingIndex] = useState(null);

    console.log(" HHEE")

    useEffect(() => {
        // Define the function to fetch data
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/list', { data: { item: 'item1' } });
                const result = await response.json();
                console.log(" RESULT ",result);
                setItems(result);
            } catch (error) {
                console.log(error);
                // setError(error);
            } finally {
                // setLoading(false);
            }
        };
        // Call the fetchData function
        fetchData();
    }, []); // Empty dependency array means this effect runs once on mount
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



        const baseURL = 'http://localhost:5000/add';
        const params = {
            name:itemName,
            price:itemPrice,
            quantity: itemQuantity
        };

        // Convert the params object to a query string
        const queryString = new URLSearchParams(params).toString();

        // Construct the full URL with query string
        const url = `${baseURL}?${queryString}`;

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const result = await response.json();
                console.log(" ITEMS ", result)
                setItems(result);
            } catch (error) {
                console.log(error);
            } finally {
            }
        };
        // Call the fetchData function
        fetchData();
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
                Name188: <input type="text" value={itemName} onChange={(e) => setItemName(e.target.value)} />
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
