import React from 'react';
import SeatRow from './SeatRow';
import { useQuery } from '@tanstack/react-query';
import { getSoldSeats } from '../api/firebase';

export default function Seats({ show, handleSelect }) {
  const { id, row, col } = show;
  const {
    isLoading,
    error,
    data: seats,
  } = useQuery(['seats'], () => getSoldSeats(id));

  const rowArray = [];
  for (let i = 0; i < row; i++) {
    rowArray.push(i);
  }

  return (
    <div>
      <button onClick={() => console.log(seats)}>test</button>
      {row} * {col}
      <div>
        {isLoading && <p>Loading...</p>}
        {error && <p>ERROR</p>}
        {seats &&
          rowArray.map((i) => {
            const seatArray = [];
            seats.map((seat) => {
              if (Number(seat.row) === i) seatArray.push(Number(seat.col));
              return null;
            });
            return (
              <SeatRow
                key={i}
                row={i}
                col={col}
                seatArray={seatArray}
                handleSelect={handleSelect}
              />
            );
          })}
      </div>
    </div>
  );
}
