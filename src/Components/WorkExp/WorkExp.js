import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FcGoogle } from "react-icons/fc";
const WorkExp = () => {
    const data = [
        {
            companyName:'Google',
            position: "Full Stack Developer",
            description : " As a full-stack developer specializing in Django, Django Rest Framework, and React.js, you are well-equipped to contribute to the entire web development process",
            date:"loading...",
            icon:<FcGoogle/>,
            techSkills:[
                {
                    name:"Django"
                },
                {
                    name:"Django REST API"
                },
                {
                    name:"React Js"
                },
                {
                    name:"Express js"
                },


            ]
        },
        {
            companyName:'FaceBook',
            position: "Frontend Developer",
            description : " As a full-stack developer specializing in Django, Django Rest Framework, and React.js, you are well-equipped to contribute to the entire web development process",
            date:"loading...",
            techSkills:[
                {
                    name:"Vue Js"
                },
                {
                    name:"Django REST API"
                },
                {
                    name:"React Js"
                },
                {
                    name:"Express js"
                },


            ]
        },
        {
            companyName:'Youtube',
            position: "Full Stack Developer",
            description : " As a full-stack developer specializing in Django, Django Rest Framework, and React.js, you are well-equipped to contribute to the entire web development process",
            date:"loading...",
            techSkills:[
                {
                    name:"Django"
                },
                {
                    name:"java"
                },
                {
                    name:"React Js"
                },
                {
                    name:"Typescript"
                },


            ]
        },
        {
            companyName:'Gmail',
            position: "FrontEnd Developer",
            description : " As a full-stack developer specializing in Django, Django Rest Framework, and React.js, you are well-equipped to contribute to the entire web development process",
            date:"loading...",
            techSkills:[
                {
                    name:"Django"
                },
                {
                    name:"Malarial UI"
                },
                {
                    name:"React Js"
                },
                {
                    name:"Express js"
                },


            ]
        },
    ]
    const colors = [
        "rgba(255, 0, 0, 0.4)",
        " rgba(0, 0, 255, 0.5)",
        "rgba(0, 255, 0, 0.5)",
        "rgba(128, 0, 128, 0.5)"
    ]
    return (
        <div className='container'>
             <div className='section-title container mb-5'>
                <h5>Work Experience</h5>
                <span className='line'></span>
            </div>
            <VerticalTimeline>
                {data.map((item,index)=>(
                    
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: colors[index], color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="2011 - present"
                        iconStyle={{ background: colors[index], color: '#fff' ,boxShadow:"4px 3px 5px gray" }}
                        icon={item?.icon}
                    >
                        <h3 className="vertical-timeline-element-title">Creative Director</h3>
                        <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                        <p>
                        Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                        </p>
                    </VerticalTimelineElement>
                
    
                ))}
            </VerticalTimeline>
         
        </div>
    );
};

export default WorkExp;