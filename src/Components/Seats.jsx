import React from 'react';
import SeatRow from './SeatRow';
import { useQuery } from '@tanstack/react-query';
import { getSoldSeats } from '../api/firebase';
import styles from './Seats.module.css';

export default function Seats({ show, selected, handleSelect }) {
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
    <div className={styles.container}>
      <div className={styles.stage}>STAGE</div>
      <div className={styles.seatRow}>
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
                selected={selected}
                handleSelect={handleSelect}
              />
            );
          })}
      </div>
    </div>
  );
}
