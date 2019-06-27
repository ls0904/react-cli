import React, { Component } from 'react'
import {Route, NavLink, Switch, Redirect} from 'react-router-dom'

import Home from '@/views/index/home'
import About from '@/views/index/about'
import List from '@/views/index/list'

export default class Index extends Component {
  render() {
    // let {match:{path} } = this.props;
    return (
      <div>
        <NavLink to={`/home`}>首页</NavLink> |
        <NavLink to={`/list`}>列表页</NavLink> |
        <NavLink to={`/about`} >关于页</NavLink> |
        <hr />
        {/* <Switch>
          <Route path={`/home`} component={ Home } />
          <Route path={`/about`} component={ About } />
          <Route path={`/list`} component={ List } />
          <Route component={ Home }></Route>
        </Switch> */}
        <Switch>
          <Route path={`/home`} component={ Home } />
          <Route path={`/about`} component={ About } />
          <Route path={`/list`} component={ List } />
          <Redirect to="/home"></Redirect>
        </Switch>
      </div>
    )
  }
}
