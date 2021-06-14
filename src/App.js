import './App.css';
import AddTodo from "./components/addTodo/addTodo";
import TodoList from "./components/todoList/todoList";
import SidebarItems from "./components/sidebar/sidebar";
import React, {useState} from "react";

function App() {
    const [todo, setTodo] = useState([
        {
            id: Math.random(),
            title: "First Todo",
            status: true
        },
        {
            id: Math.random(),
            title: "Second Todo",
            status: false
        },
        {
            id: Math.random(),
            title: "Third Todo",
            status: false
        }
    ]);



  return (
    <div className="App">
      <SidebarItems />
      <div className='main'>
          <AddTodo todo={todo} setTodo={setTodo}/>
          <TodoList todo={todo} setTodo={setTodo}/>
      </div>
    </div>
  );
}

export default App;
