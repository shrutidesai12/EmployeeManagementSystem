import React from "react";
import { Pencil, Trash2 } from "lucide-react";

export default function LeaveTypesTable({ leaveTypes }) {

  const colors = [
    "#6366F1",
    "#22C55E",
    "#EAB308",
    "#EC4899",
    "#3B82F6",
    "#F97316",
    "#14B8A6",
    "#A855F7",
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
      {/* ✅ removed p-1 and added overflow-hidden */}

      <div className="overflow-x-auto">
        <table className="w-full text-xs text-left border-collapse">

          {/* ✅ FULL WIDTH HEADER */}
          <thead className="bg-gray-100">
            <tr className="text-gray-500 border-b border-gray-200">
              <th className="px-3 py-3">Leave Type</th>
              <th className="px-3 py-3">Max Days</th>
              <th className="px-3 py-3">Carry Forward</th>
              <th className="px-3 py-3">Description</th>
              <th className="px-3 py-3 ">Action</th>
            </tr>
          </thead>

          {/* BODY */}
          <tbody>
            {leaveTypes.map((item, i) => (
              <tr
                key={i}
                className="border-b last:border-0 hover:bg-gray-50 group border-gray-200"
              >

                {/* NAME */}
                <td className="px-3 py-3 flex items-center gap-2">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: colors[i % colors.length] }}
                  ></span>

                  <span className="text-gray-800 font-medium">
                    {item.title}
                  </span>
                </td>

                {/* DAYS */}
                <td className="px-3 py-3 text-gray-600">
                  {item.days}
                </td>

                {/* CARRY */}
                <td className="px-3 py-3">
                  <span
                    className={`px-2 py-[2px] rounded-full text-[10px] ${
                      item.carry > 0
                        ? "bg-green-100 text-green-600"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {item.carry > 0 ? "Yes" : "No"}
                  </span>
                </td>

                {/* DESC */}
                <td className="px-3 py-3 text-gray-500">
                  {item.desc}
                </td>

                {/* ACTION */}
                <td className="px-3 py-3 ">
                  <div className="flex  gap-3 opacity-0 group-hover:opacity-100 transition">
                    <button className="text-gray-500 hover:text-indigo-600">
                      <Pencil size={14} />
                    </button>

                    <button className="text-gray-500 hover:text-red-600">
                      <Trash2 size={14} />
                    </button>
                  </div>
                </td>

              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}