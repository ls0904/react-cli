import { connect }  from 'react-redux'
import TodoListUi from "./ui";
import { getTodo, getinputVal, getFetchTodoListAction } from './store/actionCreates'

/**
 *
 * @param {Obejct} state
 */
const mapStateToProps = ({ todo }) => {
  // console.log(todo);
  return {
    todoList: todo.todoList,
    inputVal: todo.inputVal
  }
}
/**
 *
 * @param {Function} dispatch
 */
const mapDispatchToProps = (dispatch) => {
  return {
    onClick () {
      dispatch(getTodo())
    },

    onInputChange (event) {
      let value = event.target.value;
      // console.log(value);
      dispatch(getinputVal(value))
    },

    getInitTodoList() {
      dispatch(getFetchTodoListAction())
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoListUi);
