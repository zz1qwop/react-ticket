import React from 'react';
import styles from './ShowItem.module.css';
import { useNavigate } from 'react-router-dom';

export default function ShowItem({ show }) {
  const navigate = useNavigate();
  const { url, title, date } = show;
  const handleShow = () => {
    navigate('/reservation', { state: { show: show } });
  };

  return (
    <div className={styles.box} onClick={handleShow}>
      <img src={url} alt={title} className={styles.img} />
      <p>{title}</p>
      <p>{date}</p>
    </div>
  );
}
