import React, { Component } from 'react'
import {TodoListWrap, TodoIputWrap} from './style'
import { List, Input ,Button } from 'antd'

export default class TodoListUI extends Component {
  render() {
    let { todoList, onClick, inputVal, onInputChange } = this.props;
    return (
      <TodoListWrap>
        <TodoIputWrap>
          <Input value={inputVal} onChange= {onInputChange}/>
          <Button type="primary" onClick= { onClick }>ADD</Button>
        </TodoIputWrap>
      <List dataSource={ todoList } renderItem={item => {
        return <List.Item key={item.id}>{ item.name }</List.Item>
      }}/>
    </TodoListWrap>
    )
  }

  componentDidMount () {
    this.props.getInitTodoList()
  }
}

