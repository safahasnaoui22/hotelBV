import Chart from "./Chart";
import MyPieChart from "./MyPieChart";
import React from "react";

function ChartRooms() {
    return (
        <div className="roomDash">
            <div>
                <MyPieChart />
            </div>
            <div>
            <Chart aspect={16 / 9} title="Your Title" />

            </div>
           
        </div>
    );
}

export default ChartRooms;

