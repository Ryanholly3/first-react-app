import React, { Component } from 'react';
import CartItem from './CartItem';

class CartItems extends React.Component {

  renderItems() {
    return this.props.items.map((item, i) => <CartItem key={ i } itemName={ item.product.name } itemPrice={ item.product.priceInCents } itemQuantity={ item.quantity }/>);
  }

  render() {
    let price = 0;

    for(var i = 0; i < this.props.items.length; i++){
      let numberItems = this.props.items[i].quantity;
      price += numberItems * this.props.items[i].product.priceInCents;
    }
    price /= 100;
    price = price.toFixed(2);

    return (
      <div className="container">
        <h1>Cart Items</h1>
        <div className="list-group">
          <div className="list-group-item">
            <div className="row">
              <div className="col-md-8">Product</div>
              <div className="col-md-2">Price</div>
              <div className="col-md-2">Quantity</div>
            </div>
          </div>
          { this.renderItems() }
          <div className="totals">{ `Total Price: $${ price }`} </div>
        </div>
      </div>
    )
  }
}

export default CartItems
