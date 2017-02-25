import React, { Component } from 'react';
import Sidebar from '../../components/Sidebar';
import ImageGrid from '../../components/ImageGrid';

const sidebarItems = [
  { name: 'Coat', event:null },
  { name: 'Dress' },
  { name: 'Top' },
  { name: 'bottom' },
  { name: 'shoe' }
]

let imageA = 'http://wpexplorer-demos.com/photopro/wp-content/uploads/sites/12/2012/10/Sasha.jpg';
let imageB = 'http://wpexplorer-demos.com/photopro/wp-content/uploads/sites/12/2012/10/Kaitlyn.jpg';
let imageC = 'http://wpexplorer-demos.com/photopro/wp-content/uploads/sites/12/2012/10/Gloria.jpg';
let imageD = 'https://s-media-cache-ak0.pinimg.com/736x/47/fc/c2/47fcc2871992396a5a085e155b92a537.jpg';
const images = [
  { name: 'Coat', url: imageA },
  { name: 'Dress', url: imageB },
  { name: 'Handbag', url: imageC },
  { name: 'Handbag', url: imageD }
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
