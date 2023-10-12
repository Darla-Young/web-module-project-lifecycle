import React from 'react'

// - takes in `todo` data and displays it to the screen

export default class Todo extends React.Component {
  render() {
    if(this.props.completed && this.props.hidden) {return (<div></div>)}
    else {
      return(
        <li onClick={this.props.onClick} >
          <input type='checkbox' id={this.props.id} checked={this.props.completed} onChange={this.props.onChange} />
          {this.props.name}
        </li>
      )
    }
  }
}