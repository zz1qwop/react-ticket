import React from 'react';
import { IoTicket } from 'react-icons/io5';
import { logout } from '../api/firebase';
import { useNavigate, Link } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };
  const handleMyPage = () => {
    navigate('/myticket');
  };
  return (
    <div className={styles.box}>
      <Link to="/main" className={styles.title}>
        TICKET
      </Link>
      <div className={styles.iconBox}>
        <IoTicket className={styles.ticketIcon} onClick={handleMyPage} />
        <button className={styles.logout} onClick={handleLogout}>
          logout
        </button>
      </div>
    </div>
  );
}
