import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";


export default function PendingLeavesContent({
  data = [],
  showHeader = true,
  onViewAll,
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">

      {/* HEADER */}
      {showHeader && (
        <div className="flex justify-between mb-3 border-b pb-2 border-gray-200">
          <h3 className="text-sm font-semibold text-gray-800">
            Recent Pending Leaves
          </h3>

          {onViewAll && (
            <button
              onClick={onViewAll}
              className="text-xs text-indigo-600 hover:underline"
            >
              View all
            </button>
          )}
        </div>
      )}

      {/* LIST */}
      <div className="space-y-3">
        {data.map((item, i) => (
          <PendingRow key={i} item={item} />
        ))}
      </div>
    </div>
  );
}

/* 🔁 ROW */
const PendingRow = ({ item }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b pb-2 border-gray-200">

      {/* 🔥 CLICKABLE ROW */}
      <div
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center cursor-pointer hover:bg-gray-50 px-2 py-2 rounded"
      >
        {/* LEFT */}
        <div className="flex gap-2">
          <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs font-semibold">
            {item.initials}
          </div>

          <div>
            <p className="text-sm font-medium">{item.name}</p>
            <p className="text-[11px] text-gray-500">
              {item.dept} · {item.type} · {item.days} days
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3">
          <span className="text-xs text-gray-600">
            {item.from} → {item.to}
          </span>

          {/* 🔄 Arrow (no separate click needed) */}
          <span
            className={`transition-transform duration-200 ${
              open ? "rotate-180" : ""
            }`}
          >
          <MdKeyboardArrowDown />
          </span>
        </div>
      </div>

      {/* 🔥 EXPAND CARD */}
      {open && (
        <div
          onClick={(e) => e.stopPropagation()} // ✅ prevent closing when clicking buttons
          className="mt-3 ml-10 bg-gray-50 border rounded-lg p-3 text-xs space-y-2 border-gray-200"
        >
          <p><b>Type:</b> {item.type}</p>
          <p><b>Date:</b> {item.from} → {item.to}</p>
          <p><b>Days:</b> {item.days}</p>
          <p><b>Reason:</b> Personal work</p>

          <div className="flex gap-2 pt-2">
            <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded">
              Approve
            </button>

            <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">
              Reject
            </button>
          </div>
        </div>
      )}
    </div>
  );
};