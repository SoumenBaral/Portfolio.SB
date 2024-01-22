import React from 'react'
import './Home.css'
import Typewriter from 'typewriter-effect';
import cv from './CV.pdf'
const Home = () => {
  return (
    <div className='container-fluid home'>
      <div className='container home_content'>
          <h3 >Hi I'm a </h3>
          <h4>
          <Typewriter
              options={{
                strings: [
                  'Full Stack Developer',
                  'Django Developer',
                  'MERN Stack Developer',
                  'Problem Solver',
                  'Consistent Learner',
                ],
                autoStart: true,
                loop: true,
                delay: 5,
              }}
            />
          </h4>
      </div>
      <div className="btn-container">
        <div className="hire-me-btn">
          Hire Me
        </div>
        <div className="get-resume-btn">
          <a  href={cv} download='Shumen.pdf'>Get Resume</a>
        </div>
      </div>
    </div>
  )
}

export default Home



