import { useState, useEffect } from 'react';
import FORM from "./components/FORM";
import MESSAGE from "./components/MESSAGE";
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
      { introduction }
      <FORM/>
      <MESSAGE/>
    </div>
  )
}

export default App;
