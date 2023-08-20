import React, { useState } from 'react';
import "./AppSearchArrayBlocks.css";

function AppLottery() {

    const [numbers, setNumbers] = useState([]);
    const randomNumbers = [];
    const [inputValues, setInputValues] = useState({
        input1: '',
        input2: '',
        input3: '',
        input4: '',
        input5: '',
    });

    const [guess, setGuess] = useState(0);
    const [cost, setCost] = useState(0);
    const ArrCorrect = [];
    const [correct, setCorrect] = useState(0);
    const [message, setMessage] = useState('');
    const arrMatch = [];

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setInputValues({
            ...inputValues,
            [name]: value,
        });
    };

    //GENERATE RANDOM NUMBERS //////////////////////////////////////////////////////////////////
    const generateRandomNumbers = (min, max, count) => {

        for (let i = 0; i < count; i++) {
            const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
            randomNumbers.push(randomNumber);
        }

        for (let i = 0; i < randomNumbers.length; i++) {
            if (randomNumbers[i] === parseInt(inputValues.input1) & i === 0) {
                arrMatch.push(1);
            }
            if (randomNumbers[i] === parseInt(inputValues.input2) & i === 1) {
                arrMatch.push(1);
            }
            if (randomNumbers[i] === parseInt(inputValues.input3) & i === 2) {
                arrMatch.push(1);
            }
            // if (randomNumbers[i] === parseInt(inputValues[j]) & i === 3) {
            //     arrMatch.push(1);
            // }
            // if (randomNumbers[i] === parseInt(inputValues[j]) & i === 4) {
            //     arrMatch.push(1);
            // }

            if (arrMatch.length === 3) {
                setMessage('INPUT: You Win! Arrays match at all indexes.');
                setCorrect(correct + 1);
            }
            else {
                setMessage('INPUT: Arrays do not match at all indexes.');
            }
        };

        setNumbers(randomNumbers);
        setGuess(guess + 1);
        setCost(cost + 2);
        // setMessage('')
    }

    function areAllFieldsFilled() {
        return (
            inputValues.input1 !== '' &&
            inputValues.input2 !== '' &&
            inputValues.input3 !== '' 
            // inputValues.input4 !== '' &&
            // inputValues.input5 !== ''
        );
    };


    return (
        <div className='App'>
            <h2>Guess 5 Numbers - Lottery</h2>
            <div className="inputHolder">
                <input
                    id="1"
                    className='inputNumber'
                    type="text"
                    name="input1"
                    value={inputValues.input1}
                    onChange={handleInputChange}
                />
                <input
                    className='inputNumber'
                    type="text"
                    name="input2"
                    value={inputValues.input2}
                    onChange={handleInputChange}
                />
                <input
                    className='inputNumber'
                    type="text"
                    name="input3"
                    value={inputValues.input3}
                    onChange={handleInputChange}
                />
                {/* <input
                    className='inputNumber'
                    type="text"
                    name="input4"
                    value={inputValues.input4}
                    onChange={handleInputChange}
                />
                <input
                    className='inputNumber'
                    type="text"
                    name="input5"
                    value={inputValues.input5}
                    onChange={handleInputChange}
                /> */}
            </div>

            {/* <button className='Btn' disabled={!areAllFieldsFilled()} onClick={() => generateRandomNumbers(1, 69, 5)}>Generate Numbers</button> */}
            <button className='Btn' disabled={!areAllFieldsFilled()} onClick={() => generateRandomNumbers(1, 3, 3)}>Generate Numbers</button>
            <h2>Number of Tries total: {guess}</h2>
            <h2>Cost: ${cost}</h2>
            <h2>Correct: {correct}</h2>
            <h1>{message}</h1>

            <div className="boardLottery">
                {numbers.map((number, index) => {

                    // INPUT VALUE 1 //////////////////////////////////////////////////
                    if (number === parseInt(inputValues.input1) && index === 0) {
                        ArrCorrect.push(1)
                        console.log('1 CORRECT')

                        return (<div className="tileGreen" key={index}>
                            <h1 className="letter">{number}</h1>
                        </div>);
                    }
                    // INPUT VALUE 2 //////////////////////////////////////////////////
                    if (number === parseInt(inputValues.input2) && index === 1) {
                        ArrCorrect.push(1)
                        console.log('2 CORRECT')
                        return (<div className="tileGreen" key={index}>
                            <h1 className="letter">{number}</h1>
                        </div>);
                    }
                    // INPUT VALUE 3 //////////////////////////////////////////////////
                    if (number === parseInt(inputValues.input3) && index === 2) {
                        ArrCorrect.push(1)
                        console.log('3 CORRECT')
                        return (<div className="tileGreen" key={index}>
                            <h1 className="letter">{number}</h1>
                        </div>);
                    }
                    // INPUT VALUE 4 //////////////////////////////////////////////////
                    if (number === parseInt(inputValues.input4) && index === 3) {
                        ArrCorrect.push(1)
                        console.log('4 CORRECT')
                        return (<div className="tileGreen" key={index}>
                            <h1 className="letter">{number}</h1>
                        </div>);
                    }
                    // INPUT VALUE 5 //////////////////////////////////////////////////
                    if (number === parseInt(inputValues.input5) && index === 4) {
                        ArrCorrect.push(1)
                        console.log('5 CORRECT')
                        return (<div className="tileGreen" key={index}>
                            <h1 className="letter">{number}</h1>
                        </div>);
                    }

                    return (
                        <div key={index} className='tileBlank'>
                            <h1 className="letter">{number}</h1>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
export default AppLottery;