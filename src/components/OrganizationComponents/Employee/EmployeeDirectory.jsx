import React, { useState } from "react";
import { FiSearch } from "react-icons/fi"; // import the search icon


export default function EmployeeDirectory() {
  const allEmployees = [
    {
      name: "Eckerly, Aaron",
      role: "Finance",
      dept: "Finance",
      location: "Chennai",
      email: "aaron@company.com",
      mobile: "8105410708",
      img: "",
    },
    {
      name: "Fuller, Clark",
      role: "Finance",
      dept: "Finance",
      location: "Hyderabad",
      email: "clark@company.com",
      mobile: "8105410709",
      img:"",
    },
    {
      name: "Girard, Haleigh",
      role: "Data Analyst",
      dept: "Finance",
      location: "London",
      email: "haleigh@company.com",
      mobile: "8105410710",
      img: "https://c8.alamy.com/comp/3A5R78M/confident-young-indian-businesswoman-in-modern-office-with-city-view-professional-corporate-portrait-3A5R78M.jpg",
    },
    {
      name: "Hamm, Marie",
      role: "Finance",
      dept: "Finance",
      location: "Ahmedabad",
      email: "marie@company.com",
      mobile: "8105410711",
      img: "https://t3.ftcdn.net/jpg/03/48/39/40/360_F_348394011_e1kTyJJHDSKd5BZE6S3VXizesSgH4n1Y.jpg",
    },
    {
      name: "Handley, Darlene",
      role: "Finance",
      dept: "Finance",
      location: "Bhubaneswar",
      email: "darlene@company.com",
      mobile: "8105410712",
      img: "https://thumbs.dreamstime.com/b/confident-smiling-indian-young-business-woman-student-sales-professional-office-employee-hr-teacher-india-standing-arms-192389177.jpg",
    },
    {
      name: "Hartley, Holly",
      role: "Finance",
      dept: "Finance",
      location: "Bangalore",
      email: "holly@company.com",
      mobile: "8105410713",
      img: "https://thumbs.dreamstime.com/b/indian-professional-woman-has-curly-hairs-indian-professional-woman-looking-camera-369423717.jpg",
    },
    {
      name: "Holt, Adam",
      role: "Data Analyst",
      dept: "Finance",
      location: "London",
      email: "adam@company.com",
      mobile: "8105410714",
      img: "",
    },
    {
      name: "Jackson, Robert",
      role: "Finance",
      dept: "Finance",
      location: "Hyderabad",
      email: "robert@company.com",
      mobile: "8105410715",
      img: "",
    },
    {
      name: "Marie Curie",
      role: "Finance",
      dept: "Finance",
      location: "India HQ - Delhi",
      email: "marie.curie@gmail.com",
      mobile: "8105410716",
      img: "",
    },
    {
      name: "Ronald",
      role: "Data Analyst",
      dept: "Finance",
      location: "ME-HO-Dubai",
      email: "ronald@company.com",
      mobile: "8105410717",
      img: "",
    },
  ];

  const [departmentFilter, setDepartmentFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  // 🔹 Filter employees
  const filteredEmployees = allEmployees.filter((emp) => {
    const matchesDept =
      departmentFilter === "" || emp.dept === departmentFilter;
    const matchesLocation =
      locationFilter === "" || emp.location === locationFilter;
    const matchesSearch =
      searchQuery === "" ||
      emp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      emp.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      emp.email.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDept && matchesLocation && matchesSearch;
  });

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* HEADER */}
      <h1 className="text-xl font-semibold mb-4">Employee Directory</h1>
{/* FILTER BAR */}
<div className="bg-white rounded border border-gray-200 mb-5 p-4">
  <div className="flex flex-wrap items-center gap-3">
    {/* Department */}
    <select
      className="border border-gray-300 rounded px-3 py-2 text-sm bg-white focus:outline-none focus:ring-1 focus:ring-blue-400"
      value={departmentFilter}
      onChange={(e) => setDepartmentFilter(e.target.value)}
    >
      <option value="">Department</option>
      <option value="Finance">Finance</option>
      <option value="HR">HR</option>
    </select>

    {/* Location */}
    <select
      className="border border-gray-300 rounded px-3 py-2 text-sm bg-white focus:outline-none focus:ring-1 focus:ring-blue-400"
      value={locationFilter}
      onChange={(e) => setLocationFilter(e.target.value)}
    >
      <option value="">Location</option>
      <option value="Chennai">Chennai</option>
      <option value="Hyderabad">Hyderabad</option>
      <option value="Bangalore">Bangalore</option>
      <option value="London">London</option>
      <option value="Ahmedabad">Ahmedabad</option>
      <option value="Bhubaneswar">Bhubaneswar</option>
      <option value="India HQ - Delhi">India HQ - Delhi</option>
      <option value="ME-HO-Dubai">ME-HO-Dubai</option>
    </select>

    {/* Search with Icon */}
    <div className="relative flex-1 min-w-[200px]">
      <input
        type="text"
        placeholder="Search employees or actions..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full border border-gray-300 rounded px-10 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
      />
      <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
    </div>
  </div>

  {/* Showing text */}
  <div className="text-gray-500 text-xs text-right mt-2">
    Showing {filteredEmployees.length} of {allEmployees.length}
  </div>
</div>
      {/* EMPLOYEE GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {filteredEmployees.map((emp, index) => (
          <div
            key={index}
            className="bg-white p-4 shadow-sm border hover:shadow-md transition border-gray-200"
          >
            <div className="flex items-start gap-3">
              {/* IMAGE */}
              <img
                src={emp.img}
                alt={emp.name}
                className="w-12 h-12 rounded-full object-cover"
              />

              {/* DETAILS */}
              <div className="flex-1">
                <h3 className="font-semibold text-sm">{emp.name}</h3>
                <p className="text-xs text-gray-500">{emp.role}</p>

                <div className="mt-2 text-xs text-gray-600 space-y-1">
                  <p>
                    <span className="font-medium">Department:</span> {emp.dept}
                  </p>
                  <p>
                    <span className="font-medium">Location:</span>{" "}
                    {emp.location}
                  </p>
                  <p>
                    <span className="font-medium">Email:</span> {emp.email}
                  </p>
                  {emp.mobile && (
                    <p>
                      <span className="font-medium">Mobile:</span> {emp.mobile}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}