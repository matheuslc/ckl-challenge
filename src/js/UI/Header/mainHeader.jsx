import React from 'react';
import Menu from '../Menu/menu.jsx';
import { Image } from 'react-picture';

export default class MainHeader extends React.Component {
  getImagesSrc(imageName) {
    let image = require('../../../img/'+ imageName +'.png');
    let retina = require('../../../img/'+ imageName +'@2x.png');

    return `${image} 1x, ${retina} 2x`;
  }

  render() {
    return <header className='main-header'>
      <div className='container'>
        <span className='menu-icon'>
          <h1 className='logo'>
            
          </h1>
        </span>

        <h1 className='logo'>
          <Image alt='Your picture description'
            srcSet={this.getImagesSrc('logo')} />
        </h1>

        <Menu items={this.props.items} />
      </div>
    </header>
  }
}
