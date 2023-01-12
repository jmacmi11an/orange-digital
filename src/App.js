import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [something, setSomething] = useState(null)

  useEffect(() => {
  const checkSomething = async () => {
    try {
      const response = await fetch('https://localhost:5000')
      const data = await response.json()
      setSomething(data)
    } catch (err) {
      setError('Something went wrong!')
    }
  }
  checkSomething()
}, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <p>{something}</p>
    </div>
  );
}

export default App;
