import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavBar from './components/Navbar';
import ListEvents from './components/ListEvents';
import MyForm from './components/Form';
import SearchBar from './components/SearchBar';


function App() {

  return (
    <div className="App">
      <MyNavBar />
      <SearchBar />
      <ListEvents />
      <MyForm />
    </div>
  )
}

export default App;
