import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { login, register } from '../api/firebase';
import { useAuthContext } from '../context/AuthContext';
import styles from './Modal.module.css';

export default function Modal({ title, closeModal, changeOption }) {
  const { handleUser } = useAuthContext();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    const user = await login(email, password);
    handleUser(user);
    navigate('/main');
    setEmail('');
    setPassword('');
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const user = await register(email, password);
    handleUser(user);
    navigate('/main');
    setEmail('');
    setPassword('');
  };

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <AiOutlineClose className={styles.closeBtn} onClick={closeModal} />
        </div>
        <form
          className={styles.form}
          action="submit"
          onSubmit={
            title === 'Login' ? (e) => handleLogin(e) : (e) => handleRegister(e)
          }
        >
          <input
            className={styles.input}
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className={styles.input}
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className={styles.submitBtn} type="submit">
            OK
          </button>
        </form>

        <button
          className={styles.changeBtn}
          onClick={() => {
            changeOption();
            setEmail('');
            setPassword('');
          }}
        >
          {title === 'Login' ? 'Register →' : 'Login →'}
        </button>
      </div>
    </div>
  );
}
