import React, { useState } from "react";
import AttendanceOverviewTable from "./AttendanceOverviewTable";
import Timesheet from "../../components/MeComponents/Timesheet";
export default function AttendanceBottomTabs() {
  const [bottomTab, setBottomTab] = useState("Overview"); // default to Overview
  const [is24Hour, setIs24Hour] = useState(false);

  const tabs = ["Overview", "Calendar", "Requests", "History"];

  return (
    <div className="mt-8 w-full">
      {/* Heading */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-[18px] font-medium text-[#1f1f1f]">
          Logs & Requests
        </h2>

        <div className="flex items-center gap-4">
          {/* Toggle */}
          <button
            onClick={() => setIs24Hour(!is24Hour)}
            className={`relative w-10 h-5 rounded-full transition ${
              is24Hour ? "bg-[#6b4fd3]" : "bg-gray-400"
            }`}
          >
            <div
              className={`absolute top-[2px] w-4 h-4 bg-white rounded-full shadow-md transition-all ${
                is24Hour ? "left-[22px]" : "left-[2px]"
              }`}
            ></div>
          </button>

          <button
            onClick={() => setIs24Hour(!is24Hour)}
            className="text-[14px] text-[#6b4fd3] font-medium hover:underline"
          >
            24 Hour Format
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border border-gray-200 rounded-sm overflow-hidden w-full">
        <div className="flex border-b border-gray-200 bg-white">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setBottomTab(tab)}
              className={`px-6 py-3 text-[14px] font-medium transition-all ${
                bottomTab === tab
                  ? "bg-[#f3efff] text-[#0a0f0d]"
                  : "text-gray-500 hover:bg-[#f9f7ff] hover:text-[#6b4fd3]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Render Content Based on Tab */}
      <div className="mt-4 w-full">
        {bottomTab === "Overview" && <AttendanceOverviewTable />}
        {bottomTab === "Calendar" && (
          <div className="p-4 text-gray-500">Calendar Tab Content</div>
        )}
        {bottomTab === "Requests" && (
          <div className="p-4 text-gray-500">Requests Tab Content</div>
        )}
        {bottomTab === "History" && (
          <div className="p-4 text-gray-500">History Tab Content</div>
        )}
      </div>
    </div>
  );
}