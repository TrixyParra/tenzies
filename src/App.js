import { useState } from 'react';
import { nanoid } from 'nanoid';
import './App.css';
import Die from './components/Die';


function App() {
  const [dice, setDice] = useState(allNewDice())

  // function - array of objects: value of random number, isHeld, and id
  function allNewDice() {
    const newDice = []

    for ( let i = 0; i < 10; i++ ) {
      newDice.push({ 
        value: Math.ceil( Math.random() * 6 ), 
        isHeld: false, 
        id: nanoid()
      })
    }
    
    return newDice 
  }

  // generate Die Componenet 10x with state 
  const diceElements = dice.map( die => (
    <Die key={die.id} value={die.value} isHeld={die.isHeld} holdDice={() => holdDice(die.id)} />
  ))

  // button function - re-roll all dice 
  function rollDice() {
    setDice(allNewDice()) 
  }

  // function - embedding the id parameter whenever the die is clicked change isHeld to the opposite of what it is 
  function holdDice(id) {
    // console.log(id)
    setDice(oldDice => oldDice.map(die => {
      return die.id === id ? 
        {...die, isHeld: !die.isHeld} : 
        die
    }))
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
