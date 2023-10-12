import React from 'react'

// - holds input field & buttons (`Add Todo` and `Clear Completed`)
//   - On submit, Todo List should re-render and show the addition

export default class Form extends React.Component {
      
  render() {
    let button = ""
    if (this.props.list.length > 0) {
      button =
        <button id='toggle' onClick={this.props.onClick}>
          {this.props.state.hidden ? "Show Completed" : "Hide Completed"}
        </button>
    }
    return (
      <div>
        <form onSubmit={this.props.onSubmit} >
          <input name='todoName' type='text' onChange={this.props.onChange} value={this.props.state.name} /><br/><br/>
          <button>
            Add Todo
          </button>
        </form>
        {button}
      </div>
    )
  }
}
