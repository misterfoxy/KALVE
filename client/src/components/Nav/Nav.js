import React from "react";
import "./Nav.css"

const Nav = () =>
<nav className="navbar navbar-expand-lg navbar-dark bg-default">
    <div className="navbar_brand">
      <a className="navbar-brand" href="/">KALVE</a>
    </div>
    <div className="navbar_content">
      <a className="navbar_link" href="/order">Place Order</a>
    </div>

  </nav>;

export default Nav;
