import React from "react"
import Die from "./Die"
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'


function Main(props) {

    const [dice, setDice] = React.useState(allNewDice())
    const [tenzies, setTenzies] = React.useState(false)

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    function getNewDie() {
        return {
            value: getRandomInt(1, 6),
            isHeld: false,
            id: nanoid()
        }
    }
    function allNewDice() {
        const diceArray = []
        for (let i = 0; i < 10; i++) {
            diceArray.push(getNewDie())
        }
        return diceArray
    }

    React.useEffect(() => {

        const allHeldDice = dice.every(die => die.isHeld)
        const firstValue = dice[0].value
        const allSameValue = dice.every(die => die.value === firstValue)
        if (allHeldDice && allSameValue) {
            setTenzies(true)
        }

    }, [dice])

    function rollDice() {
        if (!tenzies) {
            setDice(oldDice => oldDice.map(die => {
                return die.isHeld ? die : getNewDie()
            }))
        } else {
            setTenzies(false)
            setDice(allNewDice())
        }

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
        <main className={`App-main ${props.darkMode ? "dark" : ""}`}>
            {tenzies && <Confetti
                width={1500}
                height={600}
            />}
            <div className="main-text">
                <h4>Get all ten of your dice to the same number</h4>
                <p>After your first roll, select the number you are going with by clicking on the dice. Keep rolling until all dice show the same number</p>
            </div>
            <div className='Die-container'>
                {diceElements}
            </div>
            <button className="rollBtn" onClick={rollDice}>{tenzies ? "Restart" : "Roll Die"}</button>
        </main>
    )
}

export default Main