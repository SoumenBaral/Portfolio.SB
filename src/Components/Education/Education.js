import React from 'react';
import './Education.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaUserGraduate } from "react-icons/fa6";
const Education = ({theme}) => {
    const data = [
        {
            name:'Sonargaon University',
            department: "B.Sc in Computer Science ",
            description : " As a full-stack developer specializing in Django, Django Rest Framework, and React.js, you are well-equipped to contribute to the entire web development process",
            date:"2022-present",
            result:"3.95 out of 4"
          
        },
        {
            name:'JAGANNATH UNIVERSITY',
            department: "B.Sc in Zoology",
            description : "Django Rest Framework, and React.js, you are well-equipped to contribute to the entire web development process",
            date:"2017-2023",
            result:"2.33 out of 4"
          
        },
        {
            name:'Amrita Lal collage ,Barisal',
            department: "HSC ",
            description : " As a full-stack developer specializing in Django, Django Rest Framework, and React.js, you are well-equipped to contribute to the entire web development process",
            date:"2016-2017",
            result:"5 out of 5"
          
        },
        {
            name:'Bhandaria  Vihari Pilot High school',
            department: "SSC ",
            description : " As a full-stack developer specializing in Django, Django Rest Framework, and React.js, you are well-equipped to contribute to the entire web development process",
            date:"2014-2015",
            result:"5 out of 5"
          
        },
       
    ]
    const colors = [
        "rgba(400, 25, 100, 0.5)",
        // "rgba(255, 0, 0, 0.4)",
        "rgba(128, 0, 128, 0.5)",
        "rgba(255, 0, 0, 0.7)",
        " rgba(0, 0, 255, 0.5)",
    ]
    return (
        <div className='container ' id='education'>
             <div className='section-title container my-5'>
                <h5>Education</h5>
                <span className='line'></span>
            </div>
            <VerticalTimeline lineColor={theme==="light"? "rgba(128, 0, 128, 0.5)": "rgba(255, 0, 0, 0.5)"  }>
                {data.map((item,index)=>(
                    
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: colors[index], color: '#fff', boxShadow:"-12px 9px 22px -7px rgba(0,0,0,0.46)", borderRadius: "20px"}}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date={item.date}
                        dateClassName={ 'date' }
                        iconStyle={{ background: colors[index], color: '#fff' , boxShadow:"-12px 9px 22px -7px rgba(220,0,0,0.46)" ,fontSize:'40px'}}
                        icon={<FaUserGraduate/>}
                    >
                        <h4 className="vertical-timeline-element-title">{item.name}</h4>
                        <h5 className="vertical-timeline-element-subtitle my-3">{item.department}</h5>
                        <h6  className="vertical-timeline-element-subtitle">Result : {item.result}</h6>
                        <p>
                        {item.description}
                        </p>


                    </VerticalTimelineElement>
                
    
                ))}
            </VerticalTimeline>
            
        </div>
    );
};

export default Education;