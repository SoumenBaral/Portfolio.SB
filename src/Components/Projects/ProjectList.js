import React, { useState } from 'react';
import { FcExpand ,FcCollapse} from "react-icons/fc";
import './Projects.css'
import '../TechStack/TechStack.css'
import { FaGithub } from "react-icons/fa6";
import { SiKdenlive } from "react-icons/si";
const ProjectList = ({name,techUse,description,ProjectsUrl}) => {
  const[click ,setClick] = useState(true)
  console.log(click);
    return (
        <div className={click?" projectList":"ProjectListClick projectList"}
        onMouseEnter={()=>setClick(false)}
        onMouseLeave={()=>setClick(true)}
       >

            <div className='titleCollapse'>
                <h5 className='ms-4'>{name}</h5>
                {click?<p><FcExpand/></p>:<p><FcCollapse/></p>}
            </div>
           <div className='m-4'>
                 {click?<p>{description.substring(0,100)} <span className='text-secondary'>...Read more</span></p>:<p>{description}</p>}
           </div>
            
            <div className="row">
                {
                    techUse&&techUse.map((tech,index)=>(
                        <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12'>
                           <div className='techUsed'>
                           <p>{tech.tachName}</p>
                           </div>
                        
                        </div>
                    ))
                }
               
            </div>
          <div className='d-flex justify-content-start align-items-center gap-2 my-3'>
          <div className='liveDemo  m-0'>
            <a className='text-decoration-none text-white' href={ProjectsUrl} target='_blank'  rel="noreferrer" >live <SiKdenlive className='text-danger iconLive'/></a>
             </div>

            <div className=' github  m-0'>
           
            <a className='text-decoration-none text-white' href={ProjectsUrl} target='_blank'  rel="noreferrer" ><FaGithub className='iconLive' size={25}/></a>
             </div>

          </div>

        </div>
    );
};

export default ProjectList;