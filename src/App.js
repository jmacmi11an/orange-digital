import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import ButtonAppBar from './components/Container';

function App() {
  const [test, setTest] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
  const runTest = async () => {
    try {
      const response = await fetch('http://localhost:5000/data.json')
      const data = await response.json()
      setTest(data)
    } catch (err) {
      setError('Something went wrong!')
    }
  }
  runTest()
}, [])

  return (
    <div className="App">
      <ButtonAppBar/>
      <p>{test}</p>
    </div>
  );
}

export default App;
