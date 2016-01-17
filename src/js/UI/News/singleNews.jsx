import React from 'react';
import { Image } from 'react-picture';
import Author from './author.jsx';
import classNames from 'classnames';

export default class SingleNews extends React.Component {
  positionSlug(position) {
      switch (position) {
        case 0:
          return 'first'
          break;
        case 1:
          return 'second';
          break;
        case 2:
          return 'third';
          break;
        default: 'first'
      }
  }

  getImage() {
    if (this.props.images.image) {
      var image = require('../../../img/' + this.props.images.image);
      let retina = require('../../../img/'+ this.props.images.retina);

      return <Image alt={this.props.images.alt}
        srcSet={require('../../../img/' + this.props.images.image)}/>
    }
  }

  render() {
    let categoryClass = 'news-category ';
        categoryClass += 'category-' + this.props.category.toLowerCase();

    let news = 'news-content ';
        news += 'news-' + this.positionSlug(this.props.position);

    return <article className={news}>
      <span className={categoryClass}>{this.props.category}</span>

      <div className='news-img'>
          {this.getImage()}
      </div>

      <header className='news-header'>
        <h1 className='news-title news-title-primary'>{this.props.title}</h1>
      </header>

      <Author name={this.props.authorName} images={this.props.authorImage}></Author>

      <div className='news-text news-text-primary'>
        <p>{this.props.text}</p>
      </div>
    </article>
  }
}
