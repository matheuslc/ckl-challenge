// This file is in charge of starting the application
require('../css/main.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import MainHeader from './UI/Header/mainHeader.jsx';
import News from './UI/News/news.jsx';

ReactDOM.render(
  <div>
    <MainHeader items={items} />
    <News news={news} />
  </div>, document.getElementById('wrapper')
);
