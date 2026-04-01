import React from "react";
import KPICard from "../../components/ui/KPICard";
import { Briefcase, Clock, Percent } from "lucide-react";

/* ================= DATA ================= */

const currentAssignments = [
  {
    project: "Apex CRM Overhaul",
    client: "Apex Technologies",
    role: "Senior Engineer",
    allocation: 60,
    billable: "Billable",
    since: "2024-09-01",
  },
];

const projectHistory = [
  {
    project: "EduLearn LMS",
    client: "EduLearn Platform",
    role: "Engineer",
    duration: "2023-06-01 — 2024-08-31",
    status: "Completed",
  },
  {
    project: "Finance Reporting Platform",
    client: "Global Finance Corp",
    role: "Contributor",
    duration: "2024-10-01 — 2025-01-31",
    status: "Completed",
  },
];

/* ================= COMPONENT ================= */

export default function ProjectExperience() {
  return (
    <div className="min-h-screen bg-gray-200 p-6 space-y-6">

      {/* ================= KPI CARDS ================= */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <KPICard
          icon={Briefcase}
          label="Active Projects"
          value="1"
          color="bg-indigo-100 text-indigo-600"
        />

        <KPICard
          icon={Clock}
          label="Billable Hours"
          value="1240"
          color="bg-green-100 text-green-600"
        />

        <KPICard
          icon={Percent}
          label="Allocation"
          value="60%"
          color="bg-gray-100 text-gray-800"
        />
      </div>

      {/* ================= CURRENT ASSIGNMENTS ================= */}
      <div className="bg-white rounded-xl shadow-md shadow-gray-300/40 overflow-hidden">
        <div className="px-6 py-3 border-b text-sm font-semibold text-gray-700 border-gray-200">
          Current Assignments
        </div>

        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-500 text-xs uppercase">
            <tr>
              <th className="px-6 py-3 text-left">Project</th>
              <th className="px-6 py-3 text-left">Client</th>
              <th className="px-6 py-3 text-left">Role</th>
              <th className="px-6 py-3 text-left">Allocation</th>
              <th className="px-6 py-3 text-left">Billable</th>
              <th className="px-6 py-3 text-left">Since</th>
            </tr>
          </thead>

          <tbody>
            {currentAssignments.map((item, i) => (
              <tr key={i} className="border-t border-gray-200">
                <td className="px-6 py-3 font-medium text-gray-800">
                  {item.project}
                </td>
                <td className="px-6 py-3 text-gray-500">
                  {item.client}
                </td>
                <td className="px-6 py-3 text-gray-500">
                  {item.role}
                </td>

                {/* Allocation */}
                <td className="px-6 py-3">
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-2 bg-gray-200 rounded">
                      <div
                        className="h-2 bg-indigo-500 rounded"
                        style={{ width: `${item.allocation}%` }}
                      />
                    </div>
                    <span className="text-xs text-gray-600">
                      {item.allocation}%
                    </span>
                  </div>
                </td>

                <td className="px-6 py-3 text-green-600 text-xs font-medium">
                  {item.billable}
                </td>

                <td className="px-6 py-3 text-gray-500 text-xs">
                  {item.since}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ================= PROJECT HISTORY ================= */}
      <div className="bg-white rounded-xl shadow-md shadow-gray-300/40 overflow-hidden">
        <div className="px-6 py-3 border-b text-sm font-semibold text-gray-700 border-gray-200">
          Project History
        </div>

        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-500 text-xs uppercase">
            <tr>
              <th className="px-6 py-3 text-left">Project</th>
              <th className="px-6 py-3 text-left">Client</th>
              <th className="px-6 py-3 text-left">Role</th>
              <th className="px-6 py-3 text-left">Duration</th>
              <th className="px-6 py-3 text-left">Status</th>
            </tr>
          </thead>

          <tbody>
            {projectHistory.map((item, i) => (
              <tr key={i} className="border-t border-gray-200">
                <td className="px-6 py-3 font-medium text-gray-800">
                  {item.project}
                </td>
                <td className="px-6 py-3 text-gray-500">
                  {item.client}
                </td>
                <td className="px-6 py-3 text-gray-500">
                  {item.role}
                </td>
                <td className="px-6 py-3 text-gray-500 text-xs">
                  {item.duration}
                </td>

                <td className="px-6 py-3">
                  <span className="bg-green-100 text-green-600 text-xs px-2 py-0.5 rounded-full">
                    {item.status}
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