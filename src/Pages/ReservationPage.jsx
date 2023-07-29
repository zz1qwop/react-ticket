import React, { useState } from 'react';
import Header from '../Components/Header';
import { useLocation } from 'react-router-dom';
import Seats from '../Components/Seats';
import { useNavigate } from 'react-router-dom';
import styles from './ReservationPage.module.css';

export default function ReservationPage() {
  const navigate = useNavigate();

  const show = useLocation().state.show;
  const [selected, setSelected] = useState(['-', '-']);
  const handleSelect = (array) => {
    setSelected(array);
  };
  const handleBtn = () => {
    if (selected[0] === '-') return;
    navigate('/payment', { state: { show: show, selected: selected } });
  };

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.box}>
        <Seats show={show} selected={selected} handleSelect={handleSelect} />
        <div className={styles.rightBox}>
          <div className={styles.textBox}>
            <p className={styles.title}>{show.title}</p>
            <div className={styles.smallTextBox}>
              <p className={styles.smallText}>{show.date}</p>
              <p className={styles.smallText}>{show.hall}</p>
            </div>
            <p className={styles.text}>{show.description}</p>
            <p className={styles.text}>
              선택한 좌석 : {selected[0]}행, {selected[1]}열
            </p>
          </div>
          <p className={styles.smallText}>
            예매할 좌석을 선택하세요. 1인 1매만 가능한 공연입니다.
            <br />
            선택한 좌석을 확인 후 Next 버튼을 눌러 결제 페이지로 이동하세요.
          </p>
          <div className={styles.squareBox}>
            <div className={styles.soldSquare}></div>
            <p className={styles.seatText}>팔린 좌석</p>
            <div className={styles.selectedSquare}></div>
            <p className={styles.seatText}>선택한 좌석</p>
          </div>
          <button className={styles.nextBtn} onClick={handleBtn}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
