import { useState } from 'react';
import './App.css';
import Die from './components/Die';

function App() {
  const [dice, setDice] = useState(allNewDice())

  // function - array of objects: value of random number and isHeld
  function allNewDice() {
    const newDice = []

    for ( let i = 0; i < 10; i++ ) {
      newDice.push({ 
        value: Math.ceil( Math.random() * 6 ), 
        isHeld: false
      })
    }

    return newDice 
  }

  // generate Die componenet 10x with state 
  const diceElements = dice.map( die => <Die value={die.value} /> )

  // function - re-roll all dice 
  function rollDice() {
    setDice(allNewDice()) 
  }

  return (
    <main>
      <h1>Tenzies</h1>

      <div className="dice-container">
        {diceElements}
      </div>

      <button 
        className="roll-btn" 
        onClick={rollDice}
      >
        Roll
      </button>
      
    </main>
  );
}

export default App;
