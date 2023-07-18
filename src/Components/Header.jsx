import React from 'react';
import { BiSolidUserCircle } from 'react-icons/bi';
import { IoTicket } from 'react-icons/io5';
import { logout } from '../api/firebase';
import { useNavigate, Link } from 'react-router-dom';

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
    <div>
      <Link to="/main">TICKET</Link>
      <div>
        <IoTicket onClick={handleMyPage} />
        <BiSolidUserCircle />
        <button onClick={handleLogout}>logout</button>
      </div>
    </div>
  );
}
