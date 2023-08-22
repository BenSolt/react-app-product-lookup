import React, { useState } from 'react';
import './AppHangman.css';

const words = ['apple', 'banana', 'cherry', 'durian', 'elderberry', 'fig', 'grape'];

const Hangman = () => {
    const [guesses, setGuesses] = useState([]);
    const [word, setWord] = useState(words[Math.floor(Math.random() * words.length)]);
    const [incorrectGuesses, setIncorrectGuesses] = useState(0);
    const maxIncorrectGuesses = 5;

    const getDisplayWord = () => {
        let displayWord = '';
        for (let letter of word) {
            if (guesses.includes(letter)) {
                displayWord += letter;
            } else {
                displayWord += '-';
            }
        }
        return displayWord;
    };

    const handleGuess = (event) => {
        const guess = event.target.value.toLowerCase();
        setGuesses([...guesses, guess]);
        if (!word.includes(guess)) {
            setIncorrectGuesses(incorrectGuesses + 1);
        }
        if (guess === ' ') {
            console.log("Spacebar", guess)
        }
    };

    const isGameOver = () => {
        return incorrectGuesses >= maxIncorrectGuesses || getDisplayWord() === word;
    };

    const handleNewGame = () => {
        setGuesses([]);
        setWord(words[Math.floor(Math.random() * words.length)]);
        setIncorrectGuesses(0);
    };

    return (
        <div className="hangman">
            <h1>Hangman Game</h1>

            <div className="boardHangman">
                {word.split("").map((letter, index) => (
                    <div style={{ borderBottom: ".1em solid black" }} key={index} className='tileHangman'>
                        <h1 className="letter">
                            {guesses.includes(letter)
                                ? <div>{letter}</div>
                                : ""}
                        </h1>
                    </div>
                ))}
            </div>

            <div className='guessesContainer'>

                <div className='sectionHangman'>
                    <h3 className='h3Info'>Guesses Left:<span className="h2text">{maxIncorrectGuesses - incorrectGuesses}</span></h3>
                </div>

                <div className='sectionHangman'>
                    <h3 className='h3Info'>Letters Guessed:</h3>
                    <div className="guessesLetters">
                        {guesses.map((guess, index) => (
                            <span key={index}>{guess}, </span>
                        ))}
                    </div>
                </div>
            </div>

            {isGameOver() ? (
                <div>
                    <h2>{getDisplayWord() === word ? 'You Win!' : 'You Lose!'}</h2>
                    <button className='buttonHangman' onClick={handleNewGame}>New Game</button>
                </div>
            ) : (
                <div className="inputs">
                    <input type="text" maxLength="1" onChange={handleGuess} />
                    <button className='buttonHangman' onClick={handleNewGame}>New Game</button>
                </div>
            )}
        </div>
    );
};

export default Hangman;