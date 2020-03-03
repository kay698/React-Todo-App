import React, {Component}from 'react';
import Todo from "./Components/Todo.js"


class App extends Component {
  state = {
    todos: [
      { 
        content : "Do The Dishes", 
        id: 1
       },
      { 
        content : 'Cook My Meal',
        id: 2 
      }  
    ]
  };
  deleteTodo = (id) =>{
    console.log(id)
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos : todos
    })
  }
  render () {
    return (
      <div className="todo-app container" >
        <h1 className = "center blue-text">Todo List</h1>
        <Todo deleteTodo = {this.deleteTodo} todos = {this.state.todos}/>
      </div>
    )
  }
}

export default App;
