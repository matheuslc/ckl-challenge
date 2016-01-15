import React from 'react';

export default class MenuItem extends React.Component {
  render() {
    return <li>
        <a href={this.props.itemTarget}>{this.props.itemName}</a>
      </li>
  }
}
