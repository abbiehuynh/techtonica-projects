import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/Navbar.jsx';
import ListStudents from './components/ListStudents'



function App() {

  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <Routes>
          {/* <Route path="/" element={< />} /> */}
          <Route path="/contacts" element={<ListStudents/>} />
          {/* <Route path="/contacts/details" element={< />} /> */}
        </Routes>
      </Router>
    
      

    </div>
  )
}

export default App
