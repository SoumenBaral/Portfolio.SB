import React from 'react'
import './Home.css'
import Typewriter from 'typewriter-effect';
const Home = () => {
  return (
    <div className='container-fluid home'>
      <div className='container home_content'>
      <h2>
      <Typewriter
          options={{
            strings: ['Hello', 'World'],
            autoStart: true,
            loop: true,
          }}
        />
      </h2>
      <h1 >Hi I'm a </h1>
    
      </div>
    </div>
  )
}

export default Home



