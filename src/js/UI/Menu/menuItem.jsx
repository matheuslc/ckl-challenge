import React from 'react';

export default class MenuItem extends React.Component {
  render() {
    return <li className='main-menu-item'>
        <a href={this.props.itemTarget}>{this.props.itemName}</a>
      </li>
  }
}
