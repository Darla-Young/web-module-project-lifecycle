import React from 'react'

// - takes in `todo` data and displays it to the screen

export default class Todo extends React.Component {

  render() {
      return(
        <div onClick={this.props.onClick} >
          <input type='checkbox' id={this.props.todo.id} checked={this.props.todo.completed} onChange={this.props.onChange} />
          {this.props.todo.name}
        </div>
      )
  }
}