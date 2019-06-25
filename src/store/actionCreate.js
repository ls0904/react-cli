import {SETINPUTVAL, TODOADD, DELTODO, ADDCAR, JIANCAR} from './actionTypes';
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

export const delTodo = () => {
  return {
    type: DELTODO
  }
}

export const addCar = (product) => {
  return {
    type: ADDCAR,
    product
  }
}
export const jianCar = (product) => {
  return {
    type: JIANCAR,
    product
  }
}

