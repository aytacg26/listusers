import React, { useState } from 'react';
import './App.css';
import Modal from './components/Modal/Modal';
import UserForm from './components/userform/UserForm';
import UsersList from './components/UsersList/UsersList';

const App = () => {
  const [users, setUsers] = useState([]);
  const [activeModal, setActiveModal] = useState(false);
  const [message, setMessage] = useState({ title: '', msg: '' });

  const handleSubmit = (submitData) => {
    const { user, hasError, error } = submitData;

    if (!hasError) {
      setUsers((prevUsers) => [user, ...prevUsers]);
    } else {
      setActiveModal(true);
      setMessage(error);
    }
  };

  const handleDelete = (id) => {
    setUsers((prevUsers) => {
      return prevUsers.filter((user) => user.id !== id);
    });
  };

  const closeModal = () => {
    setActiveModal(false);
    setMessage({ title: '', message: '' });
  };

  return (
    <div className='container'>
      <UserForm onSubmit={handleSubmit} />
      <UsersList userslist={users} onDelete={handleDelete} />
      <Modal isActive={activeModal} message={message} onClick={closeModal} />
    </div>
  );
};

export default App;
