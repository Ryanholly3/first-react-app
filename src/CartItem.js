import React from 'react'

class CartItem extends React.Component {

  render() {
    return (
      <div className="list-group-item">
        <div className="row">
          <div className="col-md-8">{ this.props.itemName }</div>
          <div className="col-md-2">{ this.props.itemPrice}</div>
          <div className="col-md-2">{ this.props.itemQuantity }</div>
        </div>
      </div>
    )
  }
}

export default CartItem
