




import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Mail, Phone, MapPin, Calendar, Pencil } from "lucide-react";
import EmployeeSkill from "./EmployeeSkill";
import ProjectExperience from "./ProjectExperience";

const tabs = [
  { key: "info", label: "Identity & Info" },
  { key: "skills", label: "Skills & Certifications" },
  { key: "project", label: "Project Experience" },
  { key: "availability", label: "Work Availability" },
  { key: "performance", label: "Performance" },
  { key: "growth", label: "L & D Growth" },
];

const Row = ({ label, value }) => (
  <div className="flex justify-between py-2 sm:py-3 border-b border-gray-200 text-sm sm:text-sm">
    <span className="text-gray-500">{label}</span>
    <span className="text-gray-800 font-medium">{value}</span>
  </div>
);

export default function EmployeeDetail() {
  const [activeTab, setActiveTab] = useState("info");
  const navigate = useNavigate();
  const { state: emp } = useLocation();

  if (!emp) {
    return (
      <div className="p-4 sm:p-6">
        <button
          onClick={() => navigate("/employees")}
          className="text-blue-600 text-sm mb-4 hover:underline"
        >
          ← Back to Employee Hub
        </button>
        <p>No employee data found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-200 p-4 sm:p-6">

      {/* BACK BUTTON */}
      <button
        onClick={() => navigate("/employees")}
        className="text-blue-600 text-sm mb-4 hover:underline"
      >
        ← Back to Employee Hub
      </button>

      {/* HEADER */}
      <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6 flex flex-col lg:flex-row justify-between gap-6">

        {/* LEFT */}
        <div className="flex flex-col sm:flex-row gap-4 flex-1">
          <div className="w-14 h-14 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-semibold text-lg">
            {emp.initials}
          </div>

          <div className="space-y-2 min-w-[200px] flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-800">{emp.name}</h2>
              <span className="text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-600">Active</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-green-50 text-green-600">Low Risk</span>
            </div>
            <p className="text-sm text-gray-500">{emp.role} · {emp.dept}</p>
            <p className="text-xs text-gray-400">EMP0001 · Reports to N/A</p>

            <div className="flex flex-wrap gap-4 text-xs text-gray-500 mt-2">
              <div className="flex items-center gap-1"><Mail size={14} /><span>{emp.name.toLowerCase().replace(" ", ".")}@company.com</span></div>
              <div className="flex items-center gap-1"><Phone size={14} /><span>+91 9800012345</span></div>
              <div className="flex items-center gap-1"><MapPin size={14} /><span>Bangalore, IN</span></div>
              <div className="flex items-center gap-1"><Calendar size={14} /><span>Joined Jan 2021</span></div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center mt-4 lg:mt-0">

          <button className="border px-3 py-1.5 rounded-md text-sm sm:text-sm flex items-center gap-2 text-gray-600 hover:bg-gray-50">
            <Pencil size={14} /> Edit Profile
          </button>

          <div className="bg-indigo-50 px-4 py-3 rounded-lg text-center min-w-[90px]">
            <p className="text-xl sm:text-2xl font-bold text-indigo-600">{emp.utilization || "92%"}</p>
            <p className="text-xs text-gray-500 mt-1">Utilization</p>
          </div>

          <div className="bg-green-50 px-4 py-3 rounded-lg text-center min-w-[90px]">
            <p className="text-xl sm:text-2xl font-bold text-green-600">{emp.tenure || "3.5y"}</p>
            <p className="text-xs text-gray-500 mt-1">Tenure</p>
          </div>

        </div>
      </div>
      {/* //tabs */}
      <div className="flex gap-6 sm:gap-8 mt-6 border-b border-gray-300 text-sm overflow-x-auto">
        {tabs.map((tab) => (
          <span
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`pb-2 cursor-pointer whitespace-nowrap transition ${activeTab === tab.key
                ? "border-b-2 border-blue-600 text-blue-600 font-medium"
                : "text-gray-500 hover:text-gray-700"
              }`}
          >
            {tab.label}
          </span>
        ))}
      </div>

      {/* INFO TAB */}
      {activeTab === "info" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-6">

          {/* Personal Info */}
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h3 className="text-xs sm:text-sm font-semibold text-gray-600 mb-4">Personal Information</h3>
            <Row label="Full Name" value={emp.name} />
            <Row label="Designation" value={emp.role} />
            <Row label="Department" value={emp.dept} />
            <Row label="Team" value={emp.team || "Engineering Team"} />
            <Row label="Employee Code" value={emp.empCode || "EMP0001"} />
            <Row label="Work Location" value={emp.location || "Bangalore, IN"} />
          </div>

          {/* Contact & Reporting */}
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h3 className="text-xs sm:text-sm font-semibold text-gray-600 mb-4">Contact & Reporting</h3>
            <Row label="Work Email" value={emp.email || `${emp.name.toLowerCase().replace(" ", ".")}@company.com`} />
            <Row label="Phone" value={emp.phone || "+91 9800012345"} />
            <Row label="Manager" value={emp.manager || "—"} />
            <Row label="Join Date" value={emp.joinDate || "2021-01-10"} />
            <Row label="Tenure" value={emp.tenure || "3.5 years"} />
            <Row label="Status" value={emp.status || "Active"} />
          </div>
          {/* Quick Metrics */}
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h3 className="text-xs sm:text-sm font-semibold text-gray-600 mb-4">Quick Metrics</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-100 text-center p-4 rounded-lg">
                <p className="text-xl sm:text-2xl font-bold text-yellow-600">{emp.utilization || "92%"}</p>
                <p className="text-xs text-gray-500 mt-1">Utilization</p>
              </div>
              <div className="bg-gray-100 text-center p-4 rounded-lg">
                <p className="text-xl sm:text-2xl font-bold text-green-600">{emp.performance || "4.8/5.0"}</p>
                <p className="text-xs text-gray-500 mt-1">Performance</p>
              </div>
              <div className="bg-gray-100 text-center p-4 rounded-lg">
                <p className="text-lg sm:text-xl font-bold text-green-600">{emp.attritionRisk || "Low"}</p>
                <p className="text-xs text-gray-500 mt-1">Attrition Risk</p>
              </div>
              <div className="bg-gray-100 text-center p-4 rounded-lg">
                <p className="text-lg sm:text-xl font-bold text-gray-800">{emp.role}</p>
                <p className="text-xs text-gray-500 mt-1">Role</p>
              </div>
            </div>
          </div>

          {/* Documents */}
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h3 className="text-xs sm:text-sm font-semibold text-gray-600 mb-4">Documents</h3>
            <div className="flex flex-col divide-y divide-gray-100">
              {(emp.documents || [
                { name: "Offer Letter" },
                { name: "Employment Contract" },
                { name: "NDA Agreement" },
                { name: "Performance Review 2024" }
              ]).map((doc, i) => (
                <div key={i} className="flex justify-between py-2">
                  <span className="text-sm text-gray-800">{doc.name}</span>
                  <a href={doc.url || "#"} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline text-xs">View</a>
                </div>
              ))}
            </div>
          </div>

        </div>
      )}

      {/* SKILLS TAB */}
      {activeTab === "skills" && (
        <div className="mt-6">
          <EmployeeSkill emp={emp} />
        </div>
      )}
 {activeTab === "project" && (
  <div className="mt-6">
    <ProjectExperience />
  </div>
)}
      {activeTab === "availability" && (
        <div className="mt-6 bg-white border border-gray-200 rounded-lg p-5">
          <h3 className="font-semibold mb-4">Work Availability</h3>
          <p className="text-sm text-gray-500">Available for new assignments</p>
        </div>
      )}
      {activeTab === "growth" && (
        <div className="mt-6 bg-white border border-gray-200 rounded-lg p-5">
          <h3 className="font-semibold mb-4">Learning & Development</h3>
          <p className="text-sm text-gray-500">Track employee growth & training</p>
        </div>
      )}
    </div>
  );
}