import React, { useState } from 'react';
import { FaPaperPlane, FaTrashAlt, FaPencilAlt} from "react-icons/fa";
import './todoList.css';

function TodoList  ({todo, setTodo})  {

    const [edit, setEdit] = useState(null)
    const [value, setValue] = useState('')

    const DeleteTodo = (id) => {
        const newTodo = [...todo].filter(item => {
            return item.id !== id
        });
        setTodo(newTodo);

    }

    const StatusTodo = (id) => {
        let newTodo = [...todo].filter((item) => {
            if(item.id === id) {
                item.status = !item.status
            }
            return item;
        })
        setTodo(newTodo);
    }

    const EditTodo = (id, title) => {
        setEdit(id)
        setValue(title)
    }

    const SaveTodo = (id) => {
        let newTodo = [...todo].map((item) => {
            if(item.id === id) {
                item.title = value
            }
            return item
        })
        setTodo(newTodo)
        setEdit(null)
    }

    return (
        <div className='todos'>
            {
                todo.map((item) => {
                    return <div className='todoItem' key={item.id}>
                        {
                            edit === item.id ?
                                <div>
                                    <input className='todoInput' onChange={(e) => setValue(e.target.value)} value={value}/>

                                </div>
                                :
                                <li className='todoList'>{item.title}</li>
                        }
                        {
                            edit === item.id ?
                                <div>
                                    <button className='submit' onClick={() => SaveTodo(item.id)}><FaPaperPlane className='iconButton' /></button>
                                </div>
                                :
                                <div>
                                    <button className='submit' onClick={() => DeleteTodo(item.id)}><FaTrashAlt  className='iconButton' /></button>
                                    <button className='submit' onClick={() => StatusTodo(item.id)}><FaPaperPlane className='iconButton' /></button>
                                    <button className='submit' onClick={() => EditTodo(item.id, item.title)}><FaPencilAlt className='iconButton' /></button>
                                </div>
                        }
                    </div>
                })
            }
        </div>
    );
};

export default TodoList;
