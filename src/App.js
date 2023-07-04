import { useState } from 'react';
import './App.css';
import Modal from './Components/Modal';

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const closeModal = () => {
    setModalOpen(false);
  };
  const changeOption = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div>
      <h2>TICKET</h2>
      <button onClick={() => setModalOpen(true)}>Login</button>
      {modalOpen && isLogin && (
        <Modal
          title={'Login'}
          closeModal={closeModal}
          changeOption={changeOption}
        />
      )}
      {modalOpen && !isLogin && (
        <Modal
          title={'Register'}
          closeModal={closeModal}
          changeOption={changeOption}
        />
      )}
    </div>
  );
}

export default App;
