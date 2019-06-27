import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom'


const RouteAuth = ({ component: Component, user, url, ...rest }) => {
  return (
  <Route
    { ...rest }
    render={(routerProps) => {
      console.log(routerProps)
    if (user.userInfo) {
      //有，有登录，就渲染原始组件
      return <Component {...routerProps}/>;
    } else {
      //没有登录， 就重定向到login页面
      return <Redirect
      to={{
        pathname: '/login',
        state: {
          redirect: routerProps.match.url
        }
      }} />
    }
  }}/>
  )
};


const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps, null)(RouteAuth);
