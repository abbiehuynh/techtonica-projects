import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavBar from './components/Navbar';
import SearchBar from './components/SearchBar';
import ListEvents from './components/ListEvents';


function App() {

  return (
    <div className="App">
      <MyNavBar />
      <SearchBar />
      <ListEvents />
      
    </div>
  )
}

export default App
