import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavBar from './components/Navbar'
import ListStudents from './components/ListEvents'


function App() {

  return (
    <div className="App">
      <MyNavBar />
      <ListEvents />
      
    </div>
  )
}

export default App
