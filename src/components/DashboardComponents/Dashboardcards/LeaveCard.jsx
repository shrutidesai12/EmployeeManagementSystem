import React from "react";

export default function LeaveCard({ count = 0 }) {
  return (
    <div
      className="p-4 text-center"
      style={{ backgroundColor: "#90edef" }}
    >
      <div className="font-semibold text-gray-800">
        On Leave Today
      </div>

      <div className="text-sm text-gray-700 mt-2">
        {count > 0
          ? `${count} employees are on leave`
          : "Everyone is working today!"}
      </div>

      <div className="text-xs text-gray-600 mt-1">
        {count > 0
          ? "Check leave details"
          : "No one is on leave today"}
      </div>
    </div>
  );
}