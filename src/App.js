import React, { useState } from 'react';
import styles from './App.module.css';
import ErrorModal from './components/Modal/ErrorModal';
import UserForm from './components/Users/UserForm/UserForm';
import UsersList from './components/Users/UsersList/UsersList';

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
    <div className={styles.container}>
      <UserForm onSubmit={handleSubmit} />
      <UsersList userslist={users} onDelete={handleDelete} />
      <ErrorModal
        isActive={activeModal}
        message={message}
        onClick={closeModal}
      />
    </div>
  );
};

export default App;
