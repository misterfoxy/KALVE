import React, { Component } from "react";
import "./Dashboard.css";

class Dashboard extends React.Component {

    render(){
        return(
            <div className="container-fluid">
            <div className="row text-center">
            <div className="col">
            <h1>Dashboard</h1>
            </div>
            <div className="col">
            <a href="/order"><button className="btn btn-warning">Create New Order</button></a>
            </div>
            </div>
            </div>
        );
    }
}

export default Dashboard;