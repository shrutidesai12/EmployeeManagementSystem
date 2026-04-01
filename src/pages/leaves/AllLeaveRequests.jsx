import React from "react";

export default function AllLeaveRequests({ data = [] }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm">

      {/* HEADER */}
      <div className="flex justify-between px-4 py-3 border-b border-gray-200">
        <h3 className="text-sm font-semibold text-gray-800">
          All Leave Requests
        </h3>
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto">
        <table className="w-full text-xs text-left border-collapse">

          {/* HEAD */}
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="px-3 py-2">Employee</th>
              <th className="px-3 py-2">Department</th>
              <th className="px-3 py-2">Leave Type</th>
              <th className="px-3 py-2">Days</th>
              <th className="px-3 py-2">Date</th>
              <th className="px-3 py-2">Status</th>
            </tr>
          </thead>

          {/* BODY */}
          <tbody>
            {data.map((item, i) => (
              <tr key={i} className="border-b hover:bg-gray-50 border-gray-200">

                {/* EMPLOYEE */}
                <td className="px-3 py-3 flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs font-semibold">
                    {item.initials}
                  </div>
                  <span className="text-gray-800 font-medium">
                    {item.name}
                  </span>
                </td>

                {/* DEPT */}
                <td className="px-3 py-3 text-gray-600">
                  {item.dept}
                </td>

                {/* TYPE */}
                <td className="px-3 py-3 text-gray-600">
                  {item.type}
                </td>

                {/* DAYS */}
                <td className="px-3 py-3 text-gray-600">
                  {item.days}
                </td>

                {/* DATE */}
                <td className="px-3 py-3 text-gray-600">
                  {item.from} → {item.to}
                </td>

                {/* STATUS */}
                <td className="px-3 py-3">
                  <span className="bg-yellow-100 text-yellow-600 px-2 py-[2px] rounded-full text-[10px]">
                    Pending
                  </span>
                </td>

              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}