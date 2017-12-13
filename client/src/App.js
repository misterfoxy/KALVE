import React from "react";
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom";
import About from "./pages/About"
import Login from "./pages/Login"
import Order from "./pages/Order"
import Nav from "./components/Nav";


const App = () =>
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/order" component={Order} />
      </Switch>
    </div>
  </Router>;

export default App;
