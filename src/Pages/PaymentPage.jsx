import React from 'react';
import Header from '../Components/Header';
import { useLocation } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import { buySoldSeats, buyTicket } from '../api/firebase';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { v4 as uuid } from 'uuid';
import styles from './PaymentPage.module.css';

export default function PaymentPage() {
  const navigate = useNavigate();
  const { show, selected } = useLocation().state;
  const { user } = useAuthContext();

  const queryClient = useQueryClient();

  const buyMyTicket = useMutation(
    ({ ticketId, uid, show, selected }) =>
      buyTicket(ticketId, uid, show, selected),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['tickets']);
      },
    }
  );
  const buyMySoldSeat = useMutation(({ ticketId, show, selected }) =>
    buySoldSeats(ticketId, show, selected)
  );

  const handleSubmit = () => {
    const ticketId = uuid();
    buyMyTicket.mutate({ ticketId, uid: user.uid, show, selected });
    buyMySoldSeat.mutate({ ticketId, show, selected });
    // await buyTicket(user.uid, show, selected);
    // spinner 추가할 것
    navigate('/myticket');
  };

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <div className={styles.borderBox}>
          <p className={styles.payment}>Payment Service </p>
          <div className={styles.textBox}>
            <p className={styles.text}>{show.title}</p>
            <p className={styles.smallText}>
              {show.date}, {show.hall} <br /> {show.description}
            </p>
            <p className={styles.text}>
              {selected[0]}행, {selected[1]}열
            </p>
            <p className={styles.description}>
              해당 좌석을 구매하시겠습니까? Next 버튼을 누르면 결제가 바로
              진행됩니다. <br /> 구매하신 티켓은 마이페이지에서 확인하실 수
              있습니다.
            </p>
            <div className={styles.btnBox}>
              <button className={styles.btn}>Prev</button>
              <button className={styles.btn} onClick={handleSubmit}>
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
