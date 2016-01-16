import React from 'react';
import Menu from '../Menu/menu.jsx';

export default class MainHeader extends React.Component {
  render() {
    return <header className='main-header'>
      <div className='container'>
        <h1 className='logo'>
          <img src='img/cheesecake-news.png' alt='Cheesecake News'/>
        </h1>

        <Menu items={this.props.items} />
      </div>
    </header>
  }
}
