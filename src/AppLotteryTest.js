import React, { useState } from 'react';
import "./AppSearchArrayBlocks.css";

function AppLotteryTest() {

    let arr1 = [3, 1, 2];
    // let arr1 = [3, 1, 2, 5, 4];
    const randomNumbers = [];
    const [numbers, setNumbers] = useState([]);
    const [message, setMessage] = useState('');
    const [message2, setMessage2] = useState('');

    const [inputValues, setInputValues] = useState({
        input1: '',
        input2: '',
        input3: '',
        // input4: '',
        // input5: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setInputValues({
            ...inputValues,
            [name]: value,
        });
    };

    const generateRandomNumbers = (min, max, count) => {

        for (let i = 0; i < count; i++) {
            const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
            randomNumbers.push(randomNumber);
        }
        setNumbers(randomNumbers);

        let match = true;
        for (let i = 0; i < arr1.length; i++) {
          if (randomNumbers[i] !== arr1[i]) {
            match = false;
            break;
          }
        }

        if (match) {
            setMessage('You Win! Arrays match at all indexes.');
        }
        else {
            setMessage('Arrays do not match at all indexes.');
        }
    }


    const generateRandomNumbersInput = (min, max, count) => {

        for (let i = 0; i < count; i++) {
            const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
            randomNumbers.push(randomNumber);
        }
        setNumbers(randomNumbers);

        let match2 = true;
        for (let i = 0; i < randomNumbers.length; i++) {
            for (var j in inputValues) {
                //console.log(inputValues[j])
                if (randomNumbers[i] !== parseInt(inputValues[j])) {
                    match2 = false;
                    break;
                }
            }
        }

        if (match2) {
            setMessage2('INPUT: You Win! Arrays match at all indexes.');
        }
        else {
            setMessage2('INPUT: Arrays do not match at all indexes.');
        }
    }


    return (
        <div>
            <h1>Arr1: {arr1}</h1>
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
            </div>
            <button onClick={() => generateRandomNumbers(1, 3, 3)}>Generate Nums</button>
            <button onClick={() => generateRandomNumbersInput(1, 3, 3)}>Generate Nums Input</button>

            <div className="boardLottery">
                {numbers.map((number, index) => {
                    if (number === arr1[0] & index === 0) {
                        return (<div className="tileGreen" key={index}>
                            <h1 className="letter">{number}</h1>
                        </div>);
                    }
                    if (number === arr1[1] & index === 1) {
                        return (<div className="tileGreen" key={index}>
                            <h1 className="letter">{number}</h1>
                        </div>);
                    }

                    if (number === arr1[2] & index === 2) {
                        return (<div className="tileGreen" key={index}>
                            <h1 className="letter">{number}</h1>
                        </div>);
                    }

                    if (number === arr1[3] & index === 3) {
                        return (<div className="tileGreen" key={index}>
                            <h1 className="letter">{number}</h1>
                        </div>);
                    }

                    if (number === arr1[4] & index === 4) {
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
                <p>{message}</p>
                <p>{message2}</p>
            </div>
        </div>
    )
}
export default AppLotteryTest;