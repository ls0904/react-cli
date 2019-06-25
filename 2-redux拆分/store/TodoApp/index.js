//   TOdo相关的 reducer文件

import { SETINPUTVAL, TODOADD, DELTODO } from '../actionTypes';


const initState = {
  inputVal:'',
  todoList: [],
}
export  default (state = initState, action) => {
  let newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case SETINPUTVAL:

      newState.inputVal = action.value;
      return newState;

    case TODOADD:

      newState.todoList.push(state.inputVal);
      return newState;

    case DELTODO:
      return newState

    default:
      return state;
  }
}
