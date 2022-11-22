import React from "react";
import {TodoIteam} from './TodoIteam';

const Todos = (props)=>{
    let myStyle = {
        margin:"10vh auto"
    }
    return(
        <div className="container" style={myStyle}>
            <h3 className="my-3">Todos List</h3>
            {props.todos.length===0? "No todos to display": 
            props.todos.map((todo)=> {
                return(
                    <>
                  <TodoIteam todo={todo} key={todo.sno} onDelete={props.onDelete}/><hr/>
                  </>
                  )

            })
                }
           
        </div>
    )
}
export default Todos;
