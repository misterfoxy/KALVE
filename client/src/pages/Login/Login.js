import React, { Component } from "react";
import { Redirect } from "react-router-dom"
import API from "../../utils/API"

class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: "",
            loggedIn: false
        };

        this.handleUserLogin = this.handleUserLogin.bind(this);
    
    }
    
    

    handleInputChange = e => {
        const { name, value} = e.target;
        this.setState({
            [name]: value
        });
    };

    handleUserLogin(e){
        e.preventDefault();
        const { history } = this.props;
        const newUser= {
            email: this.state.email,
            password: this.state.password
        };

      
        API.checkLogin(newUser);
        this.setState({ "loggedIn": true })
        history.push("/dashboard")
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
   <form>
   <div className="form-group">
     <label>Email</label>
     <input type="text" onChange={this.handleInputChange} name="email" className="form-control" ></input>
   </div>
   <div className="form-group">
     <label>Password</label>
     <input type="password" onChange={this.handleInputChange} name="password"  className="form-control" ></input>
   </div>

   <button onClick={this.handleUserLogin} className="btn btn-default">Submit</button>
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