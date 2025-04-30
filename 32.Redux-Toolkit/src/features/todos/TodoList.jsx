import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, updateTodo, deleteAllTodos } from './todosSlice';
import EditModal from './EditModal';
import { toast } from 'react-toastify';

const TodoList = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos.todos);

    const handleDeleteAll = () => {
        dispatch(deleteAllTodos());
        toast.info('All todos deleted!');
    };

    return (
        <div>
            <button onClick={handleDeleteAll}>Delete All</button>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <span>{todo.text}</span>
                        <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
                        <button onClick={() => dispatch(updateTodo({
                            id: todo.id,
                            text: prompt("Update Todo", todo.text) || todo.text
                        }))}>Edit</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;