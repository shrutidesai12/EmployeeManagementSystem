import React, { useState } from "react";

export default function ResignDrawer({ isOpen, onClose }) {
  const [discussion, setDiscussion] = useState("No");
  const [reason, setReason] = useState("");

  if (!isOpen) return null;

  const reasons = [
    "Career Growth",
    "Personal Reasons",
    "Health Issues",
    "Relocation",
    "Higher Studies",
  ];

  return (
    <div className="fixed top-[65px] right-0 bottom-0 left-0 z-50 flex justify-end ">
      
      {/* Drawer */}
      <div className="w-[420px] h-[calc(100vh-70px)] bg-white shadow-lg p-5 relative overflow-y-auto">

        {/* Header */}
        <h2 className="text-lg font-semibold mb-4">Resignation</h2>

        {/* SECTION 1 (Border box) */}
        <div className="border bg-blue-50 border-gray-300 rounded-md p-3 text-sm text-blue-800 mb-5">
          This will trigger your resignation process! It is always advisable to talk to your management first before coming here!
        </div>

        {/* SECTION 2 */}
        <div className="mb-4">
          <p className="text-sm text-gray-700 mb-2">
            Did you have discussion with manager on your decision to exit?
          </p>

          <div className="flex gap-6 text-sm">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="discussion"
                value="yes"
                onChange={(e) => setDiscussion(e.target.value)}
              />
              Yes
            </label>

            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="discussion"
                value="no"
                onChange={(e) => setDiscussion(e.target.value)}
              />
              No
            </label>
          </div>
        </div>

        {/* REASON DROPDOWN */}
        <div className="mb-4">
          <p className="text-sm text-gray-700 mb-1">
            Please select a reason for your resignation
          </p>

          <select
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
          >
            <option value="">Select reason</option>
            {reasons.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        {/* COMMENT */}
        <div className="mb-4">
          <p className="text-sm text-gray-700 mb-1">Comments</p>

          <textarea
            rows={4}
            placeholder="Enter your comments..."
            className="w-full border border-gray-300 rounded p-2 text-sm"
          />
        </div>

        {/* NOTE SECTION */}
        <div className="bg-blue-50 border border-blue-200 text-blue-800 text-sm p-3 rounded mb-6">
          Note: As per the company policy, you are required to serve notice period of 60 Days, till Dec 19, 2026.
        </div>

        {/* BUTTONS */}
        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 border rounded text-sm border-gray-200"
          >
            No.changed my mind
          </button>

          <button className="px-4 py-2 bg-[#718FC2] text-white rounded text-sm">
            Submit Resignation
          </button>
        </div>

        {/* CLOSE ICON */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500"
        >
          ✕
        </button>
      </div>
    </div>
  );
}