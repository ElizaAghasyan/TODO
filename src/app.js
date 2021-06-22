import React, { useState } from "react";
import './app.css';
import AddTodo from "./components/addTodo/addTodo";
import TodoList from "./components/todoList/todoList";

const App = () => {
    const [todo, setTodo] = useState([]);

    const addTodo = (value) => {
        setTodo([
            ...todo,
            {
                id: Math.random(),
                title: value,
                status: true
            }]

        )
    }

    return (
        <div className="App">
            <div className="containerTodo">
                <AddTodo addTodo={addTodo} />
                <TodoList addTodo={addTodo} todo={todo} setTodo={setTodo} />
            </div>
        </div>
    );
}

export default App;
