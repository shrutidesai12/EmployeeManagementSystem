import React from "react";

const tabs = [
  "Pending Verification",
  "Pending on Employee",
  "Verified Documents",
  "Expiring Docs",
  "Bulk Uploads",
  "Settings",
];

export default function Tabs({ activeTab, setActiveTab }) {
  return (
    <div className="flex gap-2 border-b mb-4">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`tab-btn ${
            activeTab === tab ? "tab-active" : ""
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}