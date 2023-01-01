import React from "react"
import Die from "./Die"

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
            diceArray.push(randNum)
        }
        console.log('diceArray', diceArray)
        return diceArray
    }
    // console.log(allNewDice())
    const [dice, setDice] = React.useState(allNewDice())
    const diceElements = dice.map(die => <Die value={die} />)

    return (
        <main className="App-main">
            <div className='Die-container'>
                {diceElements}
            </div>
        </main>
    )

}

export default Main