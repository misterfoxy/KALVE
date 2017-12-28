import React, { Component } from "react";
import ColorPallette from "../../components/ColorPallette";
import "./Order.css";


class Order extends React.Component {
    constructor(){
        super();
        this.state = {
            quantity: 0,
            price: 0.00,
            perUnitPrice: 0.0,
            selectedOption: 'ccss'
            
        };
        
        this.handleOrderRequest = this.handleOrderRequest.bind(this);
        
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

    handleOrderRequest(e){
        e.preventDefault();

        const newOrder = {
            brand: this.state.selectedOption,
            quantity: this.state.quantity,
            price: this.state.price,
            perUnitPrice: this.state.perUnitPrice
        }

        console.log(newOrder);
    }

    computePrice(quantity) {
        let price = 1.00;

        if(quantity <= 11){
            let unitPrice = 15;
            price = quantity * unitPrice;

            let perUnitPrice = price / quantity;
            this.setState({
                price: price,
                perUnitPrice: perUnitPrice
            });

        }

        else if(quantity >=12 && quantity <=23){
            let unitPrice = 13.50;
            price = quantity * unitPrice;

            let perUnitPrice = price / quantity;
            this.setState({
                price: price,
                perUnitPrice: perUnitPrice
            });
        }

        else if (quantity >=24 && quantity <= 47){
            let unitPrice = 12;
            price = quantity * unitPrice;

            let perUnitPrice = price / quantity;
            this.setState({
                price: price,
                perUnitPrice: perUnitPrice
            });
        }

        else if (quantity >=48 && quantity <=121){
            let unitPrice = 10.50;
            price = quantity * unitPrice;

            let perUnitPrice = price / quantity;
            this.setState({
                price: price,
                perUnitPrice: perUnitPrice
            });
        }
        else if (quantity >= 122){
            let unitPrice = 9;
            price = quantity * unitPrice;

            let perUnitPrice = price / quantity;
            this.setState({
                price: price,
                perUnitPrice: perUnitPrice
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
                    </form>
                </div>

                    <div className="col">
                    <form>
                    <div className="radio">
                      <label>
                        <input type="radio" value="ccls" checked={this.state.selectedOption === 'ccls'} onChange={this.handleOptionChange.bind(this)}/>
                        Comfort Colors Long Sleeve Tee
                      </label>
                    </div>
                    </form>
                    </div>
                    
                    <div className="col">
                    <form>
                    <div className="radio">
                      <label>
                        <input type="radio" value="hss" checked={this.state.selectedOption === 'hss'} onChange={this.handleOptionChange.bind(this)}/>
                       Hanes Classic Short Sleeve Tee
                      </label>
                    </div>
                    </form>
                    </div>

                    <div className="col">
                    <form>

                    <div className="radio">
                      <label htmlFor="radiohls">Hanes Classic Long Sleeve Tee</label>
                        <input id="radiohls" type="radio" value="hls" checked={this.state.selectedOption === 'hls'} onChange={this.handleOptionChange.bind(this)} />
                       
                    </div>
                  </form>
                  </div>
                    
                </div>

                <div className="row colors">  
                    <div className="col btn-group">
                        <ColorPallette />
                        
                    </div>
                </div>
                <div className="form-group text-center center-block row">
                    
                    <div className="col">
                        <input onChange={this.handleChange.bind(this)} placeholder="How many do you want?"></input>
                    </div>
                </div>

                
               <div className="form-group row">
                
                <input type="file" name="design_reference"></input>
                <div className="col-10">
                    <label for="additional">Describe your order to us</label>
                    <textarea class="form-control" rows="5" id="additional" />
                </div>
              </div>
              <div className="row totalPrices text-center">
                  <div className="col">
                    <span className="totalPrice">Total: ${this.state.price}</span>
                  </div>
                  <div className="col">
                    <span className="perUnitPrice">Each Shirt will be ${this.state.perUnitPrice}</span>
                  </div>
               </div>
              
              <div className="row text-center">
              
                <div className="col-12">
                    <button onClick={this.handleOrderRequest}id="submitProofRequest" className="btn btn-default">SUBMIT ORDER REQUEST</button>
                </div>
              </div>
            </div>
        );
    }

}

export default Order;