import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import Home from './components/Home';
import Explore from './components/Explore';
import Profile from './components/Profile';
import PostDetails from './components/PostDetails';


function App() {

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/posts/:id" element={<PostDetails />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
