import logo from './images/dice.png'

function Header(props) {
    return (
        <nav className={`App-header ${props.darkMode ? "dark" : ""}`}>
            <div className='title'>
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Tenzies Game
                </p>
            </div>
            <div
                className="toggler"
            >
                <p className="toggler--light">Light</p>
                <div
                    className="toggler--slider"
                    onClick={props.toggleDarkMode}
                >
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
        </nav>)

}
export default Header