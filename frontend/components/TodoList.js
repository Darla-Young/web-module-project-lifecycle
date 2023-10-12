import React from 'react'
import Todo from './Todo'

// - receives todos array
// - iterates over todos array 
//   - generates a new `<Todo />` for each element in the array

let todo = []

export default class TodoList extends React.Component {
  componentDidUpdate() {
    this.props.list.map(i => {
      return (
        todo.push({
          id: i.id,
          name: i.name,
          completed: i.completed
        })
        
        <Todo id={i.id} name={i.name} completed={i.completed} hidden={this.props.state.hidden} onClick={this.props.onClick} onChange={this.props.onChange} />
      )
    })
  }
  
  render() {
    console.log(todo)
    return (
      <div>
        {todo}
      </div>
    )
  }
}
