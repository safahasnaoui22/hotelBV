import "./dashboardstyle.css";
import Headerdashb from "./Headerdashb";
import HomeDash from "./HomeDash";
import React, { useState } from "react";
import Sidebar from "./Sidebar";

function Main() {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)
    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle)
      }
  
    return (
        <div className='grid-container'>
<div className="themain">
            
            <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
       <HomeDash />
        </div>
        </div>
        
    )
}

export default Main
