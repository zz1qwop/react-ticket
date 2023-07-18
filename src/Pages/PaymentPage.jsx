import React from 'react';
import Header from '../Components/Header';
import { useLocation } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import { buySoldSeats, buyTicket } from '../api/firebase';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { v4 as uuid } from 'uuid';

export default function PaymentPage() {
  const navigate = useNavigate();
  const { show, selected } = useLocation().state;
  const { user } = useAuthContext();

  const queryClient = useQueryClient();

  const buyMyTicket = useMutation(
    ({ ticketId, uid, show, selected }) =>
      buyTicket(ticketId, uid, show, selected),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['tickets']);
      },
    }
  );
  const buyMySoldSeat = useMutation(({ ticketId, show, selected }) =>
    buySoldSeats(ticketId, show, selected)
  );

  const handleSubmit = () => {
    const ticketId = uuid();
    buyMyTicket.mutate({ ticketId, uid: user.uid, show, selected });
    buyMySoldSeat.mutate({ ticketId, show, selected });
    // await buyTicket(user.uid, show, selected);
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
