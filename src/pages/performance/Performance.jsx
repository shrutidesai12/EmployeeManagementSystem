import React from "react";

/* ================= DATA ================= */

const employees = [
  {
    name: "Sarah Chen",
    role: "Senior React Developer",
    initials: "SC",
    goals: "1/3",
    self: 4.6,
    client: 4.8,
    overall: 3.8,
    status: "Needs Attention",
  },
  {
    name: "Marcus Johnson",
    role: "Full Stack Engineer",
    initials: "MJ",
    goals: "1/3",
    self: 4.1,
    client: 4.1,
    overall: 4.2,
    status: "On Track",
  },
  {
    name: "Aisha Patel",
    role: "UX Designer",
    initials: "AP",
    goals: "1/4",
    self: 3.4,
    client: 3.7,
    overall: 3.6,
    status: "Needs Attention",
  },
  {
    name: "James Wright",
    role: "DevOps Engineer",
    initials: "JW",
    goals: "3/4",
    self: 4.2,
    client: 4.1,
    overall: 3.8,
    status: "Needs Attention",
  },
  {
    name: "Elena Rodriguez",
    role: "Project Manager",
    initials: "ER",
    goals: "1/5",
    self: 4.1,
    client: 4.6,
    overall: 4.4,
    status: "On Track",
  },
];

/* ================= COMPONENT ================= */

export default function Performance() {
  return (
    <div className="min-h-screen bg-gray-200 p-6">

      {/* HEADER */}
      <div className="mb-4">
        <h1 className="text-xl font-semibold text-gray-900">
          Performance & Reviews
        </h1>
        <p className="text-sm text-gray-500">
          Goal setting · Self reviews · Client satisfaction · Team performance
        </p>
      </div>

      {/* TABLE */}
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md shadow-gray-300/50"> 
       <table className="w-full text-sm">

          {/* HEADER */}
          <thead className="bg-gray-50 text-gray-500 text-xs uppercase">
            <tr>
              <th className="px-6 py-3 text-left">Employee</th>
              <th className="px-4 py-3 text-left">Goals</th>
              <th className="px-4 py-3 text-left">Self Review</th>
              <th className="px-4 py-3 text-left">Client Sat.</th>
              <th className="px-4 py-3 text-left">Overall</th>
              <th className="px-4 py-3 text-left">Status</th>
            </tr>
          </thead>

          {/* BODY */}
          <tbody>
            {employees.map((emp, i) => (
              <tr key={i} className="border-t hover:bg-gray-50 border-gray-200">

                {/* EMPLOYEE */}
                <td className="px-6 py-4 flex items-center gap-3">
                  <div className="w-8 h-8 bg-indigo-100 text-indigo-600 flex items-center justify-center rounded font-semibold text-xs">
                    {emp.initials}
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">{emp.name}</p>
                    <p className="text-xs text-gray-500">{emp.role}</p>
                  </div>
                </td>

                <td className="px-4 py-4 text-gray-600">{emp.goals}</td>

                <td className="px-4 py-4 text-blue-600 font-medium">
                  {emp.self}
                </td>

                <td className="px-4 py-4 text-indigo-600 font-medium">
                  {emp.client}
                </td>

                {/* OVERALL */}
                <td
                  className={`px-4 py-4 font-semibold ${
                    emp.overall >= 4
                      ? "text-green-600"
                      : "text-orange-500"
                  }`}
                >
                  {emp.overall}
                </td>

                {/* STATUS */}
                <td className="px-4 py-4">
                  <span
                    className={`text-xs px-2 py-1 rounded ${
                      emp.status === "On Track"
                        ? "bg-green-100 text-green-600"
                        : "bg-orange-100 text-orange-600"
                    }`}
                  >
                    {emp.status === "On Track"
                      ? "ON TRACK"
                      : "NEEDS ATTN"}
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