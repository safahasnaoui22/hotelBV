import "./activites.css";
import React from "react";

function Activities() {
    const activities = [
        { name: "Keith Jensen", action: "requested for room.", time: "2 hours ago", avatar: "https://image.freepik.com/free-vector/person-avatar-design_24877-38131.jpg" },
        { name: "Alice Smith", action: "checked out.", time: "3 hours ago", avatar: "https://image.freepik.com/free-vector/person-avatar-design_24877-38131.jpg" },
        { name: "John Doe", action: "booked a table.", time: "5 hours ago", avatar: "https://image.freepik.com/free-vector/person-avatar-design_24877-38131.jpg" },
        { name: "Jane Johnson", action: "made a reservation.", time: "7 hours ago", avatar: "https://image.freepik.com/free-vector/person-avatar-design_24877-38131.jpg" }
    ];

    return (
        <div className="activities">
            <h2>Recent Activities</h2>
            {activities.map((activity, index) => (
                <div key={index} className="activity-card">
                         
                    <div className="activity-details">
                    
                        <p>{activity.name} {activity.action}</p>
                        <p>{activity.time}</p>
                    </div>
                    <img src={activity.avatar} alt="Avatar" className="avatar" />
                    <hr className="hract"/>
                </div>
            ))}
        </div>
    );
}

export default Activities;
