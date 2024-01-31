import React from 'react'
import './Home.css'
import Typewriter from 'typewriter-effect';
import cv from './CV.pdf'
import { GiSun } from "react-icons/gi";
import { BsMoonStarsFill } from "react-icons/bs";
import Fade from 'react-reveal/Fade';

const Home = ({theme,handleTheme}) => {
  return (
    <div className='container-fluid home' id='home'>
       <div className="themeChange" onClick={handleTheme}>
        {
          theme==="light"?<GiSun size={40} className='sunTheme' />:<BsMoonStarsFill  size={30} className='moonTheme'/>
        }
       </div>

      <Fade right>
      <div className='container home_content'>
          <h3 >Hi I'm Soumen Baral </h3>
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
      </Fade>

    <Fade bottom>
      <div className="btn-container">
        <div className="hire-me-btn">
          Hire Me
        </div>
        <div className="get-resume-btn">
          <a  href={cv} download='Shumen.pdf'>Get Resume</a>
        </div>
      </div>
      </Fade>
    </div>
  )
}

export default Home



