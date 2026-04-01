import React from "react";

export default function JobScreen() {
  // =========================
  // DUMMY DATA
  // =========================

  const jobDetails = [
    { label: "Employee Number", value: "6" },
    { label: "Date of Joining", value: "13 Oct, 2022" },
    { label: "Job Title - Primary", value: "Finance" },
    { label: "Job Title - Secondary", value: "-Not Set-" },
    {
      label: "In Probation?",
      value: "No  13 Oct, 2022 - 01 Sept, 2023\nProbation-India",
    },
    { label: "Notice Period", value: "India - Notice period (60 Days)" },
    { label: "Worker Type", value: "Permanent" },
    { label: "Time Type", value: "Full Time" },
    { label: "Pay Band", value: "-Not Set-" },
    { label: "Pay Grade", value: "-Not Set-" },
  ];

  const employeeTime = [
    { label: "Shift", value: "General" },
    { label: "Weekly Off Policy", value: "Weekends" },
    { label: "Leave Plan", value: "Leave Plan - India" },
    { label: "Holiday Calendar", value: "Holidays-India" },
    { label: "Attendance Number", value: "6" },
    { label: "Disable attendance tracking", value: "toggle" },
    { label: "Attendance Capture Scheme", value: "India-Capture Scheme" },
    {
      label: "Attendance Tracking Policy",
      value: "India - Attendance Tracking Policy",
    },
    { label: "Shift Weekly Off Rule", value: "test" },
    { label: "Shift Allowance Policy", value: "-Not Set-" },
    { label: "Overtime", value: "Overtime Policy - Documentation" },
  ];

  const otherDetails = [
    { label: "Expense Policy", value: "India-Expense Policy" },
    { label: "Timesheet Policy", value: "Default Timesheet Policy" },
    { label: "Loan Policy", value: "Default Leave Policy" },
  ];

  const organization = [
    { label: "Business Unit", value: "Executive Management Team" },
    { label: "Department", value: "Finance" },
    { label: "Location", value: "India HO -Delhi" },
    { label: "Cost Center", value: "Cost Center-IN" },
    { label: "Legal Entity", value: "Golden Bolt- India" },
    {
      label: "Reports To",
      value: { initials: "MM", name: "Mad Max" },
    },
    {
      label: "Manager Of Manager (L2 Manager)",
      value: { initials: "JR", name: "Jack Reacher" },
    },
    { label: "Direct Reports", value: "0 Employees" },
  ];

  return (
    <div className="bg-[#f5f6f8] min-h-screen p-5">
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-5 items-start">
        {/* LEFT SIDE */}
        <div className="flex flex-col gap-5">
          <JobDetailsCard data={jobDetails} />
          <EmployeeTimeCard data={employeeTime} />
          <OtherCard data={otherDetails} />
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-5">
          <OrganizationCard data={organization} />
        </div>
      </div>
    </div>
  );
}

// =========================
// COMMON FIELD UI
// =========================
function Field({ label, value, preline = false }) {
  return (
    <div className="flex flex-col gap-1">
      <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wide">
        {label}
      </p>
      <p
        className={`text-[14px] font-medium text-gray-500 leading-6 ${
          preline ? "whitespace-pre-line" : ""
        }`}
      >
        {value}
      </p>
    </div>
  );
}

// =========================
// 1) JOB DETAILS CARD
// =========================
function JobDetailsCard({ data }) {
  return (
    <div className="bg-white border border-gray-200 rounded overflow-hidden">
      <div className="px-4 py-3 border-b border-gray-200">
        <h2 className="text-[16px] font-semibold text-[#333]">Job Details</h2>
      </div>

      <div className="px-5 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-7 gap-x-12">
          {data.map((item, index) => (
            <Field
              key={index}
              label={item.label}
              value={item.value}
              preline={item.label === "In Probation?"}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// =========================
// 2) EMPLOYEE TIME CARD
// =========================
function EmployeeTimeCard({ data }) {
  return (
    <div className="bg-white border border-gray-200 rounded overflow-hidden">
      <div className="px-4 py-3 border-b border-gray-200">
        <h2 className="text-[16px] font-semibold text-[#333]">Employee Time</h2>
      </div>

      <div className="px-5 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-7 gap-x-12">
          {data.map((item, index) => (
            <div key={index}>
              <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wide">
                {item.label}
              </p>

              {item.value === "toggle" ? (
                <div className="flex items-center gap-3 mt-1">
                  <span className="text-[14px] font-medium text-gray-500 leading-6">
                    Disable attendance tracking
                  </span>

                  <div className="w-[30px] h-[16px] rounded-full bg-gray-200 relative">
                    <div className="w-[12px] h-[12px] rounded-full bg-white absolute top-[2px] left-[2px] shadow"></div>
                  </div>
                </div>
              ) : (
                <p className="text-[14px] font-medium text-gray-500 leading-6 mt-1">
                  {item.value}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// =========================
// 3) OTHER CARD
// =========================
function OtherCard({ data }) {
  return (
    <div className="bg-white border border-gray-200 rounded overflow-hidden">
      <div className="px-4 py-3 border-b border-gray-200">
        <h2 className="text-[16px] font-semibold text-[#333]">Other</h2>
      </div>

      <div className="px-5 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-7 gap-x-12 text-gray-500">
          {data.map((item, index) => (
            <Field key={index} label={item.label} value={item.value} />
          ))}
        </div>
      </div>
    </div>
  );
}

// =========================
// 4) ORGANIZATION CARD
// =========================
function OrganizationCard({ data }) {
  return (
    <div className="bg-white border border-gray-200 rounded overflow-hidden">
      <div className="px-4 py-3 border-b border-gray-200">
        <h2 className="text-[16px] font-semibold text-[#333]">Organization</h2>
      </div>

      <div className="px-5 py-6">
        <div className="grid grid-cols-1 gap-6">
          {data.map((item, index) => (
            <div key={index} className="flex flex-col gap-1">
              <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wide">
                {item.label}
              </p>

              {typeof item.value === "object" ? (
                <div className="flex items-center gap-3 mt-1">
                  <div className="w-[30px] h-[30px] rounded-full bg-sky-300 text-white flex items-center justify-center text-[12px] font-semibold">
                    {item.value.initials}
                  </div>

                  <span className="text-[14px] font-medium text-gray-500">
                    {item.value.name}
                  </span>

                  <span className="bg-gray-100 border border-gray-200 text-gray-500 text-[12px] px-2 py-[2px] rounded">
                    ...
                  </span>
                </div>
              ) : (
                <p className="text-[14px] font-medium text-gray-500 leading-6">
                  {item.value}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}