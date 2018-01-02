import React, { Component } from "react";
import "./Dashboard.css";

class Dashboard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            jwt: null,
            name: null
        }


    }

    componentWillMount() {
    
      try {
        const jwt = localStorage.getItem('jwtToken');
        const name = localStorage.getItem('name');
        this.setState({
            jwt: jwt,
            name: name
            });
        } catch (e){
            //nothing
        }
    }
   

    render(){
        return(
            <div className="container-fluid">
            <div className="row text-center">
            <div className="col">
            <h1>Dashboard</h1>
            </div>
            <div className="col">
                {this.state.name}
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