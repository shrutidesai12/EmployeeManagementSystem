import React, { useMemo, useState } from "react";
import { FiChevronDown, FiChevronRight, FiSearch } from "react-icons/fi";

const filterConfig = [
  { label: "Business Unit", options: ["Business Unit", "Corporate", "Sales", "Engineering"] },
  { label: "Department", options: ["Department", "HR", "Finance", "Operations"] },
  { label: "Location", options: ["Location", "Bengaluru", "Pune", "Delhi"] },
  { label: "Cost Center", options: ["Cost Center", "CC001", "CC002", "CC003"] },
  { label: "Legal Entity", options: ["Legal Entity", "India Pvt Ltd", "Global Services LLC"] },
  { label: "Document Type", options: ["Document Type", "Aadhar Card", "PAN Card", "Offer Letter"] },
];

const employeeGroups = [
  {
    employee: "ALEX ODU...",
    jobTitle: "",
    department: "",
    subDepartment: "",
    location: "",
    documents: [
      { documentTitle: "PAN Card" },
      { documentTitle: "Aadhar Card" },
      { documentTitle: "Address Proof" },
      { documentTitle: "Bank Passbook" },
      { documentTitle: "Offer Letter" },
    ],
  },
  {
    employee: "Aarti Shah",
    jobTitle: "",
    department: "",
    subDepartment: "",
    location: "",
    documents: [
      { documentTitle: "Education Certificate" },
      { documentTitle: "Address Proof" },
      { documentTitle: "PAN Card" },
      { documentTitle: "Aadhar Card" },
      { documentTitle: "Photo" },
      { documentTitle: "Bank Proof" },
    ],
  },
  {
    employee: "Abbot, Ch...",
    jobTitle: "",
    department: "",
    subDepartment: "",
    location: "",
    documents: [{ documentTitle: "PAN Card" }, { documentTitle: "Offer Letter" }],
  },
  {
    employee: "Abdul",
    jobTitle: "",
    department: "",
    subDepartment: "",
    location: "",
    documents: [{ documentTitle: "Address Proof" }, { documentTitle: "PAN Card" }],
  },
  {
    employee: "Adams, As...",
    jobTitle: "",
    department: "",
    subDepartment: "",
    location: "",
    documents: [{ documentTitle: "Aadhar Card" }, { documentTitle: "Photo" }],
  },
];

function FilterBar() {
  return (
    <div className="pe-card-bg pe-border-soft border-b">
      <div className="flex flex-wrap items-center">
        {filterConfig.map((filter) => (
          <select
            key={filter.label}
            className="pe-card-bg pe-border-soft pe-muted h-12 min-w-[160px] flex-1 appearance-none border-r px-4 text-sm outline-none"
            defaultValue={filter.options[0]}
          >
            {filter.options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        ))}
      </div>

      <div className="pe-border-subtle relative border-t px-3 py-3">
        <FiSearch className="pe-icon pointer-events-none absolute left-3 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          placeholder="Search"
          className="pe-icon h-8 w-full border-0 bg-transparent pl-7 pr-2 text-sm outline-none"
        />
      </div>
    </div>
  );
}

function TableRow({ group, isExpanded, onToggle }) {
  const documentCount = group.documents.length;

  return (
    <>
      <tr className="pe-row-hover pe-border-lighter pe-card-bg border-b">
        <td className="pe-border-lighter border-r px-4 py-3 align-middle">
          <button
            type="button"
            onClick={onToggle}
            className="pe-icon rounded p-1 transition hover:bg-slate-100 hover:text-slate-700"
            aria-label={isExpanded ? "Collapse employee group" : "Expand employee group"}
          >
            {isExpanded ? <FiChevronDown size={16} /> : <FiChevronRight size={16} />}
          </button>
        </td>
        <td className="pe-border-lighter pe-header-text border-r px-4 py-3 text-sm font-medium">
          {group.employee}({documentCount})
        </td>
        <td className="pe-border-lighter border-r px-4 py-3 text-sm text-slate-700">{group.jobTitle}</td>
        <td className="pe-border-lighter border-r px-4 py-3 text-sm text-slate-500" />
        <td className="pe-border-lighter border-r px-4 py-3 text-sm text-slate-700">{group.department}</td>
        <td className="pe-border-lighter border-r px-4 py-3 text-sm text-slate-700">{group.subDepartment}</td>
        <td className="pe-border-lighter border-r px-4 py-3 text-sm text-slate-700">{group.location}</td>
        <td className="px-4 py-3 text-left">
          <button type="button" className="pe-action text-sm font-medium transition">
            Nudge All
          </button>
        </td>
      </tr>

      {isExpanded &&
        group.documents.map((doc) => (
          <tr key={`${group.employee}-${doc.documentTitle}`} className="pe-row-child-bg pe-row-child-hover pe-border-subtle border-b">
            <td className="pe-border-lighter border-r px-4 py-3" />
            <td className="pe-border-lighter border-r px-4 py-3 text-sm text-slate-500">{group.employee}</td>
            <td className="pe-border-lighter border-r px-4 py-3 text-sm text-slate-500">-</td>
            <td className="pe-border-lighter border-r px-4 py-3 text-sm font-medium text-slate-700">{doc.documentTitle}</td>
            <td className="pe-border-lighter border-r px-4 py-3 text-sm text-slate-500">-</td>
            <td className="pe-border-lighter border-r px-4 py-3 text-sm text-slate-500">-</td>
            <td className="pe-border-lighter border-r px-4 py-3 text-sm text-slate-500">-</td>
            <td className="px-4 py-3 text-left">
              <button type="button" className="pe-action text-sm font-medium transition">
                Nudge
              </button>
            </td>
          </tr>
        ))}
    </>
  );
}

export default function PendingEmployee() {
  const [activeView, setActiveView] = useState("employee");
  const [expandedGroups, setExpandedGroups] = useState({});

  const totalPending = 143;
  const groups = useMemo(() => employeeGroups, []);

  const toggleGroup = (employeeName) => {
    setExpandedGroups((prev) => ({
      ...prev,
      [employeeName]: !prev[employeeName],
    }));
  };

  return (
    <div className=" p-3 md:p-3">
      <div className="mb-3 flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <h1 className="pe-title text-[20px] font-semibold leading-tight">Documents submission pending on employee</h1>
          <p className="pe-muted mt-1 text-[12px]">Mandatory documents which are pending on employee are shown here.</p>
        </div>

        <div className="pe-border pe-card-bg inline-flex w-full rounded-md border sm:w-auto">
          <button
            type="button"
            onClick={() => setActiveView("employee")}
            className={`flex-1 px-5 py-2.5 text-sm font-medium transition sm:flex-none ${
              activeView === "employee"
                ? "pe-toggle-active rounded-l-md rounded-r-none"
                : "pe-toggle-inactive rounded-l-md rounded-r-none"
            }`}
          >
            By Employee
          </button>

          <button
            type="button"
            onClick={() => setActiveView("document")}
            className={`flex-1 px-5 py-2.5 text-sm font-medium transition sm:flex-none ${
              activeView === "document"
                ? "pe-toggle-active rounded-r-md rounded-l-none"
                : "pe-toggle-inactive rounded-r-md rounded-l-none"
            }`}
          >
            By Document
          </button>
        </div>
      </div>

      <div className="pe-border pe-card-bg overflow-hidden border transition-all duration-200  shadow:border-gray-300">
        <FilterBar />

        <div className="pe-card-bg h-2" />

        <div className="pe-border-lighter pe-card-bg flex items-center justify-end border-b px-5 py-3">
          <span className="pe-muted text-sm font-medium">
            Total: <span className="font-semibold">{totalPending}</span>
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[1200px] border-collapse">
            <thead>
              <tr className="pe-head-bg text-left">
                <th className="pe-border pe-header-text border-r px-4 py-3 text-sm font-semibold uppercase tracking-wide">Group</th>
                <th className="pe-border pe-header-text border-r px-4 py-3 text-sm font-semibold uppercase tracking-wide">Employee</th>
                <th className="pe-border pe-header-text border-r px-4 py-3 text-sm font-semibold uppercase tracking-wide">Job Title</th>
                <th className="pe-border pe-header-text border-r px-4 py-3 text-sm font-semibold uppercase tracking-wide">Document Title</th>
                <th className="pe-border pe-header-text border-r px-4 py-3 text-sm font-semibold uppercase tracking-wide">Department</th>
                <th className="pe-border pe-header-text border-r px-4 py-3 text-sm font-semibold uppercase tracking-wide">Sub Department</th>
                <th className="pe-border pe-header-text border-r px-4 py-3 text-sm font-semibold uppercase tracking-wide">Location</th>
                <th className="pe-header-text px-4 py-3 text-sm font-semibold uppercase tracking-wide">Actions</th>
              </tr>
            </thead>
            <tbody>
              {groups.map((group) => (
                <TableRow
                  key={group.employee}
                  group={group}
                  isExpanded={Boolean(expandedGroups[group.employee])}
                  onToggle={() => toggleGroup(group.employee)}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
