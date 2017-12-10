import React, { Component } from "react";
import "./Order.css";

class Order extends React.Component {
    constructor(){
        super();
        this.state = {
            quantity: 0,
            price: 0.00

        };
        
        
    };

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
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                    <form>
                    <div className="radio">
                      <label>
                        <input type="radio" value="option1" checked={true} />
                        Option 1
                      </label>
                    </div>
                    <div className="radio">
                      <label>
                        <input type="radio" value="option2" />
                        Option 2
                      </label>
                    </div>
                    <div className="radio">
                      <label>
                        <input type="radio" value="option3" />
                        Option 3
                      </label>
                    </div>
                  </form>
                    </div>
                </div>
                <div className="form-group row">
                    <input onChange={this.handleChange.bind(this)} placeholder="Quantity"></input>
                    <span>${this.state.price}</span>
                </div>
            </div>
        );
    }

}

export default Order;