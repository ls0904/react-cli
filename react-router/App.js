import React, { Component } from 'react'

// 1、引入路由
import {HashRouter as Router, Route, Switch} from 'react-router-dom'

// 2、引入路由组件

import Index from '@/views';
import Detail from '@/views/details'

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/detail/:id' component={ Detail } />
          <Route path='/' component={ Index }/>
        </Switch>
      </Router>
    )
  }
}
