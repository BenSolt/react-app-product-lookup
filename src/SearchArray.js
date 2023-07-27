import React, { useState } from 'react';

const ArraySearchAndColor = () => {
    const initialArray = ['apple', 'banana', 'orange', 'grape', 'watermelon'];

    const [array, setArray] = useState(initialArray);
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredArray = array.filter(item => item.toLowerCase().includes(searchQuery.toLowerCase()));

    return (
        <div>
            <div>
                <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    placeholder="Search array..."
                />

                <ul>
                    {array.map((item, index) => (
                        <li
                            key={index}
                            style={{ color: filteredArray.includes(item) ? 'red' : 'black' }}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ArraySearchAndColor;