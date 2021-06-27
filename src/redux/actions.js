import * as types from './types';

export const addTodo = (todo) => ({
   type: types.ADD_TODO,
   payload: todo,
});

export const deleteTodo = (id) => ({
   type: types.DELETE_TODO,
    payload: id
});

export const updateTodo = (todo) => ({
    type: types.UPDATE_TODO,
    payload: todo,
});
