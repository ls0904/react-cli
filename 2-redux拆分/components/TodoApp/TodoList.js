import React from './node_modules/reacte_modules/react';


class todoList extends React.Component {
  render () {
    return (
      <div>
        <ul>
            {
              this.props.todoList.map((item, index) => {
                return (
                  <li key={ index }>{ item } ----<button onClick={ this.props.onClick }>Del</button></li>
                )
              })
            }
        </ul>
      </div>
    )
  }
}



export default todoList;
