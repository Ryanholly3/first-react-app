import React, { Component } from 'react';
import CartItem from './CartItem';

class CartItems extends React.Component {

  renderItems() {
    return this.props.items.map((item, i) => <CartItem key={ i } itemName={ item.product.name } itemPrice={ item.product.priceInCents } itemQuantity={ item.quantity } />)
  }

  render() {
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
        </div>
      </div>
    )
  }
}

export default CartItems
