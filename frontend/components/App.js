import React from 'react'
import axios from 'axios'
import TodoList from './TodoList'
import Form from './Form'

// - application state
// - event handlers

export default class App extends React.Component {
  // STATE
  constructor() {
    super()
    this.state = {
      name: "",
      hidden: false,
      list: []
    }
  }
  componentDidMount() {
    axios.get('http://localhost:9000/api/todos')
    .then(res => {
      this.setState({...this.state, list: res.data.data})
    })
    .catch(err => console.log(err))
  }
    
  // HANDLERS
    // * click *
  onClick = e => {
    const id = e.target.id
    // flips value of state.hidden
    id === "toggle" ?
    this.setState({
      ...this.state, 
      hidden: !this.state.hidden
    }) :
    // flips completed value of clicked todo
    axios.patch(`http://localhost:9000/api/todos/${id}`, {
      completed: !e.target.completed
    })
  }
  
    // * change *
  onChange = e => {
    // stores user input to state until submit
    if(e.target.type !== 'checkbox'){
      this.setState({...this.state, name: e.target.value})
    }
  }
  
    // * submit *
  onSubmit = e => {
    // don't reload the page
    e.preventDefault()
    // submit user input to the server
    axios.post('http://localhost:9000/api/todos', {
      name: this.state.name, 
      completed: false
    })
    // prep state for next entry
    .then(() => {
      this.setState({
        ...this.setState,
        name: ""
      })
    })
    // log if something went wrong
    .catch(err => {console.log(err)})
  }

  // render components
  render() {
    return (
      <div>
        <TodoList onClick={this.onClick} onChange={this.onChange} state={this.state} list={this.state.list} />
        <Form onClick={this.onClick} onChange={this.onChange} onSubmit={this.onSubmit} state={this.state} list={this.state.list} />
      </div>
    )
  }
}
