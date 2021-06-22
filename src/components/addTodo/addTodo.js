import React, { useRef } from 'react';
import './addTodo.css';
import AddIcon from '@material-ui/icons/Add';


const AddTodo = ({ addTodo }) => {
    let addTodoRef = useRef()

    const handleAdd = () => {
        addTodo(addTodoRef.current.value);
        addTodoRef.current.value = ''
    }



    return (
        <div className='addTodo'>
            <form className='form' onSubmit={(e) => {
                e.preventDefault()
            }}>
                <input className='addInput' ref={addTodoRef}/>
                <button className='btn' type='submit' onClick={handleAdd}><AddIcon /></button>
            </form>
        </div>
    );
}

export default AddTodo;
