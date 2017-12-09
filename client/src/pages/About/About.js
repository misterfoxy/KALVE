import React, { Component } from "react";
import Footer from "../../components/Footer";
import "./About.css"
class About extends Component {


  render() {
    return (
      <div className="container-fluid">
        <div className="row text-center">
          <div className="col inspr">
            <h1>INSPIRE TO CREATE</h1>
            <hr></hr>
            <p>
              Passion is a byproduct of Creativity. At Kalve, we encourage boundary-stretching,
              button-pushing, limit-testing, and <strong>everything bold</strong>.
            </p>
            <p>
            With Kalve, we sought to make custom apparel as easy as everything else on the Internet. No lengthy forms, 
            no long email chains, no sudden changes of inventory or price. Our team worked tirelessly to combine our two passions: software and printing,
            and our creation is your new favorite platform for custom apparel.
            </p>
          </div>
          <div className="col crt">
            <h1>CREATE TO INSPIRE</h1>
            <hr></hr>
            <p>
            Your favorite shirt is a statement of who you are. It lets the world know what you think, how you act, where you're from, 
            or where you're going. They're mementos of the past, and inspirations for the future. 
          </p>
          <p>
          At Kalve, we're motivated by this creative passion. No matter what you want to create, we'll help you do it. Whether you're playing
          beer league, or starting a revolution, we've got your back.
          </p>
          </div>
        </div>

        <div className="row text-center">
          <div className="col-md-12">
           <a href="/login"> <button className="btn btn-success">SIGN IN</button></a>
          </div>
        </div>
        <Footer />
      </div>
      
      
      

    );
  }
}

export default About;
