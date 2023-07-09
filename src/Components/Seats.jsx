import React from 'react';
import SeatRow from './SeatRow';

export default function Seats({ row, col, handleSelect }) {
  const rowArray = [];
  for (let i = 0; i < row; i++) {
    rowArray.push(i);
  }

  return (
    <div>
      {row} * {col}
      <div>
        {rowArray.map((i) => (
          <SeatRow key={i} row={i} col={col} handleSelect={handleSelect} />
        ))}
      </div>
    </div>
  );
}
