import React from 'react';
import profileImg from '../../assets/image/meToo.jpg'
import './About.css'
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';

const About = () => {
    return (
        <div className='container about-section mb-5' id='about'>
            <div className='row'>
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                
                <Zoom>
                    <div className="about-img">
                        <img src={profileImg} alt="Soumen" />
                    </div>
                </Zoom>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                    <div className="about-details">
                     <Flip >
                        <div className="about-title">
                                <h5>About Me</h5>
                                <span className='line'></span>
                        </div>
                     </Flip>
                        <Fade right>
                                <p className='mt-4'>
                                As a full-stack developer specializing in Django, Django Rest Framework, and React.js, you are well-equipped to contribute to the entire web development process, from server-side logic and API development to creating responsive and interactive user interfaces. My skill set positions you as a valuable asset in building modern and efficient web applications.
                                </p>
                        </Fade>
                    </div>
                </div>
    

            </div>
        </div>
    );
};

export default About;