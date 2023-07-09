import React, { useContext, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { login, register } from '../api/firebase';
import { AuthContext } from '../context/AuthContext';

export default function Modal({ title, closeModal, changeOption }) {
  const { handleUser } = useContext(AuthContext);
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
    <div>
      <h2>{title}</h2>
      <AiOutlineClose onClick={closeModal} />
      <form
        action="submit"
        onSubmit={
          title === 'Login' ? (e) => handleLogin(e) : (e) => handleRegister(e)
        }
      >
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">OK</button>
      </form>

      <button
        onClick={() => {
          changeOption();
          setEmail('');
          setPassword('');
        }}
      >
        {title === 'Login' ? 'Register' : 'Login'}
      </button>
    </div>
  );
}
