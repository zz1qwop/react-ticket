import React, { useContext } from 'react';
import Header from '../Components/Header';
import { useQuery } from '@tanstack/react-query';
import { getMyTicket } from '../api/firebase';
import { AuthContext } from '../context/AuthContext';
import MyTicket from '../Components/MyTicket';

export default function MyPage() {
  const user = useContext(AuthContext).user;

  const {
    isLoading,
    error,
    data: tickets,
  } = useQuery(['tickets'], () => getMyTicket(user.uid));

  return (
    <div>
      <Header />
      <button onClick={() => console.log(tickets)}>test</button>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error!</p>}
      {tickets &&
        tickets.map((ticket) => (
          <MyTicket key={ticket.ticketId} ticket={ticket} />
        ))}
    </div>
  );
}
