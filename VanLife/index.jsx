import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

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

function Home() {
  return (
    <main className='home-main'>
      <div className='overlay'></div>
      <div className='home-content'>
        <h1 className='hero-title'>You got the travel plans, we got the travel vans.</h1>
        <p className='hero-text'>
          Add adventure to your life by joining the #vanlife movement.
          Rent the perfect van to make your perfect road trip.
        </p>
        <button className='cta-btn'>Find your van</button>
      </div>
      <footer className='footer'>
        Ⓒ 2022 #VANLIFE
      </footer>
    </main>
  )
}

function About() {
  return (
    <main>
      <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>

      <footer className='footer'>
        Ⓒ 2022 #VANLIFE
      </footer>
    </main>
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
