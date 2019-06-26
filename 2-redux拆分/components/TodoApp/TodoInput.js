import React from './node_modules/reacte_modules/react';


class TodoInput extends React.Component {
  render () {
    return (
      <div>
        <input
        type="text"
        value = {this.props.inputVal}
        onChange = { this.props.onChange }
        />
        <button onClick = { this.props.onClick }>ADD</button>
      </div>
    )
  }
}



export default TodoInput;
