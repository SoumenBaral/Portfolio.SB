import React, { useState } from 'react';
import { FcExpand ,FcCollapse} from "react-icons/fc";
import './Projects.css'
import '../TechStack/TechStack.css'
import { FaGithub } from "react-icons/fa6";
import { SiKdenlive } from "react-icons/si";
import Zoom from 'react-reveal/Zoom';
const ProjectList = ({name,techUse,description,ProjectsUrl}) => {
  const[click ,setClick] = useState(true)
  const colorCode =[
    "#FF0000", // Red
    "#00FF00", // Lime
    "#0000FF", // Blue
    // "#FFFF00", // Yellow
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
  console.log(click);
    return (
    <Zoom>
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
                            <div className='techUsed' style={{backgroundColor:colorCode[index]}}>
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
    </Zoom>
    );
};

export default ProjectList;