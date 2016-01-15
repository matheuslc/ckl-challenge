import React from 'react';
import Author from './author.jsx';

export default class News extends React.Component {
  render() {
    return <article class="news-content">
      <span>this.props.category</span>

      <header>
        <h1>{{this.props.title}}</h1>
      </header>

      <Author name={{this.props.name}} image={{this.props.img}}></Author>

      <div>
        <p>{{this.props.text}}</p>
      </div>
    </article>
  }
}
