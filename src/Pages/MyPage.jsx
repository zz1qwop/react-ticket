import React from 'react';
import Header from '../Components/Header';
import { useQuery } from '@tanstack/react-query';
import { getMyTicket } from '../api/firebase';
import { useAuthContext } from '../context/AuthContext';
import MyTicket from '../Components/MyTicket';
import styles from './MyPage.module.css';

export default function MyPage() {
  const { user } = useAuthContext();

  const {
    isLoading,
    error,
    data: tickets,
  } = useQuery(['tickets'], () => getMyTicket(user.uid), {
    staleTime: 60 * 1000,
    cacheTime: 60 * 5 * 1000,
  });

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.contentBox}>
        {isLoading && <p>Loading...</p>}
        {error && <p>Error!</p>}
        {tickets &&
          tickets.map((ticket) => (
            <MyTicket key={ticket.ticketId} ticket={ticket} />
          ))}
      </div>
    </div>
  );
}
