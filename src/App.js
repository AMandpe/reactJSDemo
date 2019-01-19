import React, { Component } from 'react';
import Todos from './Todos'
import AddTodo from './AddForm'
import Navbar from './component/Navbar'
import { BrowserRouter } from 'react-router-dom'
import Route from 'react-router-dom/Route';
import Home from './component/Home'
import Contact from './component/Contact'
import About from './component/About'
import useOfAxios from './component/useOfAxios'
import Post from './component/Post'
class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'buy some milk'},
      {id: 2, content: 'play mario kart'}
    ]
  }

  deleteTodo = (id) =>  {   
    let newTodos = this.state.todos.filter(dos => {
      return dos.id !== id
    })
    this.setState({
      todos: newTodos
    })
  }

  addTodo = (todosData) => {
    todosData.id = Math.random()
    let newTodo = [...this.state.todos, todosData]
    this.setState({
      todos: newTodo
    })
  }
  render () {
    return (
      <BrowserRouter>
        <div className="todo-app container">
          <h1 className="center blue-text">Todo's</h1>
          <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
          <AddTodo addTodo={this.addTodo}/>       
          <Navbar />
          <Route exact path="/" component={ Home } />
          <Route path="/contact" component={ Contact } />
          <Route path="/about" component={ About } />      
          <Route path="/useOfAxios" component={ useOfAxios } />   
          <Route path="/:post_id" component= { Post } /> 
        </div>
      </BrowserRouter>
    )
  }
}

export default App
