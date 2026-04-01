import React from "react";

export default function LeaveBalanceCard() {

  const leaveData = [
    { value: 9.22, label: "Paid Leave" },
    { value: 2, label: "Marriage Leave" },
    { value: 1, label: "Sick Leave" },
  ];

  return (
    <div className="bg-gray-50 p-4 shadow-sm">

      {/* Title */}
      <div className="font-medium mb-4">Leave Balances</div>

      <div className="flex justify-between items-center">

        {/* LEFT - Progress Circles */}
        <div className="flex gap-6">
          {leaveData.map((item, i) => (
            <div key={i} className="flex flex-col items-center">

              <div className="relative w-16 h-16">
                <svg className="w-16 h-16">

                  {/* Background */}
                  <circle
                    cx="32"
                    cy="32"
                    r="26"
                    stroke="#e5e7eb"
                    strokeWidth="5"
                    fill="none"
                  />

                  {/* Progress */}
                  <circle
                    cx="32"
                    cy="32"
                    r="26"
                    stroke="#718FC2"
                    strokeWidth="5"
                    fill="none"
                    strokeDasharray="163"
                    strokeDashoffset={163 - (item.value / 10) * 163}
                    strokeLinecap="round"
                  />
                </svg>

                {/* Value */}
                <div className="absolute inset-0 flex items-center justify-center text-sm font-semibold">
                  {item.value}
                </div>
              </div>

              {/* Label */}
              <div className="text-xs text-gray-500 mt-2 text-center">
                {item.label}
              </div>

            </div>
          ))}
        </div>

        {/* RIGHT - Buttons */}
        <div className="flex flex-col gap-3">

          <button className=" text-gray-400">
            Apply Leave
          </button>

          <button className="text-sm text-gray-600 underline">
            View all leave balance
          </button>

        </div>

      </div>
    </div>
  );
}