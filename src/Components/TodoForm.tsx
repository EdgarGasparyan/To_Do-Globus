import React,{ useRef } from "react";


interface TodoFormprops{
    onAdd(title:string): void
}



const TodoForm:React.FC<TodoFormprops> = (props) => {
const ref = useRef<HTMLInputElement>(null)


const keyPressHandler = (event: React.KeyboardEvent) => {
    if( event.key === "Enter"){
      props.onAdd(ref.current!.value)
      ref.current!.value = ''
        
    }
}

    return(
        <div className="inpute-field">
            <input placeholder="To Do" 
            id="title" type="text"
            ref={ref} 
            onKeyPress={keyPressHandler}
            />
            <label htmlFor="title" className="active">
                To Do List
            </label>
        </div>
    )
}

export default TodoForm