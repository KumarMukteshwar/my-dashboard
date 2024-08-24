import React from "react";
import { UserIcon } from "@heroicons/react/outline";
import { MdOutlineDashboard } from "react-icons/md";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { TbCube } from "react-icons/tb";
import { LuSquareEqual } from "react-icons/lu";
import { LuWallet2 } from "react-icons/lu";
import { PiCurrencyCircleDollarDuotone } from "react-icons/pi";
import { GrHistory } from "react-icons/gr";
import { RxTimer } from "react-icons/rx";

function Sidebar() {
  return (
    <aside className="w-64 bg-purple-600 text-white min-h-screen flex flex-col">
      <div className="p-6 text-center font-bold text-2xl">
        <img src="../public/logo.png" alt="img" />
        
      </div>
      <nav className="mt-10 flex-1">
        <ul>
          <li className="px-6 py-2 hover:bg-purple-500">
            <a href="#" className="flex items-center space-x-3">
              <MdOutlineDashboard className="h-6 w-6" />
              <span>Dashboard</span>
            </a>
          </li>
          <li className="px-6 py-2 hover:bg-purple-500">
            <a href="#" className="flex items-center space-x-3">
              <HiOutlineUserGroup className="h-6 w-6" />
              <span>CRM</span>
            </a>
          </li>
          <li className="px-6 py-2 hover:bg-purple-500">
            <a href="#" className="flex items-center space-x-3">
              <TbCube className="h-6 w-6" />
              <span>MAM</span>
            </a>
          </li>
          <li className="px-6 py-2 hover:bg-purple-500">
            <a href="#" className="flex items-center space-x-3">
              <RxTimer className="h-6 w-6" />
              <span>PAMM</span>
            </a>
          </li>
          <li className="px-6 py-2 hover:bg-purple-500">
            <a href="#" className="flex items-center space-x-3">
              <LuSquareEqual className="h-6 w-6" />
              <span>Trade</span>
            </a>
          </li>
          <li className="px-6 py-2 hover:bg-purple-500">
            <a href="#" className="flex items-center space-x-3">
              <LuWallet2 className="h-6 w-6" />
              <span>Wallet</span>
            </a>
          </li>
          <li className="px-6 py-2 hover:bg-purple-500">
            <a href="#" className="flex items-center space-x-3">
              <PiCurrencyCircleDollarDuotone className="h-6 w-6" />
              <span>Accounts</span>
            </a>
          </li>
          <li className="px-6 py-2 hover:bg-purple-500">
            <a href="#" className="flex items-center space-x-3">
              <GrHistory className="h-6 w-6" />
              <span>History</span>
            </a>
          </li>
          {/* Add other sidebar links similarly */}
        </ul>
      </nav>
      <div className="p-6 text-sm flex items-center">
        <UserIcon className="h-10 w-10 mr-2" />
        <div>
          <div>Shyam Shakur</div>
          <div>shyam01.shankur@...</div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
