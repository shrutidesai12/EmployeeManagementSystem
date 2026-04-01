import React, { useState } from "react";
import PendingVerification from "./PendingVerification";
import PendingEmployee from "./PendingEmployee";
// import VerifiedDocuments from "./VerifiedDocuments";
// import ExpiringDocs from "./ExpiringDocs";
// import BulkUploads from "./BulkUploads";
// import Settings from "./Settings";

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
        return <PendingVerification />;
      case "Pending on Employee":
        return <PendingEmployee />;
      case "Verified Documents":
        return <VerifiedDocuments />;
      case "Expiring Docs":
        return <ExpiringDocs />;
      case "Bulk Uploads":
        return <BulkUploads />;
      case "Settings":
        return <Settings />;
      default:
        return null;
    }
  };

  return (
    <div >
      
      {/* Tabs */}
      <div className="flex gap-2 border mb-4 border-gray-300 rounded shadow-sm bg-white">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 text-sm border  ${
              activeTab === tab
                ? "border-[#718FC2] text-[#718FC2] bg-purple-50"
                : "border-transparent text-gray-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {renderTab()}
    </div>
  );
}