import React, { useState } from 'react';
import "./AppSearchArrayBlocks.css";

function AppSearchArrayBlocks() {

    const arr = [

        { id: 0, letter: "0", state: "tileStart" },

        { id: 1, letter: "A", state: "tileStart" },{ id: 2, letter: "B", state: "tileStart" }, { id: 3, letter: "C", state: "tileStart" },
        { id: 4, letter: "D", state: "tileStart" }, { id: 5, letter: "E", state: "tileStart" },{ id: 6, letter: "F", state: "tileStart" }, 
        { id: 7, letter: "G", state: "tileStart" },{ id: 8, letter: "H", state: "tileStart" },{ id: 9, letter: "I", state: "tileStart" }, 
        
        { id: 10, letter: "J", state: "tileStart" },{ id: 11, letter: "K", state: "tileStart" }, { id: 12, letter: "L", state: "tileStart" },
        { id: 13, letter: "M", state: "tileStart" }, { id: 14, letter: "N", state: "tileStart" },{ id: 15, letter: "O", state: "tileStart" }, 
        { id: 16, letter: "P", state: "tileStart" },{ id: 17, letter: "Q", state: "tileStart" }, { id: 18, letter: "R", state: "tileStart" },
        { id: 19, letter: "S", state: "tileStart" }, { id: 20, letter: "T", state: "tileStart" },{ id: 21, letter: "U", state: "tileStart" },
        { id: 22, letter: "V", state: "tileStart" }, { id: 23, letter: "W", state: "tileStart" }, { id: 24, letter: "X", state: "tileStart" },
        { id: 25, letter: "Y", state: "tileStart" }, { id: 26, letter: "Z", state: "tileStart" }
    ];

    const [array, setArray] = useState(arr);
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    for (let i = 0; i < array.length; i++) {
        if (array[i].letter.toLowerCase() === searchQuery || array[i].letter === searchQuery) {
            array[i].state = 'tileGreen'
        } else {
            array[i].state = 'tileStart'
        }
    }

    return (
        <div className='App'>
             <h2>Find Items in Store by Search</h2>
            <div className="inputHolder">
            <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search Item by Name"
            />
            </div>
            
            <div className="board2">
                {array.map((num, i) => {
                    if (num.id === 0) {
                        return <div className="tileBlank" key={num.id} />;
                    }

                    return (
                        <div className={num.state} key={num.id}>
                            <h1 className="letter">{num.letter}</h1>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default AppSearchArrayBlocks;