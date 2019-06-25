import {SETINPUTVAL, TODOADD, DELTODO} from './actionTypes';

const initState = {
  inputVal:'',
  todoList: []
}

export default (state = initState, action) => {
  switch (action.type) {
    case SETINPUTVAL:
      return Object.assign({}, state, {
        inputVal: action.value
      });
      case TODOADD:
        return Object.assign({}, state, {
          todoList: [...state.todoList,state.inputVal]
        });
      case DELTODO:
        var newState = action.newState
        return Object.assign({}, state, {newState})
      default:
          return state;
  }

}
