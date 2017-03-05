import React, { Component } from 'react';

class ProductDetail extends Component {
  render() {
    const {item} = this.props
    return (
      <div className="ProductDetail">
        <img src={item.imageUrl} alt={item.name} />
        {item.name}
      </div>
    );
  }
}

export default ProductDetail;
