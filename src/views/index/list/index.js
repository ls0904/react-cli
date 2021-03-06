import React, { Component } from 'react'

import { Link } from 'react-router-dom'

export default class List extends Component {
  render() {
    let list = [{
      id: 1,
      name: 'apple'
    },{
      id: 2,
      name: 'tomatoes'
    },{
      id: 3,
      name: 'orange'
    }]
    return (
      <div>
        List

        <ul>
          {
            list.map(item => {
              return (
                <li key={ item.id }>
                <Link to={'/detail/' + item.id + '?name=' + item.name }>{ item.name }</Link>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}
