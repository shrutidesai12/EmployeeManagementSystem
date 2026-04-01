
import React from "react";
import { Search, Filter, X } from "lucide-react";

const EmployeeFilters = ({ showFilters, setShowFilters, filters, setFilters,  search,
  setSearch }) => {
  const activeCount = Object.values(filters).filter(val => val && val !== "All").length;

  const clearFilters = () => {
    setFilters({ department: "All", risk: "All", availability: "All" });
  };

  return (
    <div className="p-4 border-b border-gray-100">
      <div className="flex items-center gap-4">
        <div className="relative w-120 rounded-sm bg-gray-100">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
        <input
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  placeholder="Search employees..."
  className="border pl-11 pr-3 py-2 rounded-sm w-full text-sm border-gray-200"
/>
        </div>

        <button
          onClick={() => setShowFilters(!showFilters)}
          className="relative flex items-center gap-2 border px-4 py-1.5 rounded-sm border-gray-200 text-gray-500"
        >
          <Filter size={16} />
          Filters
          {activeCount > 0 && (
            <span className="absolute -top-2 -right-2 text-[8px] bg-red-500 text-white px-1.5 py-[1px] rounded-full">
              {activeCount}
            </span>
          )}
        </button>

        <span className="text-sm text-gray-500">12 of 12</span>
      </div>

      {/* FILTER PANEL */}
      {showFilters && (
        <div className="flex items-start gap-6 mt-4 text-sm">
          {/* Dropdowns */}
          <div className="flex gap-6">
            <FilterSelect
              label="Department"
              value={filters.department}
              options={["All", "HR", "IT", "Engineering", "Finance"]}
              onChange={(val) => setFilters({ ...filters, department: val })}
            />

            <FilterSelect
              label="Risk"
              value={filters.risk}
              options={["All", "Low Risk", "Medium", "High"]}
              onChange={(val) => setFilters({ ...filters, risk: val })}
            />

            <FilterSelect
              label="Availability"
              value={filters.availability}
              options={["All", "Available", "Overloaded", "Idle"]}
              onChange={(val) => setFilters({ ...filters, availability: val })}
            />
          </div>

          {activeCount > 0 && (
            <button
              onClick={clearFilters}
              className="ml-2 flex items-center gap-1 text-sm text-red-500 hover:underline"
            >
              <X size={14} />
              Clear All
            </button>
          )}
        </div>
      )}

      {activeCount > 0 && (
        <div className="mt-3">
          <span className="text-[10px] bg-indigo-100 text-indigo-600 px-2 py-0.5 rounded-full inline-block">
            Active:{" "}
            {Object.entries(filters)
              .filter(([key, val]) => val && val !== "All")
              .map(([key, val]) => (
                <span key={key} className="mr-2">
                  {abbrLabel(key)}: {val}
                </span>
              ))}
          </span>
        </div>
      )}
    </div>
  );
};

const FilterSelect = ({ label, options, value, onChange }) => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-2">
        <label className="text-sm">{label}:</label>
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="border px-2 py-1 rounded border-gray-200"
        >
          {options.map((opt, i) => (
            <option key={i} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

const abbrLabel = (key) => {
  switch (key) {
    case "department":
      return "Dept";
    case "risk":
      return "Risk";
    case "availability":
      return "Avail";
    default:
      return key;
  }
};

export default EmployeeFilters;