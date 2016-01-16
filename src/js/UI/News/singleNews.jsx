import React from 'react';
import { Image } from 'react-picture';
import Author from './author.jsx';
import classNames from 'classnames';

export default class SingleNews extends React.Component {
  render() {
    let categoryClass = 'news-category ';
        categoryClass += 'category-' + this.props.category.toLowerCase();

    return <article className='news-content'>
      <span className={categoryClass}>{this.props.category}</span>

      <div className='news-img'>
        <Image alt='Your picture description' srcSet={require('url?mimetype=image/png!../../../img/news_01@2x.png')} extra={{className:'myImg'}}/>
      </div>

      <header className='news-header'>
        <h1 className='news-title news-title-primary'>{this.props.title}</h1>
      </header>

      <Author name={this.props.authorName} image={this.props.authorImg}></Author>

      <div className='news-text news-text-primary'>
        <p>{this.props.text}</p>
      </div>
    </article>
  }
}
