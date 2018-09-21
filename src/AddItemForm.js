import React, { Component } from 'react';

class AddItemForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      product: {
        id: null,
        name: '',
        priceInCents: null
      },
      quantity: null,
    }
    this.onSubmit = this.onSubmit.bind(this);
  }

  changeOption = (e) => {
    var products = [
      { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
      { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
      { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
      { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
      { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
      { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
      { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
      { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
      { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 },
    ]

    for (var i = 0; i < products.length; i++){
      if(products[i].name === e.target.value) {
        var idNum = products[i].id;
        var price = products[i].priceInCents;
      }
    }
    this.setState({
      product: {
        id: idNum,
        name: e.target.value,
        priceInCents: price
      }
    })
  }

  changeQuant = (e) => {
    e.preventDefault();
    this.setState({ quantity: e.target.value });
  }


  onSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state);
  }

  render() {
    var products = [
      { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
      { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
      { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
      { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
      { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
      { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
      { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
      { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
      { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 },
    ]

    let optionItems = products.map(item => <option key={ item.name }>{ item.name }</option>);

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <form onSubmit={ this.onSubmit }>
              <h3>Quantity</h3>
              <input type="number" min="1" onChange={ this.changeQuant }/>
              <h3>Products</h3>
              <select name="items" onChange={ this.changeOption }>
                { optionItems }
              </select>
              <br/>
              <input type="submit" value="Submit"/>
            </form>
          </div>
        </div>
      </div>
    )
  }
}


export default AddItemForm;
