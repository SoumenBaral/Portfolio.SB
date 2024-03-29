import React, { useState } from 'react';
import './TechStack.css'
import '../About/About.css'
import Fade from 'react-reveal/Fade';
import { Zoom } from 'react-reveal';
const TechStack = () => {
    const [loadMore,setLoadMore] = useState(9);
    const handleLoad = () =>{
        setLoadMore(num=>num+3);
    }
    const Data = [
        {
            name:"Full Stack Developer"
        },
        {
            name:"Django Developer"
        },{
            name:"Django Rest Framework Developer"
        },{
            name:"React js"
        },{
            name:"Node js"
        },{
            name:"Express Js"
        },{
            name:"Sqlite Data base"
        },
        {
            name:"Mongo Db"
        },
        {
            name:"C"
        },
        {
            name:"cpp"
        },
        {
            name:"Python"
        },
        {
            name:"Git"
        },
        {
            name:"GitHub"
        },
        {
            name:"Vanilla Css"
        },
        {
            name:"Tailwind Css"
        },
        {
            name:"Bootstrap"
        },

    ]
    const colorCode =[
        "#FF0000", // Red
        "#00FF00", // Lime
        "#0000FF", // Blue
        "#FFFF00", // Yellow
        "#FF00FF", // Magenta
        "#00FFFF", // Cyan
        "#FFA500", // Orange
        "#800080", // Purple
        "#008000", // Green
        "#800000", // Maroon
        "#008080", // Teal
        "#FF6347", // Tomato
        "#4B0082", // Indigo
        "#FFD700", // Gold
        "#40E0D0", // Turquoise
        "#808080"  // Gray
    ]

    return (
        <div className='container tech-stack-section' id='tech'>
            <div className='section-title container mb-5'>
                <h5>Tech Stack</h5>
                <span className='line'></span>
            </div>
            <div className="row">
                
                    {
                        Data.slice(0,loadMore).map((item,index) => (
                            <Fade right>
                                <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12' key={index}>
                                    <div  className={index===0?"techContentOne techContent":"techContent"}>
                                        <span  style={{backgroundColor:colorCode[index]}} className='TechNumber' >
                                            {index+1}
                                        </span>
                                        <p>{item.name}</p>
                                    </div>
                                </div>
                            </Fade>
                        ))
                    }
            </div>
            {loadMore>=Data.length?null:(
            <Zoom>
                <span onClick={handleLoad} className='loadMore'>
                    load More
                </span>
            </Zoom>
            )}
        </div>

    );
};

export default TechStack;