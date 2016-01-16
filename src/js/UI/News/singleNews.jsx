import React from 'react';
import Author from './author.jsx';

export default class SingleNews extends React.Component {
  render() {
    return <article className="news-content">
      <span>{this.props.category}</span>

      <header>
        <h1>{this.props.title}</h1>
      </header>

      <Author name={this.props.authorName} image={this.props.authorImg}></Author>

      <div>
        <p>{this.props.text}</p>
      </div>
    </article>
  }
}
