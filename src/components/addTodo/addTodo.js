import React, { useState } from 'react';
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { addTodo } from '../../redux/actions';

import './addTodo.css';
import Button from '@material-ui/core/Button';

const AddTodo = () => {
    let dispatch = useDispatch();
    let [name, setName] = useState();

    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault()
            }}>
                <input
                    className="input"
                    value={name}
                    type="text"
                    onChange={(e) =>
                    {
                        setName(e.target.value)
                    }}
                />
                <Button
                    variant="contained"
                    className="btn"
                    color="primary"
                    onClick={() => dispatch(addTodo({
                            id: nanoid(),
                            title: name,
                            complete: false
                        }),
                        setName(""),
                    )}>
                    Add
                </Button>
            </form>
        </div>
    );
}

export default AddTodo;
