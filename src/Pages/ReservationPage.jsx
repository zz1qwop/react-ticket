import React from 'react';
import Header from '../Components/Header';
import { useLocation } from 'react-router-dom';

export default function ReservationPage() {
  const data = useLocation().state.show;
  console.log(data);
  return (
    <div>
      <Header />
      reservation page
    </div>
  );
}
