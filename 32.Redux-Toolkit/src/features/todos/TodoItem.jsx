import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleComplete, updateTodo } from './todosSlice';
import { toast } from 'react-toastify';

const TodoItem = ({ todo, onDelete, onToggleComplete }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newText, setNewText] = useState(todo.text);
    const dispatch = useDispatch();

    const handleSave = () => {
        if (newText.trim()) {
            dispatch(updateTodo({ id: todo.id, text: newText }));
            setIsEditing(false);
            toast.success('Todo updated successfully!');
        } else {
            toast.error('Please enter valid text!');
        }
    };

    return (
        <li style={{ marginBottom: '10px' }}>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={onToggleComplete}
            />
            {isEditing ? (
                <input
                    type="text"
                    value={newText}
                    onChange={(e) => setNewText(e.target.value)}
                />
            ) : (
                <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                    {todo.text}
                </span>
            )}
            <button onClick={onDelete}>Delete</button>
            <button onClick={() => setIsEditing(!isEditing)}>
                {isEditing ? 'Save' : 'Edit'}
            </button>
            {isEditing && <button onClick={handleSave}>Save</button>}
        </li>
    );
};

export default TodoItem;
