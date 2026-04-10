import React from "react";
import { IoClose } from "react-icons/io5";

export default function AttendanceDetailsPanel({ onClose }) {
  return (
    <div className="mt-6 bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-[#fafafa]">
        <h2 className="text-[18px] font-medium text-[#1f1f1f]">
          Attendance Details
        </h2>

        <button
          onClick={onClose}
          className="text-gray-500 hover:text-black text-[22px]"
        >
          <IoClose />
        </button>
      </div>

      {/* Content */}
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section */}
        <div>
          <h3 className="text-[16px] font-medium text-[#1f1f1f] mb-4">
            Attendance Summary
          </h3>

          <div className="space-y-4">
            <div className="flex justify-between border-b border-gray-100 pb-3">
              <span className="text-gray-600 text-[14px]">Present Days</span>
              <span className="text-[15px] font-medium text-gray-900">22</span>
            </div>

            <div className="flex justify-between border-b border-gray-100 pb-3">
              <span className="text-gray-600 text-[14px]">Absent Days</span>
              <span className="text-[15px] font-medium text-gray-900">1</span>
            </div>

            <div className="flex justify-between border-b border-gray-100 pb-3">
              <span className="text-gray-600 text-[14px]">Late Marks</span>
              <span className="text-[15px] font-medium text-gray-900">2</span>
            </div>

            <div className="flex justify-between border-b border-gray-100 pb-3">
              <span className="text-gray-600 text-[14px]">Average Hours</span>
              <span className="text-[15px] font-medium text-gray-900">9h 18m</span>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="text-[16px] font-medium text-[#1f1f1f] mb-4">
            Today Status
          </h3>

          <div className="space-y-4">
            <div className="flex justify-between border-b border-gray-100 pb-3">
              <span className="text-gray-600 text-[14px]">Check In</span>
              <span className="text-[15px] font-medium text-gray-900">09:12 AM</span>
            </div>

            <div className="flex justify-between border-b border-gray-100 pb-3">
              <span className="text-gray-600 text-[14px]">Check Out</span>
              <span className="text-[15px] font-medium text-gray-900">06:18 PM</span>
            </div>

            <div className="flex justify-between border-b border-gray-100 pb-3">
              <span className="text-gray-600 text-[14px]">Break Time</span>
              <span className="text-[15px] font-medium text-gray-900">60 min</span>
            </div>

            <div className="flex justify-between border-b border-gray-100 pb-3">
              <span className="text-gray-600 text-[14px]">Work Mode</span>
              <span className="text-[15px] font-medium text-gray-900">Office</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}