import React from 'react';
import { IoIosNotificationsOutline } from "react-icons/io";

function Header() {
  return (
    <header className="flex flex-col sm:flex-row w-full justify-between items-center p-4 bg-white shadow">
      <h1 className="text-2xl font-bold mb-4 sm:mb-0">Dashboard</h1>
      <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
        <input
          type="text"
          placeholder="Search..."
          className="px-4 py-2 rounded-lg border focus:outline-none w-full sm:w-auto"
        />
        <IoIosNotificationsOutline className="text-2xl cursor-pointer" />
      </div>
    </header>
  );
}

export default Header;
