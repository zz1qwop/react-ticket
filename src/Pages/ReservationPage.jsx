import React, { useState } from 'react';
import Header from '../Components/Header';
import { useLocation } from 'react-router-dom';
import Seats from '../Components/Seats';
import { useNavigate } from 'react-router-dom';

export default function ReservationPage() {
  const navigate = useNavigate();

  const show = useLocation().state.show;
  const [selected, setSelected] = useState([0, 0]);
  const handleSelect = (array) => {
    setSelected(array);
  };
  const handleBtn = () => {
    navigate('/payment', { state: { show: show, selected: selected } });
  };

  return (
    <div>
      <Header />
      <Seats show={show} handleSelect={handleSelect} />
      <div>
        <p>show detail</p>
        <p>{show.title}</p>
        <p>{show.description}</p>
        <p>
          selected: {selected[0]}, {selected[1]}
        </p>
      </div>
      <button onClick={handleBtn}>Next</button>
    </div>
  );
}
