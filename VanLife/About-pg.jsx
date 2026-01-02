import React from 'react';

export default function About() {
  return (
    <main className='about-main'>
      <div className='about-hero-img'></div>
      <div className='about-content'>
        <h1 className='about-title'>Don’t squeeze in a sedan when you could relax in a van.</h1>
        <p className='about-text'>
          Our mission is to enliven your road trip with the perfect travel van rental.
          Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
          <br />
          (Hitch costs extra 😉)
        </p>
        <p className='about-text'>
          Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
        </p>
        <div className='explore-section'>
          <h2 className='explore-title'>Your destination is waiting.<br />Your van is ready.</h2>
          <button className='explore-btn'>Explore our vans</button>
        </div>
      </div>
    </main>
  )
}