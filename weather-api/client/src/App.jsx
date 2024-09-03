import React, { useState, useEffect } from 'react';
import WEATHER from "./components/WEATHER";
import "./components/weather.css";
import './App.css';

function App() {
   // const [submit, setSubmit] = useState('');
   
  // const [introduction, setIntroduction] = useState('')
  // useEffect(() => {
  //   fetch('/')
  //   .then((res) => res.text())
  //   .then((data) => setMessage(data))
  //   .catch((err) => console.log(err));
  // }, []);

  return (
    <div className="app">
      
      <WEATHER/>
      
    </div>
  )
}

export default App;
