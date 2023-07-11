import React from 'react';

export default function MyTicket({ ticket }) {
  const { ticketId, title, date, row, col } = ticket;
  return (
    <div>
      <p>{ticketId}</p>
      <p>{title}</p>
      <p>{date}</p>
      <p>
        {row}행, {col}열
      </p>
      <button>예매 취소</button>
    </div>
  );
}
