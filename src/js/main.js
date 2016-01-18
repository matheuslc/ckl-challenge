// This file is in charge of starting the application
require('../css/main.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import fetch from 'isomorphic-fetch'
import { polyfill } from 'es6-promise';
import MainHeader from './UI/Header/mainHeader.jsx';
import News from './UI/News/news.jsx';
polyfill();

let menuItems = [
  {
    name: 'Politics',
    target: '#'
  }, {
    name: 'Business',
    target: '#'
  }, {
    name: 'Tech',
    target: '#'
  }, {
    name: 'Science',
    target: '#'
  }
]

fetch('//localhost:3001/news')
    .then(function(response) {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }

        return response.json();
    })
    .then(function(news) {
      ReactDOM.render(
        <div>
          <MainHeader items={menuItems} />
          <News news={news} />
        </div>, document.getElementById('wrapper')
      );
    });
