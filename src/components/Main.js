import React from "react"
import Die from "./Die"
import { nanoid } from 'nanoid'

function Main() {

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    function allNewDice() {
        const diceArray = []
        for (let i = 0; i < 10; i++) {
            let randNum = getRandomInt(1, 6)
            diceArray.push({
                value: randNum,
                isHeld: false,
                id: nanoid()
            })
        }
        console.log(diceArray)
        return diceArray
    }

    const [dice, setDice] = React.useState(allNewDice())

    function rollDice() {
        setDice(allNewDice())
    }
    function holdDice(id) {
        setDice(oldDice => oldDice.map(die => {
            return die.id === id ? { ...die, isHeld: !die.isHeld } : die

        }))


    }
    const diceElements = dice.map(die =>
        <Die
            key={die.id}
            value={die.value}
            isHeld={die.isHeld}
            holdDice={() => holdDice(die.id)}
        />)

    return (
        <main className="App-main">
            <div className="main-text">
                <h4>Get all ten of your dice to the same number</h4>
                <p>After your first roll, select the number you are going with by clicking on the dice (this freezes it at its current value). Keep rolling until all dice show the same number</p>
            </div>
            <div className='Die-container'>
                {diceElements}
            </div>
            <button className="rollBtn" onClick={rollDice}>Roll Dice</button>
        </main>
    )

}

export default Main