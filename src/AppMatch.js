import React, { useState, useEffect } from 'react';

const NumberMatchGame = () => {
    const [randomNumber, setRandomNumber] = useState(0);
    const [userInput1, setUserInput1] = useState('');
    const [message, setMessage] = useState('');
    const [num1, setNum1] = useState(<div className='tileBlank'></div>)

    useEffect(() => {
        generateRandomNumber();
    }, []);

    // Function to generate a random number between 1 and 3
    const generateRandomNumber = () => {
        const randomNum = Math.floor(Math.random() * 3) + 1;
        setRandomNumber(randomNum);
    };

    // Function to handle the user's input change
    const handleInputChange = (event) => {
        setUserInput1(event.target.value);
    };

    // Function to handle the user's guess submission
    const handleGuessSubmit = () => {
        if (parseInt(userInput1) === randomNumber) {
            setMessage('Congratulations! Your guess is correct!');
            setNum1(<div className="tileGreen"><h1 className="letter">{randomNumber}</h1></div>);

        } else {
            setMessage('Oops! Your guess is incorrect. Try again!');
            setNum1(<div className='tileBlank'>{/* <h1 className="letter">{randomNumber}</h1> */}</div>);
        }
    };

    return (
        <div>
            <h1>Number Matching Game</h1>
            <p>Guess the random number between 1 and 3:</p>
            <input type="number" value={userInput1} onChange={handleInputChange} />
            <button onClick={handleGuessSubmit}>Submit Guess</button>
            {num1}
        </div>
    );
};

export default NumberMatchGame;