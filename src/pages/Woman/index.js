import React, { Component } from 'react';
import Sidebar from '../../components/Sidebar';
import ImageGrid from '../../components/ImageGrid';

const sidebarItems = [
  { name: 'Tops' },
  { name: 'Bottoms' },
  { name: 'Dresses' },
  { name: 'Outerwear', onClick: null },
  { name: 'Accessories' }
]

let imageA = 'http://wpexplorer-demos.com/photopro/wp-content/uploads/sites/12/2012/10/Sasha.jpg';
let imageB = 'http://wpexplorer-demos.com/photopro/wp-content/uploads/sites/12/2012/10/Kaitlyn.jpg';
let imageC = 'http://wpexplorer-demos.com/photopro/wp-content/uploads/sites/12/2012/10/Gloria.jpg';
let imageD = 'https://s-media-cache-ak0.pinimg.com/736x/47/fc/c2/47fcc2871992396a5a085e155b92a537.jpg';
const images = [
  { name: 'Item1', url: imageA },
  { name: 'Item2', url: imageB },
  { name: 'Item3', url: imageC },
  { name: 'Item4', url: imageD }
]

class Woman extends Component {

  render() {
    return (
      <div className="Woman">
        <Sidebar items={sidebarItems}/>
        <ImageGrid images={images} />
      </div>
    );
  }
}

export default Woman;
