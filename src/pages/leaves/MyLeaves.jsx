import React, { useState } from "react";
import KPICard from "../../components/ui/KPICard";
import { FaRegCalendarAlt } from "react-icons/fa";
import LeaveTypesTable from "./LeaveTypesTable";

/* ================= DEMO DATA ================= */
const myLeaves = [
  {
    type: "CL",
    from: "2026-03-10",
    to: "2026-03-12",
    days: 3,
    reason: "Family function",
    status: "Approved",
    appliedOn: "2026-03-05",
  },
  {
    type: "SL",
    from: "2026-03-15",
    to: "2026-03-16",
    days: 2,
    reason: "Medical",
    status: "Pending",
    appliedOn: "2026-03-12",
  },
];

const leaveTypes = [
  { title: "Annual Leave", days: "21 days/year", desc: "Planned vacation" },
  { title: "Sick Leave", days: "10 days/year", desc: "Medical leave" },
  { title: "Casual Leave", days: "12 days/year", desc: "Short personal leave" },
];

/* ================= COMPONENT ================= */
export default function MyLeaves() {
  const [activeTab, setActiveTab] = useState("myLeave");

  return (
    <div className="min-h-screen bg-gray-200 p-6 space-y-6">

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <KPICard
          icon={FaRegCalendarAlt}
          label="SL"
          value="7/10"
          color="bg-green-100 text-green-600"
        />
        <KPICard
          icon={FaRegCalendarAlt}
          label="CL"
          value="3/5"
          color="bg-blue-100 text-blue-600"
        />
        <KPICard
          icon={FaRegCalendarAlt}
          label="PL"
          value="2/5"
          color="bg-yellow-100 text-yellow-600"
        />
      </div>

      {/* Tabs */}
      <div className="flex gap-6 border-b border-gray-300 text-xs">
        <Tab label="My Leaves" active={activeTab === "myLeave"} onClick={() => setActiveTab("myLeave")} />
        <Tab label="Leave Types" active={activeTab === "types"} onClick={() => setActiveTab("types")} />
      </div>

      {/* Tab Content */}
      {activeTab === "myLeave" && (
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 mt-4 overflow-x-auto">
          <table className="w-full text-xs text-left border-collapse">
            <thead className="bg-gray-100">
              <tr className="text-gray-500 border-b">
                <th className="py-2 px-2">Type</th>
                <th className="py-2 px-2">From</th>
                <th className="py-2 px-2">To</th>
                <th className="py-2 px-2">Days</th>
                <th className="py-2 px-2">Reason</th>
                <th className="py-2 px-2">Status</th>
                <th className="py-2 px-2">Applied On</th>
                <th className="py-2 px-2 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {myLeaves.map((leave, i) => (
                <tr key={i} className="border-b hover:bg-gray-50">
                  <td className="py-2 px-2 font-medium">{leave.type}</td>
                  <td className="py-2 px-2">{leave.from}</td>
                  <td className="py-2 px-2">{leave.to}</td>
                  <td className="py-2 px-2">{leave.days}</td>
                  <td className="py-2 px-2">{leave.reason}</td>
                  <td className="py-2 px-2">
                    <span className={`px-2 py-1 rounded text-white text-[10px] ${
                      leave.status === "Approved"
                        ? "bg-green-500"
                        : leave.status === "Rejected"
                        ? "bg-red-500"
                        : "bg-yellow-500"
                    }`}>
                      {leave.status}
                    </span>
                  </td>
                  <td className="py-2 px-2">{leave.appliedOn}</td>
                  <td className="py-2 px-2 text-center">
                    {leave.status === "Pending" ? (
                      <button className="px-2 py-1 text-xs bg-indigo-600 text-white rounded">Cancel</button>
                    ) : (
                      "-"
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {activeTab === "types" && (
        <LeaveTypesTable leaveTypes={leaveTypes} />
      )}

    </div>
  );
}

/* TAB */
const Tab = ({ label, active, onClick }) => (
  <span
    onClick={onClick}
    className={`pb-2 cursor-pointer ${
      active
        ? "border-b-2 border-indigo-600 text-indigo-600"
        : "text-gray-500"
    }`}
  >
    {label}
  </span>
);