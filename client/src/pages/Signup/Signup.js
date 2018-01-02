import React, { Component } from "react";
import { Redirect } from "react-router-dom"
import API from "../../utils/API"
class Signup extends Component {
    constructor(props){
        super(props);
        this.state = {
            loggedIn: false,
            user: "",
            name: "",
            password: "",
            email: ""
        };
        this.handleUserRegister = this.handleUserRegister.bind(this);
    
    }
    
    

    handleInputChange = e => {
        const { name, value} = e.target;
        this.setState({
            [name]: value
        });
    };

    handleUserRegister(e){
        e.preventDefault();
        const { history } = this.props;
        const newUser= {
            email: this.state.email,
            password: this.state.password,
            name: this.state.name,
            username: this.state.user
            
        };

        API.saveUser(newUser);
        this.setState({"loggedIn": true});
        
        history.push("/dashboard");


    };

    render() {
        return(
            <div className="container">
                <div className="row text-center">
                    
                    <div className="col">
                    <div className="card text-center">
                       <div className="card-header">
                        <h2>Register</h2>
                       </div>
                       <div className="card-block">
                       <form >
                       <div className="form-group">
                        <label>Name</label>
                        <input type="text" onChange={this.handleInputChange} className="form-control" placeholder="Name" name="name"></input>
                       </div>
  <div className="form-group">
    <label>Username</label>
    <input type="text" className="form-control" onChange={this.handleInputChange} placeholder="Username" name="user"></input>
  </div>
  <div className="form-group">
    <label>Email</label>
    <input type="email" className="form-control" onChange={this.handleInputChange} placeholder="Email" name="email"></input>
  </div>
  <div className="form-group">
    <label>Password</label>
    <input type="password" className="form-control" onChange={this.handleInputChange} placeholder="Password" name="password"></input>
  </div>
  <div className="form-group">
    <label>Confirm Password</label>
    <input type="password" className="form-control" onChange={this.handleInputChange} placeholder="Password" name="password2"></input>
  </div>
                        <button onClick={this.handleUserRegister} className="btn btn-default">Register</button>
                      
                        </form>
                       </div>
                       
                    </div>
                    <a href="/login"><button className="btn btn-info">Already a member?</button></a>
                   </div>

                </div>
            </div>
        );
    }

}

export default Signup;