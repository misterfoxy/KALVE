import React, { Component } from "react";

class Login extends React.Component {

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
                            <label>Username</label>
                            <input></input>
                            <label>Password</label>
                            <input></input>
                        </div>
                     </div>

                    </div>
                    <div className="col">
                    <div className="card text-center">
                       <div className="card-header">
                        <h2>Register</h2>
                       </div>
                       <div className="card-block">
                           <label>First Name</label>
                           <input></input>
                           <label>Last Name</label>
                           <input></input>
                           <label>Email</label>
                           <input></input>
                           <label>Username</label>
                           <input></input>
                           <label>Password</label>
                           <input></input>
                       </div>
                    </div>

                   </div>

                </div>
            </div>
        );
    }

}

export default Login;