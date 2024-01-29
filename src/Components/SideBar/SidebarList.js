import React from 'react';
import './SidebarList.css'
import ProfilePicture from '../../assets/image/Me.jpeg'
import { 
    FcHome ,
    FcNightPortrait,
    FcTodoList,
    FcContacts,
    FcFactory,
    FcSalesPerformance


} from "react-icons/fc";
import {MdBiotech,MdCastForEducation } from "react-icons/md";
import {Link} from "react-scroll"


const SidebarList = ({expand}) => {
    return (
      <React.Fragment>
        {
            expand?(
            <div className="navbar_items">
                <div className="profile_pic_nav">
                    <img src={ProfilePicture} alt="ProfilePicture" />
                </div>
                <ul>
                    <li className='nav_item'>
                        <Link to='home'
                        spy={true}
                        smooth={true}
                        duration={100}
                        offset={-100}
                        >
                        <FcHome size={25}/> Home
                        </Link>
                        
                    </li>
                    <li className='nav_item'>
                    <Link to='about'
                        spy={true}
                        smooth={true}
                        duration={100}
                        offset={-100}
                        >
                         <FcNightPortrait size={25}/>  About
                        </Link>
                    </li> 
                    <li className='nav_item'>
                    <Link to='tech'
                        spy={true}
                        smooth={true}
                        duration={100}
                        offset={-100}
                        >
                        <MdBiotech color='orange' size={25}/> Tach Stack
                        </Link>
                        
                    </li>
                    
                    <li className='nav_item'>
                    <Link to='work'
                        spy={true}
                        smooth={true}
                        duration={100}
                        offset={-100}
                        >
                        <FcFactory size={25}/> Work Experience
                        </Link>
                    </li>
                    <li className='nav_item'>
                    <Link to='project'
                        spy={true}
                        smooth={true}
                        duration={100}
                        offset={-100}
                        >
                         <FcTodoList size={25}/> Projects
                        </Link>
                       
                    </li>
                    <li className='nav_item'>
                    <Link to='education'
                        spy={true}
                        smooth={true}
                        duration={100}
                        offset={-100}
                        >
                         <MdCastForEducation size={25}/> Educations
                        </Link>
                       
                    </li>
                
                    <li className='nav_item'>
                    <Link to='testimonial'
                        spy={true}
                        smooth={true}
                        duration={100}
                        offset={-100}
                        >
                         <FcSalesPerformance size={25}/> Testimonial
                        </Link>
                       
                    </li>
                    <li className='nav_item'>
                    <Link to='contact'
                        spy={true}
                        smooth={true}
                        duration={100}
                        offset={-100}
                        >
                         <FcContacts size={25}/> contact
                        </Link>
                       
                    </li>
                </ul>
           </div>
        ):(
            <div className='navbar_only_icons'>
                   <ul>
                    <li className='nav_item'>
                        <Link to='home'
                        spy={true}
                        smooth={true}
                        duration={100}
                        offset={-100}
                        >
                        <FcHome size={20}/>
                        </Link>
                        
                    </li>
                    <li className='nav_item'>
                    <Link to='about'
                        spy={true}
                        smooth={true}
                        duration={100}
                        offset={-100}
                        >
                         <FcNightPortrait size={20}/>
                        </Link>
                    </li> 
                    <li className='nav_item'>
                    <Link to='tech'
                        spy={true}
                        smooth={true}
                        duration={100}
                        offset={-100}
                        >
                        <MdBiotech color='orange' size={20}/>
                        </Link>
                        
                    </li>
                    
                    <li className='nav_item'>
                    <Link to='work'
                        spy={true}
                        smooth={true}
                        duration={100}
                        offset={-100}
                        >
                        <FcFactory size={20}/>
                        </Link>
                    </li>
                    <li className='nav_item'>
                    <Link to='project'
                        spy={true}
                        smooth={true}
                        duration={100}
                        offset={-100}
                        >
                         <FcTodoList size={20}/>
                        </Link>
                       
                    </li>
                    <li className='nav_item'>
                    <Link to='education'
                        spy={true}
                        smooth={true}
                        duration={100}
                        offset={-100}
                        >
                         <MdCastForEducation size={20}/>
                        </Link>
                       
                    </li>
                
                    <li className='nav_item'>
                    <Link to='testimonial'
                        spy={true}
                        smooth={true}
                        duration={100}
                        offset={-100}
                        >
                         <FcSalesPerformance size={20}/>
                        </Link>
                       
                    </li>
                    <li className='nav_item'>
                    <Link to='contact'
                        spy={true}
                        smooth={true}
                        duration={100}
                        offset={-100}
                        >
                         <FcContacts size={20}/>
                        </Link>
                       
                    </li>
                </ul>
            </div>
        )
        }
      </React.Fragment>
    );
};

export default SidebarList;