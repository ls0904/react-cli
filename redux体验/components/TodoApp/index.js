import React from 'react';
import TodoInput from './TodoInput'
import {setInputVal, addTodo, delTodo} from '../../store/actionCreate'
import TodoList from './TodoList'
import store  from '../../store'

class TodoApp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      inputVal: store.getState().inputVal,
      todoList: store.getState().todoList
    }
    // 订阅者，显示数据
    store.subscribe( () => {
      this.setState(() => ({
        inputVal:store.getState().inputVal,
        todoList: store.getState().todoList
      }))
    })
  }
  render () {
    return (
      <div>
          <TodoInput
            inputVal = {this.state.inputVal}
            onChange = { this.handleInput}
            onClick = { this.todoAdd }
          />
          <TodoList
          todoList = { this.state.todoList }
          onClick = { this.DelTodo}
          />
      </div>
    )
  }
  handleInput (event) {
    let value = event.target.value;
    store.dispatch(setInputVal(value));
    // let action = {
    //   type: 'SETINPUTVAL',
    //   value
    // }
    // store.dispatch(action);
  }
  todoAdd () {
    store.dispatch(addTodo());
  }
  DelTodo () {
    console.log("点我删除");
    let todoList = store.getState().todoList;
    var index = todoList.findIndex(item => item === todoList.item)
    let newState = todoList.splice(index,1)
    store.dispatch(delTodo(newState));
    // console.log(todoList);
    // let state = todoList.splice(,1)
    // console.log(state);
    // store.dispatch({
    //   type:'DELTODO'
    // })
  }
}


export default TodoApp;
