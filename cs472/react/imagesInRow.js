import React, { useState, useEffect } from 'react';

const ImageList = () => {
    // Initial list of items
    const [list, setList] = useState([
        { id: 2, fname: 'John', lname: 'Doe', img: '/images/jinnia.jpeg' },
        { id: 4, fname: 'Maharishi', lname: 'Mahesh', img: '/images/light-colored.jpeg' },
        { id: 3, fname: 'Arya', lname: 'Batt', img: '/images/redRoses.jpg' },
        { id: 1, fname: 'Aakash', lname: 'Chatterji', img: '/images/yellow-rose.jpeg' }
    ]);
    
    // State to keep track of sort column
    const [sortCol, setSortCol] = useState('id');

    // Function to sort the list
    const handleSort = () => {
        const newSortCol = sortCol === 'id' ? 'fname' : 'id';
        const sortedList = [...list].sort((a, b) => {
            if (newSortCol === 'id') {
                return a.id - b.id;  // Sort by ID in ascending order
            } else {
                return a.fname.localeCompare(b.fname);  // Sort by first name alphabetically
            }
        });
        setList(sortedList);
        setSortCol(newSortCol);
    };

    // Function to delete an item
    const handleDelete = (id) => {
        setList(list.filter(item => item.id !== id));
    };

    return (
        <div>
            <button onClick={handleSort}>Sort</button>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                {list.map(item => (
                    <div key={item.id} style={{ display: 'flex', gap: '10px' }}>
                        <img src={item.img} alt={item.fname} style={{ height: '100px', width: '100px', objectFit: 'cover' }} />
                        <div>
                            <div>{item.fname}</div>
                            <p>{item.lname}</p>
                            <button onClick={() => handleDelete(item.id)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageList;
