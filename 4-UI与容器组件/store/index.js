import {createStore, combineReducers, applyMiddleware,compose}  from 'redux';
import todoReducer from '../views/TodoList/store/reducer';
// logger thunk 就是一个中间件
// import logger from 'redux-logger';
// 1、引入createSagaMiddleware
import createSagaMiddleware from 'redux-saga';

//2、引入saga处理文件
import todoSaga from '@/views/TodoList/store/todoSaga';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//3、创建 saga 的 中间件
const sagaMiddleware = createSagaMiddleware();



export default createStore(
  combineReducers({
    todo: todoReducer
  }),
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(todoSaga);
