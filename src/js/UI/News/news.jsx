import React from 'react';
import SingleNews from './singleNews.jsx';

export default class News extends React.Component {
   mountNewsStructure() {
    var hotNews = [];
    var moreNews = [];

     this.props.news.map((news, index) => {
        if (index <= 2) {
            hotNews.push(
              <SingleNews key={index}
                position={index}
                category={news.category}
                title={news.title}
                text={news.text}
                images={news.images}
                authorName={news.author.name}
                authorImage={news.author.images}
                />
            );
        } else {
          moreNews.push(<SingleNews key={index}
            position={index}
            category={news.category}
            title={news.title}
            text={news.text}
            images={news.images}
            authorName={news.author.name}
            authorImage={news.author.images}
            />
          );
        }
      });

      return <div>
        <div className='hotnews hotnews-primary'>
          {hotNews.map((element) => {
            return element;
          })}
        </div>

        <div className='more-news'>
          {moreNews.map((element) => {
            return element;
          })}
        </div>
      </div>
  }

  render() {
    return <div className='news container'>
      {this.mountNewsStructure()}
    </div>
  }
}
