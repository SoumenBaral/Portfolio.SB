import React from 'react';
import profileImg from '../../assets/image/meToo.jpg'
import './About.css'
const About = () => {
    return (
        <div className='container about-section mb-5'>
            <div className='row'>
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                    <div className="about-img">
                        <img src={profileImg} alt="Soumen" />
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                    <div className="about-details">
                        <div className="about-title">
                                <h5>About Me</h5>
                                <span className='line'></span>
                        </div>
                        <p className='mt-4'>
                        As a full-stack developer specializing in Django, Django Rest Framework, and React.js, you are well-equipped to contribute to the entire web development process, from server-side logic and API development to creating responsive and interactive user interfaces. My skill set positions you as a valuable asset in building modern and efficient web applications.
                        </p>
                    </div>
                </div>
    

            </div>
        </div>
    );
};

export default About;