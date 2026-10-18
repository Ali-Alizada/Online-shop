import React, { Component } from "react";


class product extends Component {
    state = {  } 
    render() { 
        return (
                <div className="card" style={{width: '18rem'}}>
                <img src={"/assets/imgs/" + this.props.image} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                    <p className="card-text">{this.props.description}</p>
                    <a href="Product" className="btn btn-primary">Hinzufügen</a>
                </div>
                </div> );
            }
        }
 
export default product;