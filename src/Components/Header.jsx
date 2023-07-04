import React from 'react';
import { BiSolidUserCircle } from 'react-icons/bi';
import { IoTicket } from 'react-icons/io5';

export default function Header() {
  return (
    <div>
      <div>TICKET</div>
      <div>
        <IoTicket />
        <BiSolidUserCircle />
      </div>
    </div>
  );
}
