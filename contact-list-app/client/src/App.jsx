import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/Navbar.jsx';
import ListContacts from './components/ListContacts'



function App() {

  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <Routes>
          {/* <Route path="/" element={< />} /> */}
          <Route path="/contacts" element={<ListContacts/>} />
          {/* <Route path="/contacts/details" element={< />} /> */}
        </Routes>
      </Router>
    
      

    </div>
  )
}

export default App
