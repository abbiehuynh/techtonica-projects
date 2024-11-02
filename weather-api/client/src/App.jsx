import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import './App.css';

function App() {
  // creates initial state for userId to be updated once user logs in
  const [userId, setUserId] = useState(null);
  
  // handles login to update userId
  const handleLogin = (id) => {
      console.log("User logged in with ID:", id);
      // updates userId
      setUserId(id);
  };
 
  return (
    <div className="app">
    <Router>
        <Routes>
          <Route path="/" element={<Login onLogin={handleLogin} />} />
          <Route path="/home" element={<Home userId={userId}/>} />
        </Routes>
      </Router>
    
    </div>
  )
}

export default App;
