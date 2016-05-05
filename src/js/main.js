// This file is in charge of starting the application
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router'
import Initialize from './UI/Initialize/initialize.jsx'

const routes = (
  <Route>
    <Route path='/' component={Initialize} />
    <Route path='/category/:category(/:timeout)' component={Initialize} />
  </Route>
)

ReactDOM.render(<Router>{routes}</Router>, document.getElementById('wrapper'));
