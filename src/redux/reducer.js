import * as types from './types';
import { todos } from "../redux/state";

export let reducer = (state = todos, action) => {
    let newTodos;
    switch (action.type) {
        case types.ADD_TODO:
            newTodos = [...state];
            newTodos.push(action.payload);
            return newTodos;
        case types.DELETE_TODO:
            newTodos = [...state];
            newTodos = newTodos.filter(todo => todo.id !== action.payload);
            return newTodos;
        case types.UPDATE_TODO:
           newTodos = state.map((todo) => todo.id === action.payload.id ? action.payload : todo )
            return newTodos;
        default:
            return state;
    }
}
