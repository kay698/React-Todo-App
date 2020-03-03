import React, {Component}from 'react';

const Todo = ({todos, deleteTodo}) => {
    const todoList = todos.length ? (
        todos.map(todo => {
            return(
                <div className="collection-item" key = {todo.id} >
                     <span>{todo.content}</span>
                     <button className = "right" onClick = {() => {deleteTodo(todo.id)}}>x</button>
                </div>
            )
        })
    ) : (

       
        <p className = "center ">You have no todos left</p>
    )
    return (
      <div className="todos collection " >
        {todoList}
      </div>
    )
  
}
gt
export default Todo;
