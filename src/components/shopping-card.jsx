import React, { Component } from 'react';

const formatPrice = new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR'
});

class ShoppingCard extends Component {
    state = { } 


    render() { 
        return ( <div className="shopping-card">
                    <h2>Warenkorb</h2>
                    {this.props.items.map(item => <div key={item.name}> { item.amount }x { item.name } { formatPrice.format(item.totalPriceCents / 100) }</div>)}
                </div>
        );
    }
}
  
export default ShoppingCard;