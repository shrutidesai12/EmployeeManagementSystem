// import React, { useState } from "react";
// import {
//   Users,
//   Activity,
//   ShieldAlert,
//   UserPlus,
//   Search,
//   Filter,
//   Eye,
// } from "lucide-react";

// /* ================= DATA ================= */
// const employees = [
//   {
//     name: "Sarah Chen",
//     initials: "SC",
//     tenure: "3.5y tenure",
//     dept: "Engineering",
//     role: "Senior Engineer",
//     utilization: 92,
//     rating: 4.8,
//     risk: "Low Risk",
//     availability: "Overloaded",
//   },
//   {
//     name: "Lisa Nakamura",
//     initials: "LN",
//     tenure: "2.8y tenure",
//     dept: "Design",
//     role: "UX Lead",
//     utilization: 72,
//     rating: 4.6,
//     risk: "Low Risk",
//     availability: "Partial",
//   },
//   {
//     name: "David Kim",
//     initials: "DK",
//     tenure: "1.2y tenure",
//     dept: "Engineering",
//     role: "Full Stack Engineer",
//     utilization: 85,
//     rating: 4.4,
//     risk: "Low Risk",
//     availability: "Partial",
//   },
// ];

// /* ================= KPI ================= */
// const KPI = ({ icon: Icon, label, value, color }) => (
// <div className="bg-white rounded-xl p-5 flex items-center gap-4 shadow-md shadow-gray-300/40">
//     <div className={`w-10 h-10 flex items-center justify-center rounded-full ${color}`}>
//       <Icon size={18} />
//     </div>
//     <div>
//       <p className="text-xs text-gray-500">{label}</p>
//       <p className="text-2xl font-semibold text-gray-900">{value}</p>
//     </div>
//   </div>
// );

// /* ================= STARS ================= */
// const Stars = ({ value }) => {
//   const full = Math.floor(value);
//   return (
//     <div className="flex items-center gap-1">
//       {[...Array(5)].map((_, i) => (
//         <span key={i} className={i < full ? "text-orange-400" : "text-gray-300"}>
//           ★
//         </span>
//       ))}
//       <span className="text-gray-500 ml-1 text-sm">{value}</span>
//     </div>
//   );
// };

// /* ================= PROGRESS ================= */
// const Progress = ({ value }) => (
//   <div className="flex items-center gap-3">
//     <div className="w-32 h-2 bg-gray-200 rounded-full">
//       <div
//         className={`h-2 rounded-full ${
//           value > 90 ? "bg-orange-500" : "bg-indigo-500"
//         }`}
//         style={{ width: `${value}%` }}
//       />
//     </div>
//     <span className="text-sm text-gray-700">{value}%</span>
//   </div>
// );

// /* ================= MAIN ================= */
// export default function EmployeeUI() {
//   const [showFilters, setShowFilters] = useState(true);

//   return (
//     <div className="min-h-screen bg-gray-200 p-6">

//       {/* HEADER */}
//       <div className="flex justify-between items-center mb-6">
//         <div>
//           <h1 className="text-2xl font-semibold text-gray-900">Employees</h1>
//           <p className="text-sm text-gray-500">
//             Analyze workforce performance, skills, and retention.
//           </p>
//         </div>

//         <div className="flex gap-3">
//           <button className="bg-white px-4 py-2 rounded-lg text-sm shadow-sm">
//             Leave Management
//           </button>
//           <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm shadow-sm">
//             Add Employee
//           </button>
//         </div>
//       </div>

//       {/* KPI */}
//       <div className="grid grid-cols-4 gap-4 mb-6">
//         <KPI icon={Users} label="TOTAL HEADCOUNT" value="12" color="bg-indigo-100 text-indigo-600" />
//         <KPI icon={Activity} label="AVG UTILIZATION" value="78.9%" color="bg-green-100 text-green-600" />
//         <KPI icon={ShieldAlert} label="HIGH RISK" value="3" color="bg-red-100 text-red-600" />
//         <KPI icon={UserPlus} label="NEW HIRES" value="8" color="bg-blue-100 text-blue-600" />
//       </div>

// <div className="bg-white rounded-xl shadow-md shadow-gray-300/40 overflow-hidden">
//   {/* 🔍 SEARCH + FILTER (TOP SECTION) */}
//   <div className="p-4 border-b border-gray-100">
//     <div className="flex items-center gap-4">

//       <div className="flex items-center border border-gray-200 px-3 py-2 rounded-lg w-96">
//         <Search size={16} className="text-gray-400 mr-2" />
//         <input
//           placeholder="Search employees by name, role, or department..."
//           className="outline-none text-sm w-full"
//         />
//       </div>

//       <button
//         onClick={() => setShowFilters(!showFilters)}
//         className="flex items-center gap-2 border border-gray-200 px-4 py-2 rounded-lg text-indigo-600"
//       >
//         <Filter size={16} />
//         Filters
//       </button>

//       <span className="text-sm text-gray-500">12 of 12</span>
//     </div>

//     {/* FILTER ROW */}
//     {showFilters && (
//       <div className="flex gap-6 mt-4 text-sm">
//         <div>
//           Department:
//           <select className="ml-2 border border-gray-200 px-2 py-1 rounded">
//             <option>All</option>
//           </select>
//         </div>

//         <div>
//           Risk:
//           <select className="ml-2 border border-gray-200 px-2 py-1 rounded">
//             <option>All</option>
//           </select>
//         </div>

//         <div>
//           Availability:
//           <select className="ml-2 border border-gray-200 px-2 py-1 rounded">
//             <option>All</option>
//           </select>
//         </div>
//       </div>
//     )}
//   </div>

//   {/* 📊 TABLE SECTION */}
//   <table className="w-full text-sm">
//     <thead className="bg-gray-50 text-gray-500 text-xs uppercase">
//       <tr>
//         <th className="p-4 text-left">Employee</th>
//         <th>Department & Role</th>
//         <th>Utilization</th>
//         <th>Performance</th>
//         <th>Attrition Risk</th>
//         <th>Availability</th>
//         <th>Actions</th>
//       </tr>
//     </thead>

//     <tbody>
//       {employees.map((emp, i) => (
//         <tr key={i} className="border-t border-gray-100 hover:bg-gray-50">
//           <td className="p-4 flex items-center gap-3">
//             <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-medium">
//               {emp.initials}
//             </div>
//             <div>
//               <p className="font-medium text-gray-900">{emp.name}</p>
//               <p className="text-xs text-gray-500">{emp.tenure}</p>
//             </div>
//           </td>

//           <td>
//             <p className="text-gray-900">{emp.dept}</p>
//             <p className="text-xs text-gray-500">{emp.role}</p>
//           </td>

//           <td>
//             <Progress value={emp.utilization} />
//           </td>

//           <td>
//             <Stars value={emp.rating} />
//           </td>

//           <td>
//             <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs">
//               {emp.risk}
//             </span>
//           </td>

//           <td
//             className={`font-medium ${
//               emp.availability === "Overloaded"
//                 ? "text-red-500"
//                 : "text-orange-500"
//             }`}
//           >
//             {emp.availability}
//           </td>

//           <td>
//             <Eye className="text-gray-500 cursor-pointer" size={18} />
//           </td>
//         </tr>
//       ))}
//     </tbody>
//   </table>
// </div>
//     </div>
//   );
// }





import React, { useState } from "react";
import { Users, Activity, ShieldAlert, UserPlus } from "lucide-react";

import KPICard from "../../components/ui/KPICard";
import EmployeeFilters from "../employee/components/EmployeeFilters";
import EmployeeTable from "../employee/components/EmployeeTable";

/* DATA */


export default function Employees() {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Sarah Chen",
      initials: "SC",
      tenure: "3.5y tenure",
      dept: "Engineering",
      role: "Senior Engineer",
      utilization: 92,
      rating: 4.8,
      risk: "Low Risk",
      availability: "Overloaded",
    },
    {
      id: 2,
      name: "Lisa Nakamura",
      initials: "LN",
      tenure: "2.8y tenure",
      dept: "Design",
      role: "UX Lead",
      utilization: 72,
      rating: 4.6,
      risk: "Low Risk",
      availability: "Partial",
    },
    {
      id: 3,
      name: "David Kim",
      initials: "DK",
      tenure: "1.2y tenure",
      dept: "Engineering",
      role: "Full Stack Engineer",
      utilization: 85,
      rating: 4.4,
      risk: "Low Risk",
      availability: "Partial",
    },
  ]);
  const [showFilters, setShowFilters] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    dept: "",
    role: "",
    utilization: "",
    rating: "",
    risk: "Low Risk",
    availability: "Available",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  // ✅ SAVE FUNCTION
  const handleSave = () => {
    const newEmployee = {
      id: Date.now(),
      name: formData.name,
      initials: formData.name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase(),
      tenure: "0y tenure",
      dept: formData.dept,
      role: formData.role,
      utilization: Number(formData.utilization),
      rating: Number(formData.rating),
      risk: formData.risk,
      availability: formData.availability,
    };

    setEmployees([...employees, newEmployee]);

    setShowModal(false);

    setFormData({
      name: "",
      dept: "",
      role: "",
      utilization: "",
      rating: "",
      risk: "Low Risk",
      availability: "Available",
    });
  };
  const [filters, setFilters] = useState({
    department: "All",
    risk: "All",
    availability: "All",
  });

 const filteredEmployees = employees.filter((emp) => {
  return (
    // 🔍 SEARCH LOGIC
    emp.name.toLowerCase().includes(search.toLowerCase()) &&

    // existing filters
    (filters.department === "All" || emp.dept === filters.department) &&
    (filters.risk === "All" || emp.risk === filters.risk) &&
    (filters.availability === "All" || emp.availability === filters.availability)
  );
});

  return (
    <div className="min-h-screen bg-gray-200 p-6">

      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Employees</h1>
          <p className="text-sm text-gray-500">
            Analyze workforce performance, skills, and retention.
          </p>
        </div>

        <div className="flex gap-3">
          <button className="bg-white px-4 py-2 rounded-lg text-sm shadow-sm">
            Leave Management
          </button>
          <button
            onClick={() => setShowModal(true)}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm shadow-sm"
          >
            Add Employee
          </button>
        </div>
      </div>

      {/* KPI */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <KPICard icon={Users} label="TOTAL HEADCOUNT" value="12" color="bg-indigo-100 text-indigo-600" />
        <KPICard icon={Activity} label="AVG UTILIZATION" value="78.9%" color="bg-green-100 text-green-600" />
        <KPICard icon={ShieldAlert} label="HIGH RISK" value="3" color="bg-red-100 text-red-600" />
        <KPICard icon={UserPlus} label="NEW HIRES" value="8" color="bg-blue-100 text-blue-600" />
      </div>

      {/* TABLE CONTAINER */}
      <div className="bg-white rounded-xl shadow-md shadow-gray-300/40 overflow-hidden">

        {/* ✅ PASS FILTERS HERE */}
        <EmployeeFilters
          showFilters={showFilters}
          setShowFilters={setShowFilters}
          filters={filters}
          setFilters={setFilters}
           search={search}
           setSearch={setSearch}
        />

        {/* ✅ PASS FILTERED DATA */}
        <EmployeeTable employees={filteredEmployees} />

      </div>
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

          {/* MODAL */}
          <div className="bg-white rounded-xl w-full max-w-lg p-6 shadow-lg relative">

            {/* CLOSE */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>

            <h2 className="text-lg font-semibold mb-5">Add Employee</h2>

            {/* FORM */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              {/* Employee Name */}
              <div className="md:col-span-2">
                <label className="text-xs text-gray-500">Employee Name</label>
                <input
                  type="text"
                  placeholder="Enter name"
                  className="w-full border rounded-md px-3 py-2 text-sm mt-1 border-gray-200"
                />
              </div>

              {/* Department */}
              <div>
                <label className="text-xs text-gray-500">Department</label>
                <input
                  type="text"
                  placeholder="Engineering"
                  className="w-full border rounded-md px-3 py-2 text-sm mt-1 border-gray-200"
                />
              </div>

              {/* Role */}
              <div>
                <label className="text-xs text-gray-500">Role</label>
                <input
                  type="text"
                  placeholder="Frontend Developer"
                  className="w-full border rounded-md px-3 py-2 text-sm mt-1 border-gray-200"
                />
              </div>

              {/* Utilization */}
              <div>
                <label className="text-xs text-gray-500">Utilization (%)</label>
                <input
                  type="number"
                  placeholder="80"
                  className="w-full border rounded-md px-3 py-2 text-sm mt-1 border-gray-200"
                />
              </div>

              {/* Performance */}
              <div>
                <label className="text-xs text-gray-500">Performance</label>
                <input
                  type="number"
                  step="0.1"
                  placeholder="4.5"
                  className="w-full border rounded-md px-3 py-2 text-sm mt-1 border-gray-200"
                />
              </div>

              {/* Attrition Risk */}
              <div>
                <label className="text-xs text-gray-500">Attrition Risk</label>
                <select className="w-full border rounded-md px-3 py-2 text-sm mt-1 border-gray-200">
                  <option>Low Risk</option>
                  <option>Medium Risk</option>
                  <option>High Risk</option>
                </select>
              </div>

              {/* Availability */}
              <div>
                <label className="text-xs text-gray-500">Availability</label>
                <select className="w-full border rounded-md px-3 py-2 text-sm mt-1 border-gray-200">
                  <option>Available</option>
                  <option>Partial</option>
                  <option>Overloaded</option>
                </select>
              </div>

            </div>

            {/* ACTIONS */}
            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 text-sm border rounded-md border-gray-200"
              >
                Cancel
              </button>

              <button onClick={handleSave} className="bg-[#718FC2] text-white px-4 py-2 rounded">
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}