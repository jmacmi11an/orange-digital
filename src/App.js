import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import Container from './components/Container';

function App() {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
  const getData = async () => {
    try {
      const response = await fetch('http://localhost:5000/data.json')
      const data = await response.json()
      setData(data)
    } catch (err) {
      setError('Something went wrong!')
    }
  }
  getData()
}, [])

  return (
    <div className="App">
      <Container children={data}/>
    </div>
  );
}

export default App;
