import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../../redux/actions';

import './todoList.css';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import {DeleteForever} from "@material-ui/icons";
import CheckIcon from '@material-ui/icons/Check';

const TodoList = ({todo, id}) => {
    const [edit, setEdit] = useState(false)
    const [name, setName] = useState(todo.title);
    let dispatch = useDispatch();

    return (
        <div className="inputContainer" >
            <div key={id} >
                {edit ?
                    <input
                        className="todoListInput"
                        style={{color: "#434343"}}
                        type='text'
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                    />
                    :
                    <li className="todoListInput">{todo.title}</li>
                }
            </div>
            <Button
                className="button"
                style={{color: "#434343"}}
                onClick={() => {
                    dispatch(updateTodo({
                        ...todo,
                        title: name
                    }))
                    if (edit) {
                        setName(todo.title);
                    }
                    setEdit(!edit)
                }}
            >
                {edit ? <CheckIcon /> : <EditIcon />}
            </Button>
            <Button
                className="button"
                style={{color: "#434343"}}
                onClick={() => dispatch(deleteTodo(todo.id))}
            >
                <DeleteForever />
            </Button>
        </div>
    )
};

export default TodoList;
