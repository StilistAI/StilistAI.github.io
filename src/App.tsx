import Home from './components/Home'
import './App.css'
import Team from './components/Team'
import Footer from './components/Footer'
import Navbar from "./components/Navbar.tsx";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
      <Router>
          <div className="App">
              <Navbar />
              <Routes>
                  <Route path="/team" element={<Team />} />
                 <Route path="/home" element={<Home />} />
              </Routes>
              <Footer />
          </div>
      </Router>

  )
}

export default App
