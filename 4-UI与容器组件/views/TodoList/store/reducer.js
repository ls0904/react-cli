import {INIT_TODO_LIST, TODO_ADD, INPUT_VAL} from './actionTypes'


const initState = {
  inputVal: '',
  todoList: []
};

export default (state = initState, action) => {
  let newState = JSON.parse(JSON.stringify(state));
  if(action.type === INIT_TODO_LIST) {
    newState.todoList = action.list;
  }

  if(action.type === TODO_ADD) {
    let lastTodo = newState.todoList[newState.todoList.length - 1];
    let id = lastTodo ? lastTodo.id + 1 : 1;

    newState.todoList.push({
      id: id,
      name: newState.inputVal
    })
  }
  if(action.type === INPUT_VAL){
    newState.inputVal = action.value;
  }
  return newState;
}
