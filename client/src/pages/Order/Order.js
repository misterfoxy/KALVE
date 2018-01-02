import React, { Component } from "react";
import ColorPallette from "../../components/ColorPallette";
import "./Order.css";
import API from "../../utils/API"

class Order extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            user: null,
            quantity: 0,
            price: 0.00,
            perUnitPrice: 0.0,
            selectedOption: 'ccss',
            additionalInfo: "",
            jwt: localStorage.getItem('jwtToken'),
            color: 'red',
            localPickup: true,

            
        };
        
        this.handleOrderRequest = this.handleOrderRequest.bind(this);
        
    };

    componentWillMount() {
        const user = localStorage.getItem('user');
        this.setState({
            user: user
        })
    }
    handleOptionChange(changeEvent) {
        console.log(changeEvent.target.value);
        this.setState({
          selectedOption: changeEvent.target.value
        });

        
    }

    handleChange(event){
        const {name, value} = event.target;
       
        this.setState({
            [name]: value
        });
        this.computePrice(value);
        
    };

    handleOrderRequest(e){
        e.preventDefault();

        const newOrder = {
            user: this.state.user,
            brand: this.state.selectedOption,
            color: "red",
            quantity: this.state.quantity,
            description: this.state.additionalInfo,
            perUnitPrice: this.state.perUnitPrice,
            totalCost: this.state.price,
            localPickup: true
        }

        API.submitProof(newOrder);
        const { history } = this.props;
        history.push("/dashboard");

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

                <div className="row colors form-group">  
                    <div className="col">
                        <ColorPallette />
                        
                    </div>
                    <div className="col-4">
                    </div>
                    <div className="col">
                        <label htmlFor="quantity"> How many?
                        <input className="form-control" value={this.state.quantity} name="quantity" onChange={this.handleChange.bind(this)} placeholder="How many do you want?"></input>
                        </label>
                        </div>
                </div>
                

                
               <div className="form-control row">
                <label htmlFor="design_reference">Attach any pictures that would help the design team</label>
                <input className="form-control file-input" type="file" name="design_reference"></input>
                <div className="col-10">
                    <label htmlFor="additional">Describe your order to us</label>
                    <textarea value={this.state.additionalInfo} name="additionalInfo" onChange={this.handleChange.bind(this)} className="form-control" rows="5" id="additional" />
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
                    <button onClick={this.handleOrderRequest} id="submitProofRequest" className="btn btn-default">SUBMIT ORDER REQUEST</button>
                </div>
              </div>
            </div>
        );
    }

}

export default Order;