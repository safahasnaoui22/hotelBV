import MainContent from "./MainContent";
import Profile from "./Profile";
import React from "react";
import Sidebar from "./Sidebar";

import'./dash.css'
function Dashboard() {
    return (
        <div className="dash">
            <Profile/>
            <Sidebar/>
           
            
        </div>
    )
}

export default Dashboard
