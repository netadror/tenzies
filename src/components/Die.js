function Die(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#eca9d6" : "white"
    }
    return (
        <div
            className="dice"
            style={styles}
            onClick={props.holdDice}
        >
            <h2 className="die-num">{props.value}</h2>
        </div>)

}
export default Die




