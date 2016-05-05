import React from 'react';
import { Image } from 'react-picture';

export default class Author extends React.Component {
  getImage() {
    if (this.props.images.image || this.props.images.retina) {
      let image = require('../../../img/' + this.props.images.image);
      let retina = require('../../../img/'+ this.props.images.retina);

      let path = `${image} 1x, ${retina} 2x`;

      return <Image alt={image} srcSet={path} />
    }
  }

  render() {
    return <div className='author' rel='author'>
        {this.getImage()}
      <span className='author-name author-name-primary'>by {this.props.name}</span>
    </div>
  }
}
