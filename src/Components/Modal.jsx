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
  const [errorMsg, setErrorMsg] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    const user = await login(email, password);
    if (typeof user === 'string') {
      setErrorMsg('아이디와 비밀번호를 맞게 입력해주세요.');
      setTimeout(() => setErrorMsg(''), 3000);
      return;
    }
    handleUser(user);
    navigate('/main');
    setEmail('');
    setPassword('');
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const user = await register(email, password);
    if (typeof user === 'string') {
      switch(user){
        case 'auth/weak-password':
          setErrorMsg('비밀번호를 6자리 이상으로 설정해주세요.');
          break;
        case 'auth/invalid-email':
          setErrorMsg('잘못된 이메일 주소입니다.');
          break;
        case 'auth/email-already-in-use':
          setErrorMsg('이미 가입되어 있는 이메일입니다.');
          break;
        default:
          setErrorMsg('이메일과 비밀번호를 다시 입력해주세요.');
      }
      setTimeout(() => setErrorMsg(''), 3000);
      return;
    }
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
          <p className={styles.errorMsg}>{errorMsg}</p>
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
