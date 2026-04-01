
import React from "react";
import { Bell, Search, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const handleProfileClick = () => {
   navigate("/employees/1/profile")
  };

  return (
    <div
      className="w-full px-6 py-3 flex justify-between items-center"
      style={{ backgroundColor: "#606062" }}
    >
      <div></div>

      <div className="flex items-center w-1/3 bg-white px-3 py-2 rounded-full">
        <Search size={16} className="text-gray-500" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none ml-2 w-full text-gray-700 placeholder-gray-400"
        />
      </div>

      <div className="flex items-center gap-4">
        <Bell size={20} className="text-white" />

        <div
          className="flex items-center gap-2 cursor-pointer px-2 py-1 rounded "
          onClick={handleProfileClick}
        >
          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
            <User size={16} className="text-gray-600" />
          </div>
          <span className="text-sm font-medium text-white">A</span>
        </div>
      </div>
    </div>
  );
}