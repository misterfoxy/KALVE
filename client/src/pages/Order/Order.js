import React, { Component } from "react";
import "./Order.css";

class Order extends React.Component {
    constructor(){
        super();
        this.state = {
            quantity: 0,
            price: 0.00,
            selectedOption: 'ccss'

        };
        
        
    };

    handleOptionChange(changeEvent) {
        console.log(changeEvent.target.value);
        this.setState({
          selectedOption: changeEvent.target.value
        });

        
    }

    handleChange(event){
        let value = event.currentTarget.value;
        this.setState({
            quantity: value
        });
        this.computePrice(value);
        
    };

    computePrice = quantity => {
        let price = 1.00;

        if(quantity <= 11){
            let unitPrice = 15;
            price = quantity * unitPrice;

            this.setState({
                price: price
            });

        }

        else if(quantity >=12 && quantity <=23){
            let unitPrice = 13.50;
            price = quantity * unitPrice;

            this.setState({
                price: price
            });
        }

        else if (quantity >=24 && quantity <= 47){
            let unitPrice = 12;
            price = quantity * unitPrice;

            this.setState({
                price: price
            });
        }

        else if (quantity >=48 && quantity <=121){
            let unitPrice = 10.50;
            price = quantity * unitPrice;

            this.setState({
                price: price
            });
        }
        else if (quantity >= 122){
            let unitPrice = 9;
            price = quantity * unitPrice;
            this.setState({
                price: price
            });
        }

    }


    
    render(){
        return(
            <div className="container-fluid order">
                <div className="row">
                    <div className="col">
                    <form>
                    <div className="radio">
                      <label>
                        <input type="radio" value="ccss" checked={this.state.selectedOption === 'ccss'} onChange={this.handleOptionChange.bind(this)} />
                        Comfort Colors Short Sleeve Tee
                      </label>
                    </div>
                    <div className="radio">
                      <label>
                        <input type="radio" value="ccls" checked={this.state.selectedOption === 'ccls'} onChange={this.handleOptionChange.bind(this)}/>
                        Comfort Colors Long Sleeve Tee
                      </label>
                    </div>
                    <div className="radio">
                      <label>
                        <input type="radio" value="hss" checked={this.state.selectedOption === 'hss'} onChange={this.handleOptionChange.bind(this)}/>
                       Hanes Classic Short Sleeve Tee
                      </label>
                    </div>
                    <div className="radio">
                      <label>
                        <input type="radio" value="hls" checked={this.state.selectedOption === 'hls'} onChange={this.handleOptionChange.bind(this)} />
                        Hanes Classic Long Sleeve Tee
                      </label>
                    </div>
                  </form>
                    </div>
                </div>
                <div className="row">  
                    <div className="col">
                        <button className="color" onClick="">Choose Colors</button>
                    </div>
                </div>
                <div className="form-group row">
                    
                    
                    <input onChange={this.handleChange.bind(this)} placeholder="How many do you want?"></input>
                    <span>Total Cost: ${this.state.price}</span>
                    
                </div>
            </div>
        );
    }

}

export default Order;