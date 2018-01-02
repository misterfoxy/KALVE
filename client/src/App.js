import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom";
import About from "./pages/About"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import Order from "./pages/Order"
import Dashboard from "./pages/Dashboard"
import Nav from "./components/Nav";


class App extends React.Component {
 constructor(props){
   super(props);
  
 }
  render(){
    return(
      <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/order" component={Order} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/order" component={Order} />
        </Switch>
      </div>
    </Router>  
    );
  }

}  

export default App;
