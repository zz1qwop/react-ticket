import React from 'react';
import styles from './SeatRow.module.css';

export default function SeatRow({ row, col, handleSelect }) {
  const colArray = [];
  for (let i = 0; i < col; i++) {
    colArray.push(i);
  }
  return (
    <div className={styles.rowBox}>
      {colArray.map((i) => (
        <div
          className={styles.seat}
          key={i}
          onClick={() => {
            handleSelect([row, i]);
          }}
        >
          {i}
        </div>
      ))}
    </div>
  );
}
