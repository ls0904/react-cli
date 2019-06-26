import { INIT_TODO_LIST, FETCH_TODO_LIST } from './actionTypes';
/**
 *获取初始化数据
 * @param {Array} list
 */
export const getInitTodoListAction = (list) => ({
    type:INIT_TODO_LIST,
    list
})

export const getFetchTodoListAction = () => ({
  type: FETCH_TODO_LIST
});

// export const fetchInitTodoListAciton = () => {
//   return (dispatch, getState) => {
//     fetch('http://localhost:3001/todoList')
//     .then(response => response.json())
//     .then(res => {
//       // store.dispatch(getInitTodoListAction(res));
//       dispatch(getInitTodoListAction(res))
//     });
//   }
// }

