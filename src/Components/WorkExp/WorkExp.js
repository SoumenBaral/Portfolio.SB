import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FcGoogle } from "react-icons/fc";
import { LiaFacebookSquare } from "react-icons/lia";
import { TfiYoutube } from "react-icons/tfi";
import { CgMail } from "react-icons/cg";
import './WorkExp.css'

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
                    name:" REST API"
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
            icon:<LiaFacebookSquare size={35}/>,
            techSkills:[
                {
                    name:"Vue Js"
                },
                {
                    name:"REST API"
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
            icon:<TfiYoutube/>,
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
            icon:<CgMail/>,
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
        "rgba(0, 255, 0, 0.5)",
        // "rgba(255, 0, 0, 0.4)",
        " rgba(0, 0, 255, 0.5)",
        "rgba(255, 0, 0, 0.7)",
        "rgba(128, 0, 128, 0.5)"
    ]
    return (
        <div className='container ' id='work'>
             <div className='section-title container my-5'>
                <h5>Work Experience</h5>
                <span className='line'></span>
            </div>
            <VerticalTimeline lineColor={ "rgba(128, 0, 128, 0.5)" }>
                {data.map((item,index)=>(
                    
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: colors[index], color: '#fff', boxShadow:"-12px 9px 22px -7px rgba(0,0,0,0.46);", borderRadius: "20px"}}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date={item.date}
                        dateClassName={ 'date' }
                        iconStyle={{ background: colors[index], color: '#fff' ,boxShadow:"-12px 9px 22px -7px rgba(10,0,0,0.46);" ,fontSize:'40px'}}
                        icon={item?.icon}
                       
                    >
                        <h3 className="vertical-timeline-element-title">{item.companyName}</h3>
                        <h4 className="vertical-timeline-element-subtitle">{item.position}</h4>
                        <div className="row" key={index}>
                            {
                                item.techSkills&&item.techSkills.map((tech,index)=>(
                                    <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12'>
                                    <div className='techUsed'>
                                    <p>{tech.name}</p>
                                    </div>
                                    
                                    </div>
                                ))
                            }
                        
                        </div>
                        <p>
                        {item.description}
                        </p>
                    </VerticalTimelineElement>
                
    
                ))}
            </VerticalTimeline>
         
        </div>
    );
};

export default WorkExp;