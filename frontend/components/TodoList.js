import React from 'react'
import axios from 'axios'
import Todo from './Todo'

// - receives todos array
// - iterates over todos array 
//   - generates a new `<Todo />` for each element in the array

export default class TodoList extends React.Component {
  render() {
    return (
      <div>
        {axios.get('http://localhost:9000/api/todos')
        .then(res => {
          res.map(i => {
            <Todo key={i.id} id={i.id} name={i.name} completed={i.completed} hidden={this.props.state.hidden} onClick={this.props.onClick} onChange={this.props.onChange} />
          })
        })}
      </div>
    )
  }
}
