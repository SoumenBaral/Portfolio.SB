import React, { useState } from 'react';
import  './Sidebar.css'
import { BsChevronLeft,BsChevronRight } from "react-icons/bs";
import SidebarList from './SidebarList';
const Sidebar = () => {
    const [expand,setExpand]=useState(true)
    console.log(expand);
    return (
        <div className='container-fluid sidebar_section'>
            <div className={expand?'sidebar-expand sidebar':'sidebar'}>
                <div className="icon_for_sidebar_expand">
                    <p onClick={()=>setExpand(!expand)}>
                        {
                            expand?<BsChevronLeft size={30}/>:<BsChevronRight size={30}/>
                        }
                        </p>
                    
                        
                </div>
                <SidebarList expand={expand}/>

            </div>
            <div className="container">
                <p>Home Section</p>
            </div>
        </div>
    );
};

export default Sidebar;