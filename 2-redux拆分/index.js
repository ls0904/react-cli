import React from './node_modules/reacte_modules/react';
import ReactDOM from './node_modules/react-domdules/react-dom';
import TodoApp from './components/TodoApp'
import CarApp from './components/CarApp'

ReactDOM.render(
  <div>
    <TodoApp />
    <hr/>
    <CarApp />
  </div>,
  document.getElementById('root')
)




