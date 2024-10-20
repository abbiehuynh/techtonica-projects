import React, { useState, useEffect } from 'react';
import Weather from './components/Weather';
import User from './components/User';
import './App.css';

function App() {
  
 

  return (
    <div className="app">
  
      <h2>Weather App</h2>
      <Weather />
      <User />
    
        
    </div>
  )
}

export default App;
