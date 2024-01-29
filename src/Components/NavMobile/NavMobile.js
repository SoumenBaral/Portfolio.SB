import React, { useState } from 'react';
import './NavMobile.css'
import { GiHamburgerMenu } from "react-icons/gi";
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
import { MdCancel } from "react-icons/md";

const NavMobile = () => {
    const [open,setOpen] = useState(false)
    return (
        <div className='navMobile'>
            <div className="navbarHeader" onClick={()=>setOpen(!open)}>
                {open?<p>< MdCancel  size={30}/></p>:<p><GiHamburgerMenu size={30}/></p>}
            </div>

           {
            open?( <div className="mobileNav">
            <ul>
                    <li className='nav_item_mobile'>
                        <Link to='home'
                        spy={true}
                        smooth={true}
                        duration={100}
                        offset={-100}
                        >
                        <FcHome size={25}/> Home
                        </Link>
                        
                    </li>
                    <li className='nav_item_mobile'>
                    <Link to='about'
                        spy={true}
                        smooth={true}
                        duration={100}
                        offset={-100}
                        >
                         <FcNightPortrait size={25}/>  About
                        </Link>
                    </li> 
                    <li className='nav_item_mobile'>
                    <Link to='tech'
                        spy={true}
                        smooth={true}
                        duration={100}
                        offset={-100}
                        >
                        <MdBiotech color='orange' size={25}/> Tach Stack
                        </Link>
                        
                    </li>
                    
                    <li className='nav_item_mobile'>
                    <Link to='work'
                        spy={true}
                        smooth={true}
                        duration={100}
                        offset={-100}
                        >
                        <FcFactory size={25}/>Work Exp
                        </Link>
                    </li>
                    <li className='nav_item_mobile'>
                    <Link to='project'
                        spy={true}
                        smooth={true}
                        duration={100}
                        offset={-100}
                        >
                         <FcTodoList size={25}/> Projects
                        </Link>
                       
                    </li>
                    <li className='nav_item_mobile'>
                    <Link to='education'
                        spy={true}
                        smooth={true}
                        duration={100}
                        offset={-100}
                        >
                         <MdCastForEducation size={25}/> Educations
                        </Link>
                       
                    </li>
                
                    <li className='nav_item_mobile'>
                    <Link to='testimonial'
                        spy={true}
                        smooth={true}
                        duration={100}
                        offset={-100}
                        >
                         <FcSalesPerformance size={25}/> Testimonial
                        </Link>
                       
                    </li>
                    <li className='nav_item_mobile'>
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
            </div>):null
           }
        </div>
    );
};

export default NavMobile;