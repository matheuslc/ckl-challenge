import React from 'react';
import MenuItem from './menuItem.jsx';

export default class Menu extends React.Component {
  getMenuClasses() {
    if (this.props.isOpen) {
      return 'main-nav ' + 'is-open';
    }

    return 'main-nav';
  }

  render() {
    let menuClasses = 'main-nav ' + this.props.isOpen;

    return <nav className={this.getMenuClasses()}>
      <ul className='main-menu'>
        {this.props.items.map((item, index) => {
          return <MenuItem key={index}
            position={index}
            itemName={item.name}
            itemTarget={item.target} />
        })}
      </ul>
    </nav>
  }
}
