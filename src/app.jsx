import React, { Component } from "react";

import Navbar from "./components/navbar";
import Product from "./components/product";

class App extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <Navbar/>
                <div className="product-container">
                    <Product image="headphon.jpg" description="Eine Moderne und die kosten günstige, Kopfhörer mit Blutooth" title="kopfhörer bluetooth"/>
                    <Product image="firmbee-mobile.jpg" description="Eine Moderne und die kosten günstige, ohne Blutooth aber mit sanfte und fexibele kabel" title="kopfhörer"/>
                    <Product image="keyboard.jpg" description="Eine Moderne und die kosten günstige, Mechnicke und ergonomische Tastatur mit 7 LED Fatben" title="Tastatur"/>
                    <Product image="powerbank.jpg" description="Eine Moderne und die kosten günstige, langslabige und schnell aufladbare Power Bank" title="Power Bank"/>
                </div>
                
            </React.Fragment>
        );
    }
}
 
export default App;