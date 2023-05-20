import { useState } from 'react';
import { nanoid } from 'nanoid';
import './App.css';
import Die from './components/Die';


function App() {
  const [dice, setDice] = useState(allNewDice())

  // function - returns object: value of random number, isHeld, and id (reusable) 
  function generateNewDie() { 
    return { 
      value: Math.ceil( Math.random() * 6 ), 
      isHeld: false, 
      id: nanoid()
    }
  }

  // function - array of objects for each of the 10 dice  
  function allNewDice() {
    const newDice = []

    for ( let i = 0; i < 10; i++ ) {
      newDice.push(generateNewDie())
    }
    
    return newDice 
  }

  // generate Die Componenet 10x with state 
  const diceElements = dice.map( die => (
    <Die key={die.id} value={die.value} isHeld={die.isHeld} holdDice={() => holdDice(die.id)} />
  ))

  // button function - re-roll all dice except for dice that are being held
  function rollDice() {
    setDice(oldDice => oldDice.map(die => {
      return die.isHeld ? 
        die : 
        generateNewDie() 
    })) 
  }

  // function - embedding the id parameter whenever the die is clicked it changes isHeld to the opposite of what it was when ids are equal to each other 
  function holdDice(id) {
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
