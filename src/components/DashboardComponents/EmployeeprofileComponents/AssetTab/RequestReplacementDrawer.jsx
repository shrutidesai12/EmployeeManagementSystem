import React, { useState } from "react";
import { FiX, FiChevronDown, FiUpload } from "react-icons/fi";

export default function RequestReplacementDrawer({
  isOpen,
  onClose,
  asset,
}) {
  const [selectedAsset, setSelectedAsset] = useState("");
  const [reason, setReason] = useState("");
  const [file, setFile] = useState(null);

  if (!isOpen) return null;

  // Dummy dropdown data
  const assetOptions = [
    "MacBook Pro - AS001",
    "Dell Monitor - AS002",
    "HP Laptop - AS003",
  ];

  return (
<div className="fixed top-16 right-0 bottom-0 left-0 z-50 flex justify-end">
          {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/30"
        onClick={onClose}
      ></div>

      {/* Drawer */}
      <div className="relative w-[420px] h-full bg-white shadow-lg flex flex-col">
        
        {/* Header (NO TOP PADDING) */}
        <div className="flex justify-between items-center border-b px-4 py-3 bg-gray-600 ">
          <h2 className="text-base font-semibold text-white">
            Replacement Request
          </h2>
          <button onClick={onClose}>
            <FiX />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-5">

          {/* Dropdown */}
          <div>
            <label className="text-sm font-medium">
              Choose Asset To Replace
            </label>

            <div className="relative mt-1">
              <select
                value={selectedAsset}
                onChange={(e) => setSelectedAsset(e.target.value)}
                className="w-full border rounded px-3 py-2 text-sm appearance-none border-gray-200"
              >
                <option value="">Select Asset</option>
                {assetOptions.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              </select>

              <FiChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500" />
            </div>
          </div>

          {/* Asset Details */}
          <div>
            <h3 className="text-sm font-semibold mb-2">
              Asset Details
            </h3>

            <div className="border rounded p-3 text-sm text-gray-700 space-y-2 border-gray-200 bg-gray-200 ">
              <div className="flex justify-between text-sm ">
                <span>Asset Name</span>
                <span>{asset?.name || "-"}</span>
              </div>

              <div className="flex justify-between text-sm">
                <span>Asset ID</span>
                <span>{asset?.assetId || "-"}</span>
              </div>

              <div className="flex justify-between text-sm">
                <span>Assigned On</span>
                <span>{asset?.assignedOn || "-"}</span>
              </div>

              <div className="flex justify-between text-sm">
                <span>Category / Type</span>
                <span>
                  {asset?.category || "-"} / {asset?.type || "-"}
                </span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="text-sm font-medium">
              Describe Issue
            </label>

            <textarea
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder="Enter issue..."
              className="w-full border rounded px-3 py-2 text-sm mt-1 border-gray-200"
              rows={3}
            />
          </div>

          {/* Upload */}
          <div>
            <label className="text-sm font-medium">
              Add Image
            </label>

            <div className="mt-1 border border-dashed rounded p-4 flex flex-col items-center justify-center text-sm text-gray-500">
              <FiUpload className="mb-2" />
              <input
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
                className="text-xs"
              />
            </div>
          </div>
        </div>

        {/* Footer Buttons (RIGHT SIDE) */}
        <div className=" px-4 py-3 flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-1.5 border rounded text-sm border-gray-200"
          >
            Cancel
          </button>

          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-[#718FC2] text-white rounded text-sm border-gray-200"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}