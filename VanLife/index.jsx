import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home-pg';
import About from './About-pg';


function Navbar() {
  return (
    <nav className='nav'>
      <Link to="/" className='logo-link'>
        <h1 className='logo'>#VANLIFE</h1>
      </Link>
      <div>
        <Link to="/about" className='nav-link'>About</Link>
        <Link to="/vans" className='nav-link'>Vans</Link>
      </div>
    </nav>
  )
}

function Footer() {
  return (
    <footer className='footer'>
      Ⓒ 2026 #VANLIFE
    </footer>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);
