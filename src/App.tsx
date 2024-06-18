import './App.css'
import Footer from './components/Footer'
import Navbar from "./components/Navbar.tsx";
import { HashRouter as Router } from 'react-router-dom';
import HomePage from "./components/HomePage.tsx";

function App() {

  return (
      <Router>
          <div className="App">
              <Navbar />
              <HomePage />
              <Footer />
          </div>
      </Router>
  )
}

export default App
