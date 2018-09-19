import React, { Component } from 'react';

const CartItem = () => {
  var cartItemList =
  [
    { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
    { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
    { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
  ]
  //list component
  const Items = items => {
    let itemList = cartItemList.map( item => <Item key={ item.id } itemName={ item.product.name } itemPrice={ item.product.priceInCents } itemQuantity={ item.quantity } />);
    return itemList
  }

  //list item component
  const Item = item => {
    return (
      <div className="list-group-item">
        <div className="row">
          <div className="col-md-8">{ item.itemName }</div>
          <div className="col-md-2">{ item.itemPrice }</div>
          <div className="col-md-2">{ item.itemQuantity }</div>
        </div>
      </div>
    )
  }

  return (
    <Items />
  )
}

export default CartItem
