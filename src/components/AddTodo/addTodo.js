import React, { useState }from 'react';
import './addTodo.css';
import { AiOutlineSend } from "react-icons/ai";

const AddTodo = ({todo, setTodo}) => {
    const [value, setValue] = useState('');

    const SaveTodo = () => {
        setTodo([
             ...todo,
            {
                id: Math.random(),
                title: value,
                status: true
            }]
        )
        setValue('');
    }

    return (
        <div className='addTodo'>
            <form className='form' onSubmit={(e) => {
                e.preventDefault()
                SaveTodo(value)}}>
                <input className='addInput' placeholder='Enter Task...' value={value} onChange={(e) => setValue(e.target.value)}/>
                <button className='addBtn' type='submit'><AiOutlineSend /></button>
        </form>
        </div>
    );
}

export default AddTodo;
