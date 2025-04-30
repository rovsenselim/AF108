import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    todos: [],
};

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload);
        },
        updateTodo: (state, action) => {
            const { id, text } = action.payload;
            const todo = state.todos.find(todo => todo.id === id);
            if (todo) {
                todo.text = text;
            }
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        },
        deleteAllTodos: (state) => {
            state.todos = [];
        },
    },
});

export const { addTodo, updateTodo, deleteTodo, deleteAllTodos } = todosSlice.actions;

export default todosSlice.reducer;