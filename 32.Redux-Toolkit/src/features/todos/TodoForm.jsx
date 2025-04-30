import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './todosSlice';
import { toast } from 'react-toastify';

const TodoForm = () => {
    const [todoText, setTodoText] = useState('');
    const dispatch = useDispatch();

    const handleAddTodo = (e) => {
        e.preventDefault();
        if (!todoText.trim()) return;

        const newTodo = {
            id: Date.now(),
            text: todoText,
            completed: false,
        };

        dispatch(addTodo(newTodo));
        toast.success('Todo added successfully!');
        setTodoText('');
    };

    return (
        <form onSubmit={handleAddTodo}>
            <input
                type="text"
                value={todoText}
                onChange={(e) => setTodoText(e.target.value)}
                placeholder="Add a new todo"
            />
            <button type="submit">Add Todo</button>
        </form>
    );
};

export default TodoForm;