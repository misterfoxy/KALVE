import React, { Component } from "react";
import ColorPallette from "../../components/ColorPallette";
import "./Order.css";
import BrandCard from "../../components/BrandCard";

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

    computePrice(quantity) {
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

                <div className="row text-center brand-row">
                    
                        <BrandCard onClick={() => {console.log('bits')}} brand="Comfort Colors Short Sleeve" />
                        <BrandCard brand="Comfort Colors Long Sleeve" />
                        <BrandCard brand="Hanes Long Sleeve" />
                        <BrandCard brand="Hanes Short Sleeve" />
                   
                </div>
                <div className="row center-block colors">  
                    <div className="col btn-group">
                        <ColorPallette />
                       
                    </div>
                </div>
                <div className="form-group row quantity-input">
                    
                    
                    <input onChange={this.handleChange.bind(this)} placeholder="How many do you want?"></input>
                   
                </div>

                <div className="row text-center">
                <div className="col">
                    <span className="totalPrice">Total: ${this.state.price}</span>
                    </div>
            </div>

            <label htmlFor="design_reference">(Optional) Attach a Design for our team</label>
            <br></br>
            <input type="file" name="design_reference"></input>
            </div>
        );
    }

}

export default Order;