import React from 'react'
import TodoList from '../todoList/todoList'
import { useSelector } from 'react-redux'

const Item = () =>  {
    let todos = useSelector(state => state);

    return (
        <div>
            {todos.map((todo) => {
                return <TodoList key={todo.id} todo={todo} />
            })}
        </div>
    )
}

export default Item;
