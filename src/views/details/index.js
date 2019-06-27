import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Hello extends Component {
  render() {
    return <p onClick={ this.goHome }>Hello</p>
  }

  goHome = () => {
    this.props.history.push('/');
  }
}
const Hello2 = withRouter(Hello);

export default class Detail extends Component {
  render() {
    let { match:{ params:{ id } }} = this.props;
    return (

      <div>
        详情页面  ----{ id }
        <Hello2 />
      </div>
    )
  }
}
