import React from 'react';
import AddTodo from './addTodo';
import TodoList from './todoList';


const Todos = ()=>{
    return (
        <div className="todos">
            <AddTodo/>
            <TodoList/>
        </div>
    )
}

export default Todos;