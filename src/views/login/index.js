import React, { Component } from 'react'
import { connect } from 'react-redux'

class Login extends Component {
  render() {
    return (
      <div>
        <h1>登录页面</h1>
        <button onClick= { this.props.handleLogin}>点我登录成功</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch,props) => {
  return {
    handleLogin: () => {
      dispatch ({type: 'LOGIN_IN'});
      console.log(props);
      let redirect = props.location.state ? props.location.state.redirect : '/';
      props.history.replace(redirect);
      // let redirect = props.location.search ? props.location.search.substr()
      // props.history.replace('/login')
    }
  }
};

export default connect(null,mapDispatchToProps)(Login);
