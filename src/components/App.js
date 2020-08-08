import React, { Component } from 'react';

import Header from './Header'
import Main from './Main'
import RelatedProduct from './RelatedProduct';
import Footer from './Footer';



class App extends Component {

    

    getProduct = () => {
        
    }

    render() {
        return (
            <div>
            <div className = "ui container">
                <Header/>
                <Main/>
                <hr/>
                <RelatedProduct/>
                
            </div>
            <Footer/>
            </div>

        );
    }
}

export default App;
