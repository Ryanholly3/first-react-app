import React from 'react'

class CartItem extends React.Component {

  render() {
    let itemPrice = this.props.itemPrice;
    itemPrice /= 100;
    itemPrice = itemPrice.toFixed(2);

    return (
      <div className="list-group-item">
        <div className="row">
          <div className="col-md-8">{ this.props.itemName }</div>
          <div className="col-md-2">{ `$${ itemPrice }`}</div>
          <div className="col-md-2">{ this.props.itemQuantity }</div>
        </div>
      </div>
    )
  }
}

export default CartItem
