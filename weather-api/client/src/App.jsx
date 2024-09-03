import { useState, useEffect } from 'react';
import FORM from "./components/FORM";
import './App.css';

function App() {
  const [introduction, setIntroduction] = useState('')
  useEffect(() => {
    fetch('/')
    .then((res) => res.text())
    .then((data) => setMessage(data))
    .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      
      <FORM/>
      
    </div>
  )
}

export default App;
