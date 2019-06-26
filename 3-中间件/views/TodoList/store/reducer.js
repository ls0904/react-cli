import {INIT_TODO_LIST} from './actionTypes'


const initState = {
  inputVal: '',
  todoList: [
    {"id":1, "name": 'apple'},
    {"id":2, "name": 'banana'},
    {"id":3, "name": 'orange'}
  ]
};

export default (state = initState, action) => {
  let newState = JSON.parse(JSON.stringify(state));
  if(action.type === INIT_TODO_LIST) {
    newState.todoList = action.list;
  }
  return newState;
}
