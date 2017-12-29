import React, { Component } from "react";
import "./ColorPallette.css";

class ColorPallette extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'red'};
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      };
      
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('Your selected color is: ' + this.state.value);
        event.preventDefault();
      }
    
    render() {
        return (
            <div className="row text-center">
                <div className="col">
                <form className="form-control" onSubmit={this.handleSubmit}>
                <label>
                    Choose what color you want to print on
                    </label>
                    <br />
                    
                    <select className="form-control" value={this.state.value} onChange={this.handleChange}>
                        <option value="red">red</option>
                        <option value="orange">orange</option>
                        <option value="yellow">yellow</option>
                        <option value="green">green</option>
                    </select>
                  
                    <input className="form-control" type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        );
    }
}

export default ColorPallette;