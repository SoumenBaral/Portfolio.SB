import React from 'react';
import './Contact.css'
import { BsSendCheckFill } from "react-icons/bs";
import Fade from "react-reveal/Fade"
const Contact = () => {
    return (
        <div className='container contact-section' id='contact'>
            <div className="row">

            <Fade bottom>
                <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5">
                    <div className="contact-img">
                        <img className='w-100' src="https://images.pexels.com/photos/7598068/pexels-photo-7598068.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Contact Us" />
                    </div>
                </div>
            </Fade>

            <Fade right>
                <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7 ">
                    <div className="contact-form-design">
                        <h5 className='text-center mt-4'>Contact Me </h5>
                        <form action="">
                            <div className="contact-form">
                                <label  className='form-label' htmlFor="">Name</label>
                                <input type="text" className='form-control' />
                            </div>
                            <div className="contact-form">
                                <label  className='form-label' htmlFor="">Email</label>
                                <input type="email" className='form-control' />
                            </div>
                            <div className="contact-form">
                                <label  className='form-label' htmlFor="">Job Type</label>
                               <select className='custom-select text-center'>
                                    <option >Full Time</option>
                                    <option >Part Time</option>
                                    <option >Remote</option>
                                    <option >Project Base</option>
                                    <option >Contact</option>

                               </select>
                            </div>
                            <div className="contact-form">
                                <label  className='form-label' htmlFor="">Message </label>
                                <textarea  rows="5"></textarea>
                            </div>
                            <div className="button-submit">
                                <p>Send <BsSendCheckFill/></p>
                            </div>
                        </form>
                    </div>

                </div>
            </Fade>
            </div>
        </div>
    );
};

export default Contact;