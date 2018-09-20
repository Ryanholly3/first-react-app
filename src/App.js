import React, { Component } from 'react';
import Header from './Header';
import CartItems from './CartItems';
import AddItemForm from './AddItemForm';
import Footer from './Footer';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cartItems: [
        { product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
        { product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
        { product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 }
      ],
    }
  }

  addItem = (item) => {
    this.setState({
      cartItems: this.state.cartItems.push(item)
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <CartItems items={ this.state.cartItems }/>
        <AddItemForm addItem={ this.addItem }/>
        <Footer />
      </div>
    );
  }
}

export default App;
