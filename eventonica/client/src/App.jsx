import React, { useState } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavBar from './components/Navbar';
import ListEvents from './components/ListEvents';
import MyForm from './components/Form';
import SearchBar from './components/SearchBar';


function App() {
  const [uploadForm, setUploadForm] = useState(false);
  

  return (
    <div className="App">
      <MyNavBar />
      <SearchBar />
      <ListEvents />
      <button className="form-btn" onClick={() => setUploadForm(true)}>
      Add Event
      </button>
      {uploadForm && <MyForm closeForm={() => {setUploadForm(false)}}/>}
    </div>
  )
}

export default App;
