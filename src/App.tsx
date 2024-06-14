import Home from './components/Home'
import './App.css'
import Team from './components/Team'
import Footer from './components/Footer'
import Navbar from "./components/Navbar.tsx";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from "./components/About.tsx";

function App() {

  return (
      <Router>
          <div className="App">
              <Navbar />
              <Routes>
                  <Route path="/team" element={<Team />} />
                 <Route path="/" element={<Home />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="*" element={<Home />} />

              </Routes>
              <Footer />
          </div>
      </Router>

  )
}

export default App
