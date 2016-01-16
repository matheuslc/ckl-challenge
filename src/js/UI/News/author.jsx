import React from 'react';

export default class Author extends React.Component {
    render() {
      return <div className='author' rel='author'>
        <img src={this.props.image} alt={this.props.name} className='author-img'/>
        <span className='author-name author-name-primary'>by {this.props.name}</span>
      </div>
    }
}
