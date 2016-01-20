require('../../../css/main.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import fetch from 'isomorphic-fetch'
import { polyfill } from 'es6-promise';
import { default as Router, Route } from 'react-router'
import Loader from '../Utils/loader.jsx';
import MainHeader from '../Header/mainHeader.jsx';
import News from '../News/news.jsx';

polyfill();

let menuItems = [
  {
    name: 'Politics',
    target: '#category/politics'
  }, {
    name: 'Business',
    target: '#category/business'
  }, {
    name: 'Tech',
    target: '#category/tech'
  }, {
    name: 'Science',
    target: '#category/science'
  }, {
    name: 'Sports',
    target: '#category/sports'
  }
]

export default class Initialize extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: false,
      category: ''
    }
  }

  getData(category = '', timeout = 3000) {
    let url = __BASEURL__ + '/news';

    if (category) {
        url = `${url}/${category}?timeout=${timeout}`;
    }

    fetch(url)
      .then(function(response) {
          if (response.status >= 400) {
            throw new Error("Bad response from server");
          }

          return response.json();
      })
      .then(function(news) {
        this.setState({
          data: news
        });
      }.bind(this));
  }

  componentWillReceiveProps(e) {
    this.setState({
      data: null
    });

    this.getData(e.params.category, e.params.timeout);
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    if (this.state.data && this.state.data.length) {
      let data = this.state.data;

      return <div>
          <MainHeader items={menuItems} />
          <News news={data} />
        </div>
    }

    return <div>
        <MainHeader items={menuItems} />
        <Loader/>
      </div>
  }
}
