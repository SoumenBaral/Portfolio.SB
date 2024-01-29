import React from 'react';
import '../TechStack/TechStack.css'
import '../About/About.css'
import ProjectList from './ProjectList'

const Projects = () => {
    const data = [
        {
            name:"Book Hub Haven",
            description:"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. ",
            ProjectsUrl:"https://bookhubhaven.onrender.com/",
            techUse:[
                {
                    tachName : "Django",
                },
                {
                    tachName : " Rest API",
                },
                {
                    tachName : "React Js",
                },  
                 {
                    tachName : "Node Js",
                }, 
            ]
        },
        {
            name:"Book Hub Haven",
            description:"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. ",
            ProjectsUrl:"https://bookhubhaven.onrender.com/",
            techUse:[
                {
                    tachName : "Django",
                },
                {
                    tachName : "Django Rest API",
                },
                {
                    tachName : "React Js",
                },  
                 {
                    tachName : "Node Js",
                }, 
            ]
        },   {
            name:"Book Hub Haven",
            description:"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. ",
            ProjectsUrl:"https://bookhubhaven.onrender.com/",
            techUse:[
                {
                    tachName : "Django",
                },
                {
                    tachName : "Django Rest API",
                },
                {
                    tachName : "React Js",
                },  
                 {
                    tachName : "Node Js",
                }, 
            ]
        },   {
            name:"Book Hub Haven",
            description:"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. ",
            ProjectsUrl:"https://bookhubhaven.onrender.com/",
            techUse:[
                {
                    tachName : "Django",
                },
                {
                    tachName : "Django Rest API",
                },
                {
                    tachName : "React Js",
                },  
                 {
                    tachName : "Node Js",
                }, 
            ]
        },   {
            name:"Book Hub Haven",
            description:"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. ",
            ProjectsUrl:"https://bookhubhaven.onrender.com/",
            techUse:[
                {
                    tachName : "Django",
                },
                {
                    tachName : "Django Rest API",
                },
                {
                    tachName : "React Js",
                },  
                 {
                    tachName : "Node Js",
                }, 
            ]
        },   {
            name:"Book Hub Haven",
            description:"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. ",
            ProjectsUrl:"https://bookhubhaven.onrender.com/",
            techUse:[
                {
                    tachName : "Django",
                },
                {
                    tachName : "Django Rest API",
                },
                {
                    tachName : "React Js",
                },  
                 {
                    tachName : "Node Js",
                }, 
            ]
        },
    ]
    return (
        <div className='container my-5' id='project'>
             <div className='section-title container mb-5'>
                <h5> Projects </h5>
                <span className='line'></span>
            </div>
          <div className="row">
          {
                data.map((project,index)=>(
                    <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
                   <ProjectList {...project} key={index}/>

                    </div>
                ))
            }
          </div>


            
        </div>
    );
};

export default Projects;