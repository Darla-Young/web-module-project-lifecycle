import React from 'react'
import Todo from './Todo'

// - receives todos array
// - iterates over todos array 
//   - generates a new `<Todo />` for each element in the array

export default class TodoList extends React.Component {
  render() {
    return (
      <div>
        {(this.props.state.list || []).map(i => {
          return (
            <Todo key={i.id} todo={i} state={this.props.state} onClick={this.props.onClick} onChange={this.props.onChange} />
          )
        })}
      </div>
    )
  }
}
