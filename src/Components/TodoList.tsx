import React from "react";
import { ITodo } from "../interfaces";

type TodolistProps ={
    todos:ITodo[]
    onToggle(id: number): void
    onRemove(id: number): void

}


const TodoList:React.FC<TodolistProps> = ({todos, onRemove, onToggle}) => {
   
   return (
    <ul>
    {todos.map(todo => {
     const classes= ["todo"]
        if(todo.completed){
            classes.push('completed')
        }
       
        


        return (
            <li className={classes.join(' ') } key={todo.id}>
            <label>
                <input type="checkbox" 
                checked={todo.completed} 
                onChange={onToggle.bind(null, todo.id)}
                />
                <span> {todo.title} </span>
                <i className="material-icons red-text" 
                 onClick={() => onRemove(todo.id)} >
                     delete</i>
            </label>
    
        </li>
        )
    })}
   
        </ul>
    )
}

export default TodoList