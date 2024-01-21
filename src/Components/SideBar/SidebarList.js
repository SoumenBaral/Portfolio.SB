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
                        <FcHome size={25}/> Home
                    </li>
                    <li className='nav_item'>
                        <FcNightPortrait size={25}/>  About
                    </li> 
                    <li className='nav_item'>
                        <FcFactory size={25}/> Work Experience
                    </li>
                    <li className='nav_item'>
                        <MdBiotech color='orange' size={25}/> Tack Stack
                    </li>
                    <li className='nav_item'>
                        <MdCastForEducation size={25}/> Educations
                    </li>
                    <li className='nav_item'>
                        <FcTodoList size={25}/> Projects
                    </li>
                    <li className='nav_item'>
                        <FcSalesPerformance size={25}/> Testimonial
                    </li>
                    <li className='nav_item'>
                        <FcContacts size={25}/> contact
                    </li>
                </ul>
           </div>
        ):(
            <div className='navbar_only_icons'>
                     <ul>
                    <li className='nav_item'>
                        <FcHome size={20}/>
                    </li>
                    <li className='nav_item'>
                        <FcNightPortrait size={25}/>
                    </li> 
                    <li className='nav_item'>
                        <FcFactory size={25}/>
                    </li>
                    <li className='nav_item'>
                        <MdBiotech color='orange' size={25}/>
                    </li>
                    <li className='nav_item'>
                        <MdCastForEducation color='white' size={25}/>
                    </li>
                    <li className='nav_item'>
                        <FcTodoList size={25}/>
                    </li>
                    <li className='nav_item'>
                        <FcSalesPerformance size={25}/>
                    </li>
                    <li className='nav_item'>
                        <FcContacts size={25}/>
                    </li>
                </ul>
            </div>
        )
        }
      </React.Fragment>
    );
};

export default SidebarList;