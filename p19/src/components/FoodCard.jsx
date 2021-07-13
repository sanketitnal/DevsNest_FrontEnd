import React from 'react';

const cardStyle = {
    width: "300px",
    border: "1px solid black",
    backgroundColor: "white",
    padding: "0px",
    display: "flex",
    flexDirection: "column",
    userSelect: "none",
    margin:"10px"
},
headingStyle = {
    fontSize: "1.5em",
    textAlign: "left",
    fontWeight: "bold",
    padding: "10px"
},
foodInfo = {
    padding: "10px",
    fontSize: "2em"
},
price = {
    float:"left",
    color: "green",
    padding: "10px"
},
symbol = {
    float: "right",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minWidth: "30px",
    padding: "10px"
};

export default class FoodCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {order: 0};
    }
    increment() {
        this.setState({order: this.state.order+1})
    }
    decrement() {
        if(this.state.order > 0)
            this.setState({order: this.state.order-1})        
    }
    render() {
        return (
            <div style={cardStyle}>
               <img src={`./images/${this.props.image}.jpg`} alt="food type"/>
               <div style={headingStyle}>{this.props.food}</div>
               <div style={foodInfo}>
                    <div style={price}>{'\u20B9'} {this.props.price}</div>
                    <div className="symbol" style={symbol} onClick={this.increment.bind(this)}> + </div>
                    <div style={symbol}> {this.state.order} </div>
                    <div className="symbol" style={symbol} onClick={this.decrement.bind(this)}> - </div>
               </div>
            </div>
        )
    }
}