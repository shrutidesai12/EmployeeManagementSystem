import React, { useState } from "react";
import { Home, User, CheckSquare, Users, Layers, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { HiOutlineCurrencyRupee } from "react-icons/hi2";

export default function Sidebar() {
  const navigate = useNavigate();
  const [showMeTooltip, setShowMeTooltip] = useState(false);

  const menuItems = [
    { name: "Home", icon: <Home size={24} />, path: "/dashboard" },
    { name: "Me", icon: <User size={24} />, path: "/me" },
    { name: "Inbox", icon: <CheckSquare size={24} />, path: "/inbox" },
    { name: "My Team", icon: <Users size={24} />, path: "/team" },
    { name: "My Finances", icon: <HiOutlineCurrencyRupee size={24} />, path: "/finances" },
    { name: "Org", icon: <Layers size={24} />, path: "/employees" },
  ];
  const meMenuItems = [
    { name: "Timesheet", path: "/me/timesheet", hasArrow: true },
    { name: "Leave", path: "/me/leave", hasArrow: false },
    { name: "Performance", path: "/me/performance", hasArrow: true },
    { name: "Expenses & Travel", path: "/me/expenses", hasArrow: true },
    { name: "Apps", path: "/me/apps", hasArrow: true },
  ];

  return (
    <div className="w-24 flex flex-col h-screen text-white" style={{ backgroundColor: "#718FC8" }}>

      <div
        className="flex items-center justify-center h-16 border-b border-[#3B4265]"
        style={{ backgroundColor: " #606062" }}
      >
        <span className="text-lg font-bold">DigiElevate</span>
      </div>

      <div className="flex flex-col items-center mt-4 space-y-2">
        {menuItems.map((item) => {
          const isMe = item.name === "Me";

          return (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => isMe && setShowMeTooltip(true)}
              onMouseLeave={() => isMe && setShowMeTooltip(false)}
            >
              <div
                className={`flex flex-col items-center justify-center w-24 py-4 cursor-pointer transition-all duration-200 ${isMe && showMeTooltip ? "bg-[#606062] text-white" : "hover:bg-[#606062] hover:text-white"
                  }`}
                onClick={() => navigate(item.path)}
              >
                {item.icon}
                <span className="text-xs font-medium">{item.name}</span>
              </div>
              {isMe && showMeTooltip && (
                <div className="absolute left-24 top-0 w-50 bg-[#606062] text-white shadow-xl z-50 p-4">
                  <h3 className="text-sm font-semibold text-white mb-2 pb-1">
                    Attendance
                  </h3>

                  <div className="space-y-0.5">
                    {meMenuItems.map((subItem) => (
                      <div
                        key={subItem.name}
                        onClick={() => navigate(subItem.path)}
                        className="flex items-center justify-between px-2 py-1 rounded-md cursor-pointer text-sm"
                      >
                        <span>{subItem.name}</span>
                        {subItem.hasArrow && <ChevronRight size={16} />}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}