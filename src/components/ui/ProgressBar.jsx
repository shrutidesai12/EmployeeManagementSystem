import React from "react";

const ProgressBar = ({ value }) => (
  <div className="flex items-center gap-3">
    <div className="w-15 h-2 bg-gray-200 rounded-full">
      <div
        className={`h-2 rounded-full ${
          value > 90 ? "bg-orange-500" : "bg-indigo-500"
        }`}
        style={{ width: `${value}%` }}
      />
    </div>
    <span className="text-sm text-gray-700">{value}%</span>
  </div>
);

export default ProgressBar;