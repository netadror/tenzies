import React from 'react';
import './App.css';
import Header from './components/Header.js';
import Main from './components/Main.js'
import Footer from './components/Footer.js'

function App() {
  return (
    <React.StrictMode>
      <Header />
      <Main />
      <Footer />
    </React.StrictMode>
  );
}

export default App;
