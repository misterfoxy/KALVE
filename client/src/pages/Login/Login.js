import React, { Component } from "react";
import RegisterBtn from "../../components/RegisterBtn";
import API from "../../utils/API"

class Login extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            registerName: '',
            registerUser: '',
            registerEmail: '',
            registerPass: ''
        }
    }

    handleLoginUserChange(e){
        this.setState({usrLogin: e.target.value});
    };

    handleLoginPassChange(e){
        this.setState({passLogin: e.target.value});
    }

    render() {
        return(
            <div className="container-fluid">
                <div className="row text-center">
                    <div className="col">
                     <div className="card text-center">
                        <div className="card-header">
                        <h2>Login</h2>
                        </div>
                        <div className="card-block">
                        <form action="/login" method="post">
                        <div className="form-group">
                          <label>Username</label>
                          <input type="text" name="username" onChange={this.handleLoginUserChange.bind(this)} className="form-control" value={this.state.usrLogin}></input>
                        </div>
                        <div className="form-group">
                          <label>Password</label>
                          <input type="password" name="password" onChange={this.handleLoginPassChange.bind(this)} className="form-control" value={this.state.passLogin}></input>
                        </div>
                    
                        <button type="submit" className="btn btn-default">Submit</button>
                      </form>
                        </div>
                     </div>

                    </div>
                    <div className="col">
                    <div className="card text-center">
                       <div className="card-header">
                        <h2>Register</h2>
                       </div>
                       <div className="card-block">
                       <form>
                       <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" placeholder="Name" name="name"></input>
                       </div>
  <div className="form-group">
    <label>Username</label>
    <input type="text" className="form-control" placeholder="Username" name="username"></input>
  </div>
  <div className="form-group">
    <label>Email</label>
    <input type="email" className="form-control" placeholder="Email" name="email"></input>
  </div>
  <div className="form-group">
    <label>Password</label>
    <input type="password" className="form-control" placeholder="Password" name="password"></input>
  </div>
  <div className="form-group">
    <label>Confirm Password</label>
    <input type="password" className="form-control" placeholder="Password" name="password2"></input>
  </div>
                        <RegisterBtn onClick={this.handleUserRegister}>Sign Up</RegisterBtn>
                        </form>
                       </div>
                    </div>

                   </div>

                </div>
            </div>
        );
    }

}

export default Login;