import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/outline';
import { FiArrowUpRight } from "react-icons/fi";
import { GoArrowDownLeft } from "react-icons/go";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { CiStar } from "react-icons/ci";
import { GoGraph } from "react-icons/go";
import { BiTransfer } from "react-icons/bi";
import { MdHistory } from "react-icons/md";
import { IoMdContacts } from "react-icons/io";
import { RiExchange2Line } from "react-icons/ri";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { IoIosSettings } from "react-icons/io";

function QuickLinks() {
  const links = [
    { icon: <GoArrowDownLeft className="h-6 w-6 text-gray-500" />, label: 'Deposit' },
    { icon: <FiArrowUpRight className="h-6 w-6 text-gray-500" />, label: 'Withdraw' },
    { icon: <IoIosSettings className="h-6 w-6 text-gray-500" />, label: 'Settings' },
    { icon: <RiVerifiedBadgeFill className="h-6 w-6 text-gray-500" />, label: 'Verification' },
    { icon: <CiStar className="h-6 w-6 text-gray-500" />, label: 'Bonuses' },
    { icon: <GoGraph className="h-6 w-6 text-gray-500" />, label: 'MT5' },
    { icon: <BiTransfer className="h-6 w-6 text-gray-500" />, label: 'Transfer' },
    { icon: <MdHistory className="h-6 w-6 text-gray-500" />, label: 'History' },
    { icon: <IoMdContacts className="h-6 w-6 text-gray-500" />, label: 'Partner' },
    { icon: <RiExchange2Line className="h-6 w-6 text-gray-500" />, label: 'Exchange' },
    { icon: <TbBrandGoogleAnalytics className="h-6 w-6 text-gray-500" />, label: 'Analytics' },
  ];

  return (
    <div className="mt-8">
      <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-4">
        {links.map(({ icon, label }) => (
          <div key={label} className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center">
            {icon}
            <span className="text-gray-700 font-medium mt-2 text-center">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuickLinks;
