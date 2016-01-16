import React from 'react';
import MenuItem from './menuItem.jsx';

export default class Menu extends React.Component {
  getInitialSate() {
      return {
        open: false
      }
  }

  render() {
    return <nav className='main-nav'>
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
