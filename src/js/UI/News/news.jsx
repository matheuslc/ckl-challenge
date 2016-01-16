import React from 'react';
import SingleNews from './singleNews.jsx';

export default class News extends React.Component {

  render() {
    return <div className='news container'>
      {this.props.news.map((news, index) => {
        return <SingleNews key={index}
          position={index}
          category={news.category}
          title={news.title}
          text={news.text}
          authorName={news.author.name}
          authorImage={news.author.image.small}
          />
      })}
    </div>
  }
}
