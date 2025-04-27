import './App.css';
import React, { useReducer, useState } from 'react';



const userReducer = (state, action) => {
  switch (action.type) {
    case 'CREATE':
      return [...state, action.payload];
    case 'UPDATE':
      return state.map(user =>
        user.id === action.payload.id ? { ...user, ...action.payload } : user
      );
    case 'DELETE':
      return state.filter(user => user.id !== action.payload);
    case 'RESET':
      return [];
    default:
      return state;
  }
};

const App = () => {
  const [users, dispatch] = useReducer(userReducer, []);
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editUser, setEditUser] = useState(null);
  const [editName, setEditName] = useState('');
  const [editSurname, setEditSurname] = useState('');

  const handleCreate = () => {
    if (name && surname) {
      const newUser = {
        id: Date.now(),
        name,
        surname,
      };
      dispatch({ type: 'CREATE', payload: newUser });
      setName('');
      setSurname('');
    }
  };

  const handleEdit = (user) => {
    setEditUser(user);
    setEditName(user.name);
    setEditSurname(user.surname);
    setIsModalOpen(true);
  };

  const handleUpdate = () => {
    if (editName && editSurname) {
      dispatch({
        type: 'UPDATE',
        payload: {
          id: editUser.id,
          name: editName,
          surname: editSurname,
        },
      });
      setIsModalOpen(false);
      setEditUser(null);
      setEditName('');
      setEditSurname('');
    }
  };

  const handleDelete = (id) => {
    dispatch({ type: 'DELETE', payload: id });
  };

  const handleReset = () => {
    dispatch({ type: 'RESET' });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>İstifadəçi  İdarəetmə Sistemi</h1>
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Ad"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Soyad"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          style={{ marginLeft: '10px' }}
        />
        <button onClick={handleCreate}>Add</button>
        <button onClick={handleReset}>Reset</button>
      </div>

      {users.length === 0 ? (
        <p>No Users</p>
      ) : (
        <ul>
          {users.map(user => (
            <li key={user.id} style={{ marginBottom: '10px' }}>
              {user.name} {user.surname}
              <button onClick={() => handleEdit(user)}>Edit</button>
              <button onClick={() => handleDelete(user.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}


      {isModalOpen && (
        <div style={{
          position: 'fixed',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <div>
            <h2>Edit User</h2>
            <input
              type="text"
              value={editName}
              onChange={(e) => setEditName(e.target.value)}
              placeholder="Ad"
            />
            <input
              type="text"
              value={editSurname}
              onChange={(e) => setEditSurname(e.target.value)}
              placeholder="Soyad"

            />
            <div style={{ marginTop: '10px' }}>
              <button onClick={handleUpdate}>Yadda saxla</button>
              <button onClick={() => setIsModalOpen(false)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;