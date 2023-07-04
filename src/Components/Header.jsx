import React from 'react';
import { BiSolidUserCircle } from 'react-icons/bi';
import { IoTicket } from 'react-icons/io5';
import { logout } from '../api/firebase';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };
  return (
    <div>
      <div>TICKET</div>
      <div>
        <IoTicket />
        <BiSolidUserCircle />
        <button onClick={handleLogout}>logout</button>
      </div>
    </div>
  );
}
