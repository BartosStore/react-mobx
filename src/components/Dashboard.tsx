import React from 'react';
import BarChartData from "./BarChartData";
import './../App.css';

const Dashboard = () => {
    return (
        <div className="App">
            <h2>Dashboard</h2>
            <div className="Center">
                <BarChartData />
            </div>
        </div>
    )
}

export default Dashboard;