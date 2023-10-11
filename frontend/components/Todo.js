import React from 'react'

// - takes in `todo` data and displays it to the screen

export default class Todo extends React.Component {
  render() {
    let todo = ""
    if(this.props.completed && this.props.hidden) {todo = ""}
    else {
      todo = 
        <li onClick={this.props.onClick} >
          <input type='checkbox' id={this.props.id} checked={this.props.completed} onChange={this.props.onChange} />
          {this.props.name}
        </li>
    }

    return (
      {todo}
    )
  }
}
