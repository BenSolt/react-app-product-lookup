import React, { useState } from 'react';

function GuessTheArray() {
  const targetArray = [5, 12, 25];
  const [guess, setGuess] = useState('');
  
  const [message, setMessage] = useState('Guess the entire array of numbers');

  const handleGuess = () => {
    const guessedArray = guess.split(',').map(num => parseInt(num.trim(), 10));

    if (!guessedArray.every((num, index) => num === targetArray[index])) {
      setMessage('Oops! Try again.');
    } else {
      setMessage('Congratulations! You guessed the correct array.');
    }
  };

  return (
    <div>
      <h1>Guess the Array Game</h1>
      <p>{message}</p>
      <input
        type="text"
        placeholder="Enter guess (comma-separated)"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
      />
      <button onClick={handleGuess}>Submit Guess</button>
      {targetArray}
    </div>
  );
}

export default GuessTheArray;