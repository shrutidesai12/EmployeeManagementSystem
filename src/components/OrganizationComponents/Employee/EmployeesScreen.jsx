import React, { useState } from "react";
import EmployeeDirectory from "./EmployeeDirectory";
import OrganizationTree from "./OrganizationTree";

export default function EmployeesScreen() {
  const [subTab, setSubTab] = useState("directory");

  return (
    <div className="p-0">

      {/* 🔵 INNER TABS */}
      <div className="flex border-b bg-white border-gray-200">
        {[
          { label: "Employee Directory", value: "directory" },
          { label: "Organization Tree", value: "org" },
        ].map((tab) => (
          <div key={tab.value} className="relative">
            <button
              onClick={() => setSubTab(tab.value)}
              className={`text-sm 
                ${
                  subTab === tab.value
                    ? "text-[#718fc2] font-medium ml-1 "
                    : "text-gray-600"
                } px-4 py-3`}
            >
              {tab.label}
            </button>

            {/* 🔻 TRIANGLE UNDER ACTIVE TAB */}
            {subTab === tab.value && (
              <div
                className="absolute left-1/2 -translate-x-1/2 bottom-[4px]
                  w-0 h-0
                  border-l-[6px] border-l-transparent
                  border-r-[6px] border-r-transparent
                  border-t-[6px] border-t-[#718fc2]"
              />
            )}
          </div>
        ))}
      </div>

      {/* 🔽 CONTENT */}
      <div >
        {subTab === "directory" && <EmployeeDirectory />}
        {subTab === "org" && <OrganizationTree />}
      </div>
    </div>
  );
}