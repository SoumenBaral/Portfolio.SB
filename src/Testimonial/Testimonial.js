import React from 'react';
import "./Testimonial.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Testimonial = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        // slidesToScroll: 3,
        initialSlide: 0,
        autoplay: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    const data=[
        {
            name:"Alauddin Khilji",
            position:"CEO of Anex World ",
            img:'https://images.pexels.com/photos/34534/people-peoples-homeless-male.jpg?auto=compress&cs=tinysrgb&w=600',
            description:" dolor sit amet, consectetur adipisicing elit. Nobis, omnis sapiente ut est laudantium quo quaerat illum aspernatur sit aliquid "
        },
        {
            name:"David MK",
            position:"CFO of Wise World ",
            img:'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=600',
            description:" dolor sit amet, consectetur adipisicing elit. Nobis, omnis sapiente ut est laudantium quo quaerat illum aspernatur sit aliquid "
        },
        {
            name:"Emily",
            position:"Project Manager  ",
            img:'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600',
            description:" dolor sit amet, consectetur adipisicing elit. Nobis, omnis sapiente ut est laudantium quo quaerat illum aspernatur sit aliquid "
        },
        {
            name:"Babar Azam",
            position:"CEO of Anex World ",
            img:'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=600',
            description:" dolor sit amet, consectetur adipisicing elit. Nobis, omnis sapiente ut est laudantium quo quaerat illum aspernatur sit aliquid "
        },
        {
            name:"Mikhail Sen",
            position:"HR at Nextive ",
            img:'https://images.pexels.com/photos/943084/pexels-photo-943084.jpeg?auto=compress&cs=tinysrgb&w=600',
            description:" dolor sit amet, consectetur adipisicing elit. Nobis, omnis sapiente ut est laudantium quo quaerat illum aspernatur sit aliquid "
        },
        {
            name:"Ritu Talukder",
            position:"CEO of Brain Station ",
            img:'https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg?auto=compress&cs=tinysrgb&w=600',
            description:" dolor sit amet, consectetur adipisicing elit. Nobis, omnis sapiente ut est laudantium quo quaerat illum aspernatur sit aliquid "
        },
    ]
    return (
        <div className='container my-5'>
            <div className='section-title container my-5'>
                <h5>Testimonial</h5>
                <span className='line'></span>
            </div>
            <div className="testimonial_slider">
                <Slider {...settings}>
                    {data.map((item,index)=>(
                       <div className="contentSliderMain">
                             <div className='containSlider' key={index} >
                            <img src={item.img} alt="testimonialImg" className='testimonialImg'/>
                            <p className='my-3'>{item.description}</p>
                            <h4>{item.name}</h4>
                            <p>{item.position}</p>
                        </div>
                       </div>
                    ))}
                </Slider>
            </div>
            
        </div>
    );
};

export default Testimonial;