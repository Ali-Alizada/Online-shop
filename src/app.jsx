import React, { Component } from "react";

import Navbar from "./components/navbar";
import Product from "./components/product";
import ShoppingCard from "./components/shopping-card";

class App extends Component {
    state = { 
        items:[]
    }


    addItem = (amount, name, price) => {
        const priceInCents = Math.round(price * 100);

        this.setState(({ items }) => {
            const existingItem = items.find(item => item.name === name);

            if (existingItem) {
                return {
                    items: items.map(item =>
                        item.name === name
                            ? {
                                  ...item,
                                  amount: item.amount + amount,
                                  totalPriceCents: item.totalPriceCents + priceInCents * amount
                              }
                            : item
                    )
                };
            }

            return {
                items: [...items, { amount, name, totalPriceCents: priceInCents * amount }]
            };
        });
    };
     
    render() { 
        return (
            <React.Fragment>
                <Navbar/>

                <div className="main-container">
                <div className="product-container">
                    <Product onAdd={() => this.addItem(1, 'Kopfhörer Bluetooth', 49.99)} image="headphon.jpg" description="Eine Moderne und die kosten günstige, Kopfhörer mit Blutooth" title="kopfhörer bluetooth"/>
                    <Product onAdd={() => this.addItem(1, 'Kopfhörer Kabel', 39.99)} image="firmbee-mobile.jpg" description="Eine Moderne und die kosten günstige, ohne Blutooth aber mit sanfte und fexibele kabel" title="kopfhörer"/>
                    <Product onAdd={() => this.addItem(1, 'Tastatur', 35.99)} image="keyboard.jpg" description="Eine Moderne und die kosten günstige, Mechnicke und ergonomische Tastatur mit 7 LED Fatben" title="Tastatur"/>
                    <Product onAdd={() => this.addItem(1, 'Power Bank', 46.99)} image="powerbank.jpg" description="Eine Moderne und die kosten günstige, langslabige und schnell aufladbare Power Bank" title="Power Bank"/>
                </div>
                <ShoppingCard items={this.state.items}/>
                </div>

            </React.Fragment>
        );
    }
}
 
export default App;