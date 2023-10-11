import React from 'react'
import axios from 'axios'

// - holds input field & buttons (`Add Todo` and `Clear Completed`)
//   - On submit, Todo List should re-render and show the addition

export default class Form extends React.Component {
  React.useEffect(() => {
    axios.get('http://localhost:9000/api/todos')
    .then(res => {
      
    })
  })

  render() {

    // displays hide completed button only after first todo has been submitted
    // let list = get  
    let button = ""
    if(list.length > 0){
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
