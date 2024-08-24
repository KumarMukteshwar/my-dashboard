import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import QuickLinks from "./QuickLinks";
import OverviewChart from "./OverviewChart";
import TradingAccounts from "./TradingAccounts";
import OpenTrades from "./OpenTrades";
import  { useState } from "react";

function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Hamburger Button for Small Screens */}
      <div className="md:hidden p-4 bg-gray-800 text-white">
        <button onClick={toggleSidebar} className="focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen ? "block" : "hidden"
        } md:block md:w-1/3 lg:w-1/5 text-white z-10`}
      >
        <Sidebar />
      </div>
    {/* <div className="flex"> */}
     
      <div className="flex-1 p-8  w-full">
      
          <Header />
        
        <QuickLinks />

        <div className="mt-8">
          <OverviewChart />
        </div>
      </div>
     

        <div className="flex-2 gap-8 mt-12 p-5 rounded-lg">
          <br />
          <br />
          <TradingAccounts />
          <br />
          <br />
            <OpenTrades />
        </div>
       
       </div>
    
  );
}

export default Dashboard;
