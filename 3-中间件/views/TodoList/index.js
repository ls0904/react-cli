import React, { Component } from './node_modules/react'
import { Input, Button, List} from './node_modules/antd';
import './style.js.js.js'
import { TodoListWrap, TodoIputWrap} from './style';
import store from './node_modules/@/store';
import { getFetchTodoListAction } from './store/actionCreates'


export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state ={
      inputVal: store.getState().todo.inputVal,
      todoList: store.getState().todo.todoList
    };
    store.subscribe (() => {
      this.setState({
        inputVal: store.getState().todo.inputVal,
        todoList: store.getState().todo.todoList
      })
    })
  }

  render() {
    let {todoList} = this.state;
    return (
      <TodoListWrap>
        <TodoIputWrap>
          <Input />
          <Button type="primary">ADD</Button>
        </TodoIputWrap>
        <List dataSource={ todoList } renderItem={item => {
          return <List.Item key={item.id}>{ item.name }</List.Item>
        }}/>
      </TodoListWrap>
    )
  }

  componentDidMount () {
    // let action = {
    //   type:'fetchTodoList'
    // }
    // store.dispatch(action);
    store.dispatch(getFetchTodoListAction());
      // store.dispatch(getInitTodoListAction);
      // fetch('http://localhost:3001/todoList')
      // .then(response => response.json())
      // .then(res => {
      //   // store.dispatch(getInitTodoListAction(res));
      //   store.dispatch(getInitTodoListAction(res));
      // });
  }
}

