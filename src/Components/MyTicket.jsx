import React from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { removeSoldSeats, removeTicket } from '../api/firebase';
import { useAuthContext } from '../context/AuthContext';

export default function MyTicket({ ticket }) {
  const { uid } = useAuthContext().user;

  const { ticketId, showId, title, date, row, col } = ticket;

  const queryClient = useQueryClient();

  const removeMyTicket = useMutation(
    ({ uid, ticketId }) => removeTicket(uid, ticketId),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['tickets']);
      },
    }
  );
  const removeSoldList = useMutation(({ showId, ticketId }) =>
    removeSoldSeats(showId, ticketId)
  );

  const handleRemove = () => {
    removeMyTicket.mutate({ uid, ticketId });
    removeSoldList.mutate({ showId, ticketId });
  };

  return (
    <div>
      <p>{ticketId}</p>
      <p>{title}</p>
      <p>{date}</p>
      <p>
        {row}행, {col}열
      </p>
      <button onClick={handleRemove}>예매 취소</button>
    </div>
  );
}
