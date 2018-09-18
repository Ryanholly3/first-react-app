import React, { Component } from 'react';
import Header from './Header';
import CartItems from './CartItems';
import Footer from './Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <CartItems />
        <Footer />
      </div>
    );
  }
}

export default App;
