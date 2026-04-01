import React from "react";
import { FiMoreHorizontal } from "react-icons/fi";

export default function AssetRequests({ onCreateRequest }) {
  const requests = [
    {
      id: 1,
      asset: "MacBook Pro",
      category: "Electronics / Laptop",
      requestType: "Replacement",
      status: "Pending",
      waitingOn: "Manager Approval",
    },
  ];

  return (
    <>
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">
            Asset Requests
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            You can raise asset request supported by your organization
          </p>
        </div>

        {/* Button */}
        <button
          onClick={onCreateRequest}
          className="bg-[#718FC2] text-white px-4 py-2 rounded text-sm"
        >
          + Asset Request
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-sm shadow border border-gray-200">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-sm">
            
            {/* Header */}
            <thead>
              <tr className="bg-gray-100 text-gray-600">
                <th className="border border-gray-200 px-2 py-2">Asset</th>
                <th className="border border-gray-200 px-2 py-2">
                  Asset Category Type
                </th>
                <th className="border border-gray-200 px-2 py-2">
                  Request Type
                </th>
                <th className="border border-gray-200 px-2 py-2">
                  Request Status
                </th>
                <th className="border border-gray-200 px-2 py-2">
                  Waiting On
                </th>
                <th className="border border-gray-200 px-2 py-2 text-center">
                  Action
                </th>
              </tr>
            </thead>

            {/* Body */}
            <tbody>
              {requests.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="border border-gray-200 px-2 py-2">
                    {item.asset}
                  </td>

                  <td className="border border-gray-200 px-2 py-2">
                    {item.category}
                  </td>

                  <td className="border border-gray-200 px-2 py-2">
                    {item.requestType}
                  </td>

                  {/* Status */}
                  <td className="border border-gray-200 px-2 py-2">
                    <span className="bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded text-xs">
                      {item.status}
                    </span>
                  </td>

                  <td className="border border-gray-200 px-2 py-2">
                    {item.waitingOn}
                  </td>

                  {/* Action */}
                  <td className="border border-gray-200 px-2 py-2 text-center">
                    <button className="p-1 hover:bg-gray-200 rounded">
                      <FiMoreHorizontal />
                    </button>
                  </td>
                </tr>
              ))}

              {/* Empty State */}
              {requests.length === 0 && (
                <tr>
                  <td
                    colSpan={6}
                    className="border border-gray-200 px-2 py-3 text-center text-gray-500"
                  >
                    No requests found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-6 px-4 py-3 text-sm text-gray-500 border-t border-gray-200">
          <span>1 to 1 of 1</span>
          <span>Page 1 of 1</span>
        </div>
      </div>
    </>
  );
}