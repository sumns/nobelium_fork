import React, {useState} from 'react';

let randomNumber = Math.round(Math.random() * 10);


const Game = () => {
const [value, setValue] = useState('');
const onChange =(e) => setValue(e.target.value);
let results = ""

const onClick = () => { 
    const userGuess = value;
    if (userGuess == "") return null;
    if (userGuess == randomNumber ) return <p>Correct!</p>;
    if (userGuess > randomNumber) return <p>Too high, guess again</p>;
    if (userGuess < randomNumber) return <p>Too low, guess again</p>        
}
  results = onClick(value)
  return (
     <div className='inputContaner'>
        <h2>Guess The Number between 0 to 10.</h2>
        <input value={value} type="number"  placeholder="Guess The Number ..." onChange={onChange}/>
        {/* <button type="submit" onClick={onClick}>GUESS</button> */}
        {results}
      </div>
  )
}

export default Game