import React, { useEffect, useRef, useState } from 'react'
import style from "./TodoCreate.module.css";
import { v4 as uuidv4 } from 'uuid';
import toast, { Toaster } from 'react-hot-toast';

const TodoCreate = () => {
    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || [])
    let inputRef = useRef(null)

    let addTodo = (e) => {
        e.preventDefault()
        let todo = inputRef.current.value.trim()

        if (!todo) {
            toast.error("Input boş ola bilməz!")
            return
        }

        let newTodo = {
            id: uuidv4(),
            todo,
            completed: false
        }

        setTodos([...todos, newTodo])
        inputRef.current.value = ""
        toast.success("Yeni todo əlavə olundu ")
    }

    let deleteTodo = (id) => {
        let newTodos = todos.filter(todo => todo.id !== id)
        setTodos(newTodos)
        toast.success("Todo silindi ")
    }

    let toggleComplete = (id) => {
        let newTodos = todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
        setTodos(newTodos)
        toast.success("Status dəyişdirildi ")
    }

    let clearAll = () => {
        setTodos([])
        toast.success("Bütün todolar silindi ")
    }

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

    return (
        <div className={style.container}>
            <Toaster position="top-center" reverseOrder={false} />
            <div className={style.todo}>
                <form onSubmit={addTodo} className={style.form}>
                    <input ref={inputRef} type="text" placeholder='Add Todo' className={style.todo_input} />
                    <button className={style.todo_btn}>Add</button>
                    <button type="button" onClick={clearAll} className={style.clear_all}>Clear All</button>
                </form>
            </div>
            <div className={style.todo_list}>
                <ul className={style.list}>
                    {todos.map((item, index) => (
                        <li key={item.id} className={`${style.todo_item} ${item.completed ? style.completed : ""}`}>
                            <span>{index + 1}. {item.todo}</span>
                            <div className={style.setting}>
                                <div onClick={() => toggleComplete(item.id)} className={style.btn}>Done</div>
                                <div onClick={() => deleteTodo(item.id)} className={style.btn}>Delete</div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default TodoCreate