import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateTodo } from './todosSlice';

const EditModal = ({ todo }) => {
    const [newText, setNewText] = useState(todo.text);
    const dispatch = useDispatch();

    const handleUpdate = () => {
        if (newText.trim()) {
            dispatch(updateTodo({ id: todo.id, text: newText }));
        }
    };

    return (
        <div className="modal">
            <input
                type="text"
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
                placeholder="Edit todo"
            />
            <button onClick={handleUpdate}>Save</button>
        </div>
    );
};

export default EditModal;