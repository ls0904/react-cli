import { takeEvery, put } from 'redux-saga/effects';
import { getInitTodoListAction } from './actionCreates'
import { FETCH_TODO_LIST } from './actionTypes'


function* fetchTodoList() {
  let response = yield fetch('http://localhost:3001/todoList');
  let res = yield response.json();
  yield put(getInitTodoListAction(res));
    // put(getInitTodoListAction(res));
}

const todoSaga = function *() {
  // yield console.log(123);

  yield takeEvery(FETCH_TODO_LIST, fetchTodoList);
}

export default todoSaga;
