import React, { useState } from "react";
import EmployeesScreen from "../../components/OrganizationComponents/Employee/EmployeesScreen";
import Documents from "../../components/OrganizationComponents/Documents/DocumentTemplate";
// import Engage from "./Engage";
// import Hiring from "./Hiring";

export default function OrganizationMain() {
  const [mainTab, setMainTab] = useState("employees");

  return (
    <div className="bg-gray-100 min-h-screen">

      {/* 🔵 TOP TABS */}
      <div className="flex gap-6 border-b bg-white px-6 border-gray-200">
        {["employees", "documents", "engage", "hiring"].map((tab) => (
          <div key={tab} className="relative">
            <button
              onClick={() => setMainTab(tab)}
              className={`py-3 text-sm capitalize ${
                mainTab === tab
                  ? "text-[#718fc2] font-medium"
                  : "text-gray-600"
              }`}
            >
              {tab}
            </button>

            {/* 🔻 TRIANGLE */}
            {mainTab === tab && (
              <div className="absolute left-1/2 -translate-x-1/2 bottom-[4px]
                w-0 h-0
                border-l-[6px] border-l-transparent
                border-r-[6px] border-r-transparent
                border-t-[6px] border-t-[#718fc2]"
              />
            )}
          </div>
        ))}
      </div>

      {/* 🔽 RENDER SCREENS */}
      {mainTab === "employees" && <EmployeesScreen />}
      {mainTab === "documents" && <Documents />}
      {mainTab === "engage" && <Engage />}
      {mainTab === "hiring" && <Hiring />}
    </div>
  );
}