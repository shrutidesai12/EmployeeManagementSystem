import React, { useState } from "react";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";

export default function PendingVerification() {
  const [expandedRow, setExpandedRow] = useState(null);
  const [showModal, setShowModal] = useState(false);
const [selectedCount, setSelectedCount] = useState(0);
const [showToast, setShowToast] = useState(false);
  

  const data = [
    {
      name: "Kevin Spacey(1)",
      documents: [
        {
          title: "PAN Card (IN)",
          department: "Sales",
          location: "Delhi",
          date: "14 Mar, 2023",
        },
        {
          title: "Aadhar Card (IN)",
          department: "Sales",
          location: "Delhi",
          date: "14 Mar, 2023",
        },
      ],
    },
    {
      name: "Mark Scottfield(2)",
      documents: [
        {
          title: "Offer Letter",
          department: "HR",
          location: "Pune",
          date: "12 Mar, 2023",
        },
      ],
    },
  ];

  const filters = [
    { label: "Business Unit", options: ["HR", "Finance", "Engineering"] },
    { label: "Department", options: ["IT", "Admin", "Sales"] },
    { label: "Location", options: ["Pune", "Mumbai", "Bangalore"] },
    { label: "Cost Center", options: ["CC001", "CC002"] },
    { label: "Legal Entity", options: ["India Pvt Ltd", "US Corp"] },
    { label: "Document Type", options: ["Aadhar", "PAN", "Offer Letter"] },
  ];

  const toggleRow = (index) => {
    setExpandedRow(expandedRow === index ? null : index);
  };

  return (
    <div className="document-screen">
      <div className="document-content">

        {/* HEADER */}
        <div className="document-header flex justify-between items-center">
          <div>
            <h2 className="document-heading">
              Documents pending verification
            </h2>
            <p className="document-subheading">
              Documents here are submitted by employee for verification.
            </p>
          </div>

          <div className="flex gap-2">
            <button className="document-action-primary">
              By Employee
            </button>
            <button className="document-action-outline">
              By Document
            </button>
          </div>
        </div>

        {/* CARD */}
        <div className="bg-white border border-gray-200  shadow-md">

          {/* FILTER ROW */}
          <div className="flex flex-wrap border-b border-gray-200">
            {filters.map((item, i) => (
              <div key={i} className="document-filter-item p-2">
                <select className="document-control">
                  <option>{item.label}</option>
                  {item.options.map((opt, idx) => (
                    <option key={idx}>{opt}</option>
                  ))}
                </select>
              </div>
            ))}
          </div>

          {/* TABLE */}
          <div>
            <table className="document-table">
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

                    {/* PARENT ROW */}
                    <tr className="document-row">
                      <td
                        className="document-td document-expand"
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

                      <td className="document-td"></td>
                      <td className="document-td"></td>
                      <td className="document-td"></td>
                      <td className="document-td"></td>
                      <td className="document-td"></td>
                      <td className="document-td"></td>

                      <td className="document-td">
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
                          <button className="document-action-outline">
                            Reject All
                          </button>
                        </div>
                      </td>
                    </tr>

                    {/* CHILD ROWS */}
                    {expandedRow === index &&
                      item.documents.map((doc, i) => (
                        <tr key={i} className="document-row">
                          <td className="document-td"></td>

                          <td className="document-td document-employee-link">
                            {item.name}
                          </td>

                          <td className="document-td">
                            Sales Executive
                          </td>

                          <td className="document-td">
                            {doc.title}
                          </td>

                          <td className="document-td">
                            {doc.department}
                          </td>

                          <td className="document-td">—</td>

                          <td className="document-td">
                            {doc.location}
                          </td>

                          <td className="document-td">
                            {doc.date}
                          </td>

                          <td className="document-td">
                            <div className="document-actions">
                              <span className="document-link">
                                Verify
                              </span>
                              <span className="document-link">
                                Reject
                              </span>
                            </div>
                          </td>
                        </tr>
                      ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>

          {/* FOOTER */}
          <div className="flex justify-end gap-4 p-3 border-t border-gray-200 text-sm text-gray-400">
            <span>1 to 2 of 2</span>
            <span>Page 1 of 1</span>
          </div>

        </div>
      </div>
{showModal && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">

    {/* MODAL BOX */}
    <div className="bg-white rounded-lg shadow-lg w-[420px] overflow-hidden">

      {/* HEADER */}
      <div className="bg-gray-700 text-white px-5 py-3 text-sm font-medium">
        Confirm Verification
      </div>

      {/* BODY */}
      <div className="p-5">
        <p className="text-sm text-gray-600">
          The <span className="font-semibold">{selectedCount}</span> documents under this section will be marked as verified.
        </p>
      </div>

      {/* FOOTER */}
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

    // auto hide after 3 sec
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
{showToast && (
  <div className="fixed top-5 right-5 z-50">
    
    <div className="flex items-center bg-white shadow-lg border border-gray-200 rounded overflow-hidden w-[320px]">

      {/* LEFT GREEN BOX */}
      <div className="bg-green-600 text-white px-3 py-4 flex items-center justify-center">
        ✓
      </div>

      {/* TEXT */}
      <div className="flex-1 px-4 py-2">
        <div className="text-sm font-semibold text-gray-800">
          Success!
        </div>
        <div className="text-xs text-gray-500">
          All documents verified successfully
        </div>
      </div>

      {/* CLOSE */}
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