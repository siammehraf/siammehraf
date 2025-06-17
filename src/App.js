import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div>
        {/* Shared Navigation */}
        <nav style={{ textAlign: 'center', padding: '1rem' }}>
          <Link to="/" style={{ margin: '0 1rem' }}>
            Home
          </Link>
          <Link to="/projects" style={{ margin: '0 1rem' }}>
            Projects
          </Link>
          <Link to="/about" style={{ margin: '0 1rem' }}>
            About
          </Link>
          <Link to="/contact" style={{ margin: '0 1rem' }}>
            Contact
          </Link>
        </nav>

        {/* Page Routing */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* Footer */}
        <footer style={{ textAlign: 'center', padding: '1rem', background: '#1a1a1a', color: '#888' }}>
          <p>© 2025 Siam Mehraf</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
