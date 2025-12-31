import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='nav'>
      <Link to="/" className='logoLink'>
        <h1 className='logo'>#VANLIFE</h1>
      </Link>
      <div>
        <Link to="/about" className='navLink'>About</Link>
        <Link to="/vans" className='navLink'>Vans</Link>
      </div>
    </nav>
  )
}

function Home() {
  return (
    <h1>You got the travel plans, we got the travel vans.</h1>
  )
}

function About() {
  return (
    <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
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
    </BrowserRouter>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);
