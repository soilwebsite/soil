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

const images = [
  { name: 'Coat', url: 'https://mb-brandstores-2-863894.c.cdn77.org/images/articles/dd8feadaa75d7337a7358e4228d877fd_12.png' },
  { name: 'Dress', url: 'https://s-media-cache-ak0.pinimg.com/236x/19/cd/66/19cd665dc090729fce969342d3311310.jpg' },
  { name: 'Handbag', url: 'https://ak1.ostkcdn.com/images/products/11528497/P18476363.jpg' },
  { name: 'Coat', url: 'https://mb-brandstores-2-863894.c.cdn77.org/images/articles/dd8feadaa75d7337a7358e4228d877fd_12.png' },
  { name: 'Dress', url: 'https://s-media-cache-ak0.pinimg.com/236x/19/cd/66/19cd665dc090729fce969342d3311310.jpg' },
  { name: 'Handbag', url: 'https://ak1.ostkcdn.com/images/products/11528497/P18476363.jpg' },
  { name: 'Coat', url: 'https://mb-brandstores-2-863894.c.cdn77.org/images/articles/dd8feadaa75d7337a7358e4228d877fd_12.png' },
  { name: 'Dress', url: 'https://s-media-cache-ak0.pinimg.com/236x/19/cd/66/19cd665dc090729fce969342d3311310.jpg' },
  { name: 'Handbag', url: 'https://ak1.ostkcdn.com/images/products/11528497/P18476363.jpg' },
  { name: 'Coat', url: 'https://mb-brandstores-2-863894.c.cdn77.org/images/articles/dd8feadaa75d7337a7358e4228d877fd_12.png' },
  { name: 'Dress', url: 'https://s-media-cache-ak0.pinimg.com/236x/19/cd/66/19cd665dc090729fce969342d3311310.jpg' },
  { name: 'Handbag', url: 'https://ak1.ostkcdn.com/images/products/11528497/P18476363.jpg' },
  { name: 'Coat', url: 'https://mb-brandstores-2-863894.c.cdn77.org/images/articles/dd8feadaa75d7337a7358e4228d877fd_12.png' },
  { name: 'Dress', url: 'https://s-media-cache-ak0.pinimg.com/236x/19/cd/66/19cd665dc090729fce969342d3311310.jpg' },
  { name: 'Handbag', url: 'https://ak1.ostkcdn.com/images/products/11528497/P18476363.jpg' },
  { name: 'Coat', url: 'https://mb-brandstores-2-863894.c.cdn77.org/images/articles/dd8feadaa75d7337a7358e4228d877fd_12.png' },
  { name: 'Dress', url: 'https://s-media-cache-ak0.pinimg.com/236x/19/cd/66/19cd665dc090729fce969342d3311310.jpg' },
  { name: 'Handbag', url: 'https://ak1.ostkcdn.com/images/products/11528497/P18476363.jpg' },
  { name: 'Coat', url: 'https://mb-brandstores-2-863894.c.cdn77.org/images/articles/dd8feadaa75d7337a7358e4228d877fd_12.png' },
  { name: 'Dress', url: 'https://s-media-cache-ak0.pinimg.com/236x/19/cd/66/19cd665dc090729fce969342d3311310.jpg' },
  { name: 'Handbag', url: 'https://ak1.ostkcdn.com/images/products/11528497/P18476363.jpg' },
  { name: 'Coat', url: 'https://mb-brandstores-2-863894.c.cdn77.org/images/articles/dd8feadaa75d7337a7358e4228d877fd_12.png' },
  { name: 'Dress', url: 'https://s-media-cache-ak0.pinimg.com/236x/19/cd/66/19cd665dc090729fce969342d3311310.jpg' },
  { name: 'Handbag', url: 'https://ak1.ostkcdn.com/images/products/11528497/P18476363.jpg' },
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
