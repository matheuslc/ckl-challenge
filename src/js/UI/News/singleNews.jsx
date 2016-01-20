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

  getImage(newsId) {
    if (this.props.images.image) {
      let image = require('../../../img/' + this.props.images.image);
      let retina = require('../../../img/'+ this.props.images.retina);

      let path = `${image} 1x, ${retina} 2x`;

      return <div className='news-img'>
        <a href='#' className='read-more'>Read More</a>

        <Image alt={this.props.title}
          srcSet={path}/>
      </div>

    }
  }

  render() {
    let categoryClass = 'news-category ';
        categoryClass += 'category-' + this.props.category.toLowerCase();

    let news = 'news-content ';
        news += 'news-' + this.positionSlug(this.props.position);

    return <article className={news}>
      <span className={categoryClass}>{this.props.category}</span>

        {this.getImage(this.props.id)}

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
