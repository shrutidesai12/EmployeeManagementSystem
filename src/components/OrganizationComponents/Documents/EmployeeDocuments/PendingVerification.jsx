
import React, { useEffect, useState } from "react";
import {
  FiChevronDown,
  FiChevronRight,
  FiDownload,
} from "react-icons/fi";
import { MdSearch } from "react-icons/md";

export default function PendingVerification({ activeTab }) {
  const [expandedRow, setExpandedRow] = useState(null);
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedCount, setSelectedCount] = useState(0);
  const [showToast, setShowToast] = useState(false);

  const filters = [
    { label: "Business Unit", options: ["HR", "Finance", "Engineering"] },
    { label: "Department", options: ["IT", "Admin", "Sales"] },
    { label: "Location", options: ["Pune", "Mumbai", "Bangalore"] },
    { label: "Cost Center", options: ["CC001", "CC002"] },
    { label: "Legal Entity", options: ["India Pvt Ltd", "US Corp"] },
    { label: "Document Type", options: ["Aadhar", "PAN", "Offer Letter"] },
  ];

  // ---------------- DUMMY DATA ----------------
  const dummyData = {
    "Pending Verification": [
      {
        name: "Kevin Spacey(2)",
        jobTitle: "Sales Executive",
        documents: [
          {
            title: "PAN Card (IN)",
            department: "Sales",
            subDepartment: "Retail",
            location: "Delhi",
            date: "14 Mar, 2023",
          },
          {
            title: "Aadhar Card (IN)",
            department: "Sales",
            subDepartment: "Retail",
            location: "Delhi",
            date: "14 Mar, 2023",
          },
        ],
      },
      {
        name: "Mark Scottfield(1)",
        jobTitle: "HR Executive",
        documents: [
          {
            title: "Offer Letter",
            department: "HR",
            subDepartment: "Recruitment",
            location: "Pune",
            date: "12 Mar, 2023",
          },
        ],
      },
    ],

    "Pending on Employee": [
      {
        name: "Riya Sharma(2)",
        jobTitle: "Software Engineer",
        documents: [
          {
            title: "Passport Copy",
            department: "Engineering",
            subDepartment: "Frontend",
            location: "Bangalore",
            date: "20 Mar, 2023",
          },
          {
            title: "Driving License",
            department: "Engineering",
            subDepartment: "Frontend",
            location: "Bangalore",
            date: "20 Mar, 2023",
          },
        ],
      },
      {
        name: "Amit Verma(1)",
        jobTitle: "Finance Analyst",
        documents: [
          {
            title: "Bank Passbook",
            department: "Finance",
            subDepartment: "Payroll",
            location: "Mumbai",
            date: "18 Mar, 2023",
          },
        ],
      },
    ],

    "Verified Documents": [
      {
        name: "Sneha Patil(2)",
        jobTitle: "UI Designer",
        documents: [
          {
            title: "PAN Card (IN)",
            department: "Design",
            subDepartment: "Product Design",
            location: "Pune",
            date: "10 Mar, 2023",
          },
          {
            title: "Aadhar Card (IN)",
            department: "Design",
            subDepartment: "Product Design",
            location: "Pune",
            date: "10 Mar, 2023",
          },
        ],
      },
      {
        name: "Rahul Joshi(1)",
        jobTitle: "Operations Manager",
        documents: [
          {
            title: "Employment Contract",
            department: "Operations",
            subDepartment: "Field Ops",
            location: "Hyderabad",
            date: "08 Mar, 2023",
          },
        ],
      },
    ],
    "Expiring Docs": [
  {
    name: "Ankit Sharma(2)",
    jobTitle: "QA Engineer",
    documents: [
      {
        title: "PAN Card",
        department: "QA",
        subDepartment: "Automation",
        location: "Pune",
        date: "01 Apr, 2026",
      },
      {
        title: "Aadhar Card",
        department: "QA",
        subDepartment: "Automation",
        location: "Pune",
        date: "01 Apr, 2026",
      },
    ],
  },
],
  };

  // ---------------- LOAD DATA ON TAB CHANGE ----------------
  useEffect(() => {
    setExpandedRow(null);
    setData(dummyData[activeTab] || []);
  }, [activeTab]);

  const toggleRow = (index) => {
    setExpandedRow(expandedRow === index ? null : index);
  };

  // ---------------- ACTIONS ----------------
  const renderParentAction = (item) => {
    if (activeTab === "Pending Verification") {
      return (
        <div className="document-actions">
          <button
            className="document-action-primary"
            onClick={() => {
              setSelectedCount(item.documents.length);
              setShowModal(true);
            }}
          >
            Verify All
          </button>
          <button className="document-action-outline">Reject All</button>
        </div>
      );
    }

    if (activeTab === "Pending on Employee") {
      return (
        <div className="document-actions">
          <button className="document-action-primary">Nudge All</button>
        </div>
      );
    }

    if (activeTab === "Verified Documents") {
      return (
        <div className="document-actions">
          <button className="document-icon-btn">
            <FiDownload size={18} />
          </button>
        </div>
      );
    }
    if (activeTab === "Expiring Docs") {
  return null;
}

    return null;
  };

  const renderChildAction = (doc, item) => {
    if (activeTab === "Pending Verification") {
      return (
        <div className="document-actions">
          <span className="document-link">Verify</span>
          <span className="document-link">Reject</span>
        </div>
      );
    }

    if (activeTab === "Pending on Employee") {
      return (
        <div className="document-actions">
          <span className="document-link">Nudge</span>
        </div>
      );
    }

    if (activeTab === "Verified Documents") {
      return (
        <div className="document-actions">
          <button className="document-icon-btn">
            <FiDownload size={18} />
          </button>
        </div>
      );
    }
    if (activeTab === "Expiring Docs") {
  return (
    <div className="document-actions">
      <span className="document-link text-blue-600">
        Request to Renew
      </span>
    </div>
  );
}

    return null;
  };

  return (
    <div className="document-screen">
      <div className="document-content">
        {/* HEADER */}
        <div className="document-header flex justify-between items-center mb-4">
          <div>
            <h2 className="document-heading">{activeTab}</h2>
            <p className="document-subheading">
              {activeTab === "Pending Verification" &&
                "Documents here are submitted by employee for verification."}
              {activeTab === "Pending on Employee" &&
                "Documents waiting for employee action."}
              {activeTab === "Verified Documents" &&
                "These documents are already verified."}
                {activeTab === "Expiring Docs" &&
  "These documents are about to expire and require renewal."}
            </p>
          </div>

          <div className="flex gap-2">
            <button className="document-action-primary">By Employee</button>
            <button className="document-action-outline">By Document</button>
          </div>
        </div>

        {/* CARD */}
        <div className="bg-white border border-gray-200 shadow-md">
          {/* FILTER ROW */}
          <div className="flex flex-wrap border-b border-gray-300">
            {filters.map((item, i) => (
              <div
                key={i}
                className={`px-4 py-2 ${
                  i !== filters.length - 1 ? "border-r border-gray-300" : ""
                }`}
              >
                <select className="bg-transparent border-none outline-none focus:outline-none focus:ring-0 text-sm text-gray-800 pr-6">
                  <option>{item.label}</option>
                  {item.options.map((opt, idx) => (
                    <option key={idx}>{opt}</option>
                  ))}
                </select>
              </div>
            ))}
          </div>

          {/* SEARCH */}
          <div className="p-4 border-b border-gray-300">
            <span className="text-sm text-gray-600">
              <MdSearch className="inline mr-2" />
              Search...
            </span>
          </div>

          {/* TABLE */}
          <div className="overflow-x-auto">
            <table className="document-table w-full">
              <thead>
                <tr>
                  <th className="document-th">GROUP</th>
                  <th className="document-th">EMPLOYEE</th>
                  <th className="document-th">JOB TITLE</th>
                  <th className="document-th">DOCUMENT TITLE</th>
                  <th className="document-th">DEPARTMENT</th>
                  <th className="document-th">SUB DEPARTMENT</th>
                  <th className="document-th">LOCATION</th>
                  <th className="document-th">DATE OF SUBMISS</th>
                  <th className="document-th">ACTIONS</th>
                </tr>
              </thead>

              <tbody>
                {data.map((item, index) => (
                  <React.Fragment key={index}>
                    {/* Parent Row */}
                    <tr className="document-row">
                      <td
                        className="document-td document-expand cursor-pointer"
                        onClick={() => toggleRow(index)}
                      >
                        {expandedRow === index ? (
                          <FiChevronDown size={16} />
                        ) : (
                          <FiChevronRight size={16} />
                        )}
                      </td>

                      <td className="document-td document-employee">
                        {item.name}
                      </td>

                      <td className="document-td">{item.jobTitle || "—"}</td>
                      <td className="document-td"></td>
                      <td className="document-td"></td>
                      <td className="document-td"></td>
                      <td className="document-td"></td>
                      <td className="document-td"></td>

                      <td className="document-td">
                        {renderParentAction(item)}
                      </td>
                    </tr>

                    {/* Child Rows */}
                    {expandedRow === index &&
                      item.documents?.map((doc, i) => (
                        <tr key={i} className="document-row">
                          <td className="document-td"></td>

                          <td className="document-td document-employee-link">
                            {item.name}
                          </td>

                          <td className="document-td">
                            {item.jobTitle || "—"}
                          </td>
                          <td className="document-td">{doc.title}</td>
                          <td className="document-td">{doc.department}</td>
                          <td className="document-td">
                            {doc.subDepartment || "—"}
                          </td>
                          <td className="document-td">{doc.location}</td>
                          <td className="document-td">{doc.date}</td>

                          <td className="document-td">
                            {renderChildAction(doc, item)}
                          </td>
                        </tr>
                      ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>

          {/* EMPTY STATE */}
          {data.length === 0 && (
            <div className="p-6 text-center text-gray-400">
              No documents found
            </div>
          )}

          {/* FOOTER */}
          <div className="flex justify-end gap-4 p-3 border-t border-gray-200 text-sm text-gray-400">
            <span>
              {data.length > 0 ? `1 to ${data.length} of ${data.length}` : "0"}
            </span>
            <span>Page 1 of 1</span>
          </div>
        </div>
      </div>

      {/* VERIFY MODAL */}
      {showModal && activeTab === "Pending Verification" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-lg shadow-lg w-[420px] overflow-hidden">
            <div className="bg-gray-700 text-white px-5 py-3 text-sm font-medium">
              Confirm Verification
            </div>

            <div className="p-5">
              <p className="text-sm text-gray-600">
                The <span className="font-semibold">{selectedCount}</span>{" "}
                documents under this section will be marked as verified.
              </p>
            </div>

            <div className="flex justify-end gap-3 px-5 pb-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 border border-gray-300 rounded text-sm"
              >
                Cancel
              </button>

              <button
                onClick={() => {
                  setShowModal(false);
                  setShowToast(true);

                  setTimeout(() => {
                    setShowToast(false);
                  }, 3000);
                }}
                className="px-4 py-2 bg-[#718fc2] text-white rounded text-sm"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TOAST */}
      {showToast && (
        <div className="fixed top-5 right-5 z-50">
          <div className="flex items-center bg-white shadow-lg border border-gray-200 rounded overflow-hidden w-[320px]">
            <div className="bg-green-600 text-white px-3 py-4 flex items-center justify-center">
              ✓
            </div>

            <div className="flex-1 px-4 py-2">
              <div className="text-sm font-semibold text-gray-800">
                Success!
              </div>
              <div className="text-xs text-gray-500">
                All documents verified successfully
              </div>
            </div>

            <button
              onClick={() => setShowToast(false)}
              className="px-3 text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}