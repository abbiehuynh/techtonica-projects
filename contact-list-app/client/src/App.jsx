import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import ListContacts from './components/ListContacts'



function App() {

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          {/* Routes to pages in NavBar - Home, Contacts */}
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<ListContacts/>} />

          {/* Route to Contact Details */}
          {/* <Route path="/contacts/details" element={< />} /> */}
        </Routes>
      </Router>
    
      

    </div>
  )
}

export default App
