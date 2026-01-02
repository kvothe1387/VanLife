import React from 'react';

export default function Home() {
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
    </main>
  )
}