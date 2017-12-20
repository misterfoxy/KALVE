import React, { Component } from "react";
import { Redirect } from "react-router-dom"
import API from "../../utils/API"

class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
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

       
        const newUser= {
            username: this.state.user,
            password: this.state.password,
            email: this.state.email,
            name: this.state.name
        };

        console.log(this.props.history)
        API.saveUser(newUser);
        
    };

    render() {
        return(
            <div className="container">
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
     <input type="text" name="username" className="form-control" ></input>
   </div>
   <div className="form-group">
     <label>Password</label>
     <input type="password" name="password"  className="form-control" ></input>
   </div>

   <button type="submit" className="btn btn-default">Submit</button>
 </form>
   </div>
</div>
            <a href="/signup"><button className="btn btn-info">Not a member? Signup here</button></a>
</div>
</div>
</div>
        );
    }
}

export default Login;