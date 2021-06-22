import React, { useState, useRef } from 'react';
import './todoList.css';
import EditIcon from '@material-ui/icons/Edit';
import { DeleteForever } from "@material-ui/icons";
import SaveAltIcon from '@material-ui/icons/SaveAlt';

const TodoList = ({ addTodo, todo, setTodo}) => {

    const [edit, setEdit] = useState(null)
    const [value, setValue] = useState('')
    let editInputRef = useRef('')

    console.log(value)
    const deleteTodo = (id) => {
        const newTodo = [...todo].filter(item => {
            return item.id !== id
        });
        setTodo(newTodo);

    }

    const statusTodo = (id) => {
        let newTodo = [...todo].filter((item) => {
            if (item.id === id) {
                item.status = !item.status
            }
            return item;
        })
        setTodo(newTodo);
    }

    const editTodo = (id, title) => {
        setEdit(id)
        setValue(title)
    }

    const saveTodo = (id) => {
        let newTodo = [...todo].map((item) => {
            if(item.id === id) {
                item.title = editInputRef.current.value
            }
            return item
        })
        setTodo(newTodo)
        setEdit(null)
    }

    return (
        <div className='todos'>
            {
                [...todo].map((item, id) => {
                    return <div
                        className='todoItem'
                        key={item.id}
                        >
                        {
                            edit === item.id ?
                                <div>
                                    {<input className='todoInput' ref={editInputRef}/>}
                                </div>
                                :
                                <li className='todoList'>{item.title}</li>
                        }
                        {
                            edit === item.id ?
                                <div>
                                    <button className='submit' type='submit' onClick={() => saveTodo(item.id)}>
                                        <SaveAltIcon />
                                    </button>
                                </div>
                                :
                                <div>
                                    <button className='submit' onClick={() => deleteTodo(item.id)}>
                                        <DeleteForever />
                                    </button>
                                    <button className='submit' onClick={() => statusTodo(item.id)}>
                                    </button>
                                    <button className='submit' onClick={() => editTodo(item.id, item.title)}>
                                        <EditIcon />
                                    </button>
                                </div>
                        }
                    </div>
                })
            }
        </div>
    );
};

export default TodoList;
