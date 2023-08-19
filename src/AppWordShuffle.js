import React, { useState, useEffect, useRef } from 'react';
import './App.css';

const words = ["apple", "banana", "orange", "grape", "melon"];

function shuffleWord(word) {
  const arr = word.split('');
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.join('');
}

function App() {
  const [shuffledWord, setShuffledWord] = useState('');
  const [currentWord, setCurrentWord] = useState('');
  const [userGuess, setUserGuess] = useState('');
  const [message, setMessage] = useState('');

  const [strike, setStrike] = useState(0);
  const [enable, setEnable] = useState(true);
  const [correct, setCorrect] = useState(0);

  const initialDuration = 3; // 3 Seconds, was 30 seconds
  const [duration, setDuration] = useState(initialDuration);

  let [running, setRunning] = useState(false);
  let [time, setTime] = useState(0);
  let timerId = useRef(null);

  useEffect(() => {
    updateShuffledWord();
  }, []);

  function startTimer() {
    setRunning(true);
  }
  function stopTimer() {
    setRunning(false);
  }
  
  useEffect(() => {
    if (running & duration > 0) {
      const interval = setInterval(() => {
        setDuration(prevDuration => prevDuration - 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [running, duration]);

  const formatTime = timeInSeconds => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;

    // TIME is equal to Zero - GAME OVER ////////////////
    if (seconds === 0) {
        console.log("GAME OVER")
    }

    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const updateShuffledWord = () => {
    const randomIndex = Math.floor(Math.random() * words.length);
    const word = words[randomIndex];
    setCurrentWord(word);
    setShuffledWord(shuffleWord(word));
    setUserGuess('');
    setMessage('');
  };

  const checkGuess = () => {
    startTimer();
    if (userGuess.toLowerCase() === currentWord) {
      setMessage('Correct! You unscrambled the word.');
      setCorrect(correct + 1);
      updateShuffledWord();
    } else {
      setMessage('Incorrect. Try again.');
      setStrike(strike + 1);
      addStrike();
    }
  };

  function playAgain() {
    updateShuffledWord();
    setStrike(0);
    setCorrect(0);
    setEnable(true)
  }

  function addStrike() {
    if (strike === 2) {
      setEnable(false)
      gameOver();
    }
  }

  function gameOver() {
    setMessage('GAME OVER');
  }

  return (
    <div className="App">
      <h1>Word Shuffle Game New</h1>
      <div className="word-container">
        <h3>Timer: {formatTime(duration)}</h3>
        <h2 id="shuffled-word">{shuffledWord}</h2>
        <input
          type="text"
          value={userGuess}
          onChange={(e) => setUserGuess(e.target.value)}
          placeholder="Enter your guess"
        />
        <button className="BtnShuffle" onClick={checkGuess}>Check</button>
      </div>
      <div className='stats'>
        <h2>Strikes: {strike}</h2>
        <h2 className='h2b'>Streak: {correct}</h2>
      </div>

      <h3 className="message">{message}</h3>
      <button disabled={enable} className="Btn" onClick={playAgain}>Play Again</button>
      {/* <button className="Btn" onClick={stopTimer}>Pause</button> */}
    </div>
  );
}

export default App;
