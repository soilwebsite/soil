import React, { Component } from 'react';
import BigProduct from '../../components/BigProduct';

class Clothing extends Component {

  items () {
    let products = this.props.products.data
    return products.map((item, i) => <BigProduct key={i} item={item} />)
  }

  render() {
    if (!this.props.tags || !this.props.tags.data) { return null }
    return (
      <div className="Clothing">
        {/* {this.items()} */}
        <div className='coming-soon'>
          <span>Coming Soon</span>
        </div>
      </div>
    )
  }
}

export default Clothing;
