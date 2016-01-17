import React from 'react';
import Menu from '../Menu/menu.jsx';
import classNames from 'classnames';
import { Image } from 'react-picture';

export default class MainHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    }
  }

  toggleMenu(e) {
    if (this.state.open) {
      this.setState({open: false});
    } else {
      this.setState({open: true});
    }
  }

  getImagesSrc(imageName) {
    let image = require('../../../img/'+ imageName +'.png');
    let retina = require('../../../img/'+ imageName +'@2x.png');

    return `${image} 1x, ${retina} 2x`;
  }

  render() {
    return <header className='main-header'>
      <div className='container'>
        <span className='menu-icon' onClick={this.toggleMenu.bind(this)}>
            <Image alt='Click to open the menu'
              srcSet={this.getImagesSrc('menu')} />
        </span>

        <h1 className='logo'>
          <Image alt='Cheescake news'
            srcSet={this.getImagesSrc('logo')} />
        </h1>

        <Menu items={this.props.items} isOpen={this.state.open} />

      </div>
    </header>
  }
}
