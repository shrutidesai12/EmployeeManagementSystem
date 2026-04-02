
import React, { useState } from "react";
import PendingVerification from "./PendingVerification";
import BulkUploads from "./BulkUploads";
import EmployeeDocumentsSettings from "./DocumentsSetting";

export default function EmployeeDocuments() {
  const [activeTab, setActiveTab] = useState("Pending Verification");

  const tabs = [
    "Pending Verification",
    "Pending on Employee",
    "Verified Documents",
    "Expiring Docs",
    "Bulk Uploads",
    "Settings",
  ];

  const renderTab = () => {
    switch (activeTab) {
      case "Pending Verification":
      case "Pending on Employee":
      case "Verified Documents":
        return <PendingVerification activeTab={activeTab} />;

      case "Expiring Docs":
        return <PendingVerification activeTab={activeTab} />;

      case "Bulk Uploads":
        return <BulkUploads />;
      case "Settings":
        return <EmployeeDocumentsSettings />;

      default:
        return null;
    }
  };

  return (
    <div>
      <div className="flex gap-2 border mb-4 border-gray-300 rounded shadow-sm bg-white flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 text-sm border ${activeTab === tab
                ? "border-[#718FC2] text-[#718FC2] bg-purple-50"
                : "border-transparent text-gray-600"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {renderTab()}
    </div>
  );
}