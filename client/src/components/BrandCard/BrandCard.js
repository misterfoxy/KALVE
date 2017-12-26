import React, { Component } from "react";
import "./BrandCard.css";

class BrandCard extends React.Component {
    constructor(props) {
        super(props);
        this.addActiveClass = this.addActiveClass.bind(this);
        this.state= {
            active: false
        };
    }

    addActiveClass() {
        const currentState = this.state.active;
        this.setState({ active: !currentState })
    }

    render(){
      return (
      <div className="col-md-3 center-block">
        <div className="card">   
        {this.props.brand}
        <button className={this.state.active ? 'select-brand': null}   onClick={this.addActiveClass}>Select </button>
    </div>
    </div>
   );
  }
}


export default BrandCard;