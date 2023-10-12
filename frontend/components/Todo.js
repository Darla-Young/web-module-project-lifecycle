import React from 'react'

// - takes in `todo` data and displays it to the screen

export default class Todo extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.completed = this.props.completed
  //   this.hidden = this.props.hidden
  //   this.id = this.props.id
  //   this.name = this.props.name
  //   this.onClick = this.props.onClick
  //   this.onChange = this.props.onChange
  // }

  render() {
    if(this.props.todo.completed && this.props.state.hidden) {return (<div></div>)}
    else {
      return(
        <div onClick={this.props.onClick} >
          <input type='checkbox' id={this.props.todo.id} checked={this.props.state.completed} onChange={this.props.onChange} />
          {this.props.todo.name}
        </div>
      )
    }
  }
}