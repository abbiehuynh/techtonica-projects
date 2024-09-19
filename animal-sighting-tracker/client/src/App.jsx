import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavBar from './components/Navbar'
import ListSpecies from './components/ListSpecies'
import ListSightings from './components/ListSightings';
import NavigationBar from './components/NavigationBar';


function App() {

  return (
    <div className="App">
      {/* <MyNavBar />
      <ListSpecies /> */}
      <NavigationBar />

    </div>
  )
}

export default App
