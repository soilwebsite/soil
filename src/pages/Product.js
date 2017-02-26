import React, { Component } from 'react';

class Product extends Component {
  render() {
    console.log(this.props);
    const {pathname} = this.props.location;

    const itemName = pathname.split('/clothing/');
    return (
      <div className="Product">
        {itemName}
      </div>
    );
  }
}

export default Product;
