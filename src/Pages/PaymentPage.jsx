import React, { useContext } from 'react';
import Header from '../Components/Header';
import { useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { buyTicket } from '../api/firebase';
import { useNavigate } from 'react-router-dom';

export default function PaymentPage() {
  const navigate = useNavigate();

  const { show, selected } = useLocation().state;
  const user = useContext(AuthContext).user;

  const handleSubmit = async () => {
    await buyTicket(user.uid, show.id, selected);
    // spinner 추가할 것
    navigate('/myticket');
  };
  return (
    <div>
      <Header />
      <p>payment page</p>
      <p>user: </p>
      <p>{show.title}</p>
      <p>
        {selected[0]}, {selected[1]}
      </p>
      <button>Prev</button>
      <button onClick={handleSubmit}>Next</button>
    </div>
  );
}
