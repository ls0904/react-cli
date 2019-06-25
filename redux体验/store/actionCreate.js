import {SETINPUTVAL, TODOADD, DELTODO} from './actionTypes';
export const setInputVal = (value) => {
  return {
    type: SETINPUTVAL,
    value
  }
}

export const addTodo = () => {
  return {
    type: TODOADD
  }
}

export const delTodo = (newState) => {
  return {
    type: DELTODO,
    newState
  }
}
