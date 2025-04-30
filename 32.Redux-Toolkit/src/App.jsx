import React from 'react';
import { Provider } from 'react-redux';
import store from './app/Store';
import TodoForm from './features/todos/TodoForm';
import TodoList from './features/todos/TodoList';
import "./App.css"

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Todo List</h1>
        <TodoForm />
        <TodoList />
      </div>
    </Provider>
  );
};

export default App;