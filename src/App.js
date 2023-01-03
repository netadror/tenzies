import React from 'react';
import './App.css';
import Header from './components/Header.js';
import Main from './components/Main.js'
import Footer from './components/Footer.js'

function App() {
  const [darkMode, setDarkMode] = React.useState(true)
  function toggleDarkMode() {
    setDarkMode(prevMode => !prevMode)
  }
  return (
    <React.StrictMode>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Main darkMode={darkMode} />
      <Footer />
    </React.StrictMode>
  );
}

export default App;
