import './App.css'
import Team from './components/Team'
import Footer from './components/Footer'
import Navbar from "./components/Navbar.tsx";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./components/HomePage.tsx";

function App() {

  return (
      <Router>
          <div className="App">
              <Navbar />
              <Routes>
                  <Route path="/team" element={<Team />} />
                  <Route path="/" element={<HomePage />} />
                  <Route path="/home" element={<HomePage />} />
                  <Route path="*" element={<HomePage />} />
              </Routes>
              <Footer />
          </div>
      </Router>

  )
}

export default App
