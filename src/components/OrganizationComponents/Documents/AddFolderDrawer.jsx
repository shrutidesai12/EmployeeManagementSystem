import React, { useState } from "react";
import { FaTimes, FaInfoCircle, FaUpload } from "react-icons/fa";

const AddDocumentFolderDrawer = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    documentTitle: "",
    shortDescription: "",
    isPrivate: false,
    acknowledgementRequired: false,
    hasExpiry: false,
    expiryDate: "",
    legalEntity: "1 Legal Entity Selected",
    businessUnit: "1 Business Unit Selected",
    location: "All Locations Selected",
    department: "All Departments Selected",
    workerType: "All Worker Types Selected",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : type === "file" ? files[0] : value,
    }));
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/20 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[390px] bg-white z-50 shadow-2xl transition-transform duration-300 flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200">
          <h2 className="text-[16px] font-medium text-[#4b5563]">
            Add new document
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <FaTimes size={15} />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-4 py-4 text-[12px]">
          {/* Document Title */}
          <div className="mb-4">
            <label className="block mb-1.5 text-[#4b5563] font-medium">
              Name of the document
            </label>
            <input
              type="text"
              name="documentTitle"
              value={formData.documentTitle}
              onChange={handleChange}
              placeholder="Enter document name"
              className="w-full h-10 px-3 rounded-[4px] border border-gray-300 text-[12px] outline-none focus:border-violet-500"
            />
          </div>

          {/* Short Description */}
          <div className="mb-4">
            <label className="block mb-1.5 text-[#4b5563] font-medium">
              Short Description
            </label>
            <textarea
              name="shortDescription"
              value={formData.shortDescription}
              onChange={handleChange}
              rows={3}
              placeholder="Ex: Organization documents will be available here"
              className="w-full px-3 py-2 rounded-[4px] border border-gray-300 text-[12px] outline-none resize-none focus:border-violet-500"
            />
          </div>

          {/* Upload File */}
          <div className="mb-4">
            <label className="block mb-1.5 text-[#4b5563] font-medium">
              Upload document
            </label>

            <label className="w-full border border-dashed border-gray-300 rounded-[4px] px-3 py-4 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-gray-50 transition">
              <FaUpload className="text-violet-500 mb-2" size={16} />
              <span className="text-[12px] text-gray-600 mb-1">
                Click to upload document
              </span>
              <span className="text-[11px] text-gray-400">
                PDF, DOC, DOCX, JPG, PNG
              </span>
              <input
                type="file"
                name="file"
                onChange={handleChange}
                className="hidden"
              />
            </label>

            {formData.file && (
              <p className="mt-2 text-[11px] text-[#718fc2] font-medium ">
                Selected: {formData.file.name}
              </p>
            )}
          </div>

          {/* Acknowledgement */}
          <div className="mb-3">
            <label className="flex items-center gap-2 text-[#4b5563] text-[12px]">
              <input
                type="checkbox"
                name="acknowledgementRequired"
                checked={formData.acknowledgementRequired}
                onChange={handleChange}
                className="w-4 h-4 accent-violet-600"
              />
              Acknowledgement required
            </label>
          </div>

          {/* Expiry */}
          <div className="mb-4">
            <label className="flex items-center gap-2 text-[#4b5563] text-[12px] mb-2">
              <input
                type="checkbox"
                name="hasExpiry"
                checked={formData.hasExpiry}
                onChange={handleChange}
                className="w-4 h-4 accent-violet-600"
              />
              Set expiration date
            </label>

            {formData.hasExpiry && (
              <input
                type="date"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleChange}
                className="w-full h-10 px-3 rounded-[4px] border border-gray-300 text-[12px] outline-none focus:border-violet-500"
              />
            )}
          </div>

          {/* Private */}
          <div className="mb-3">
            <label className="flex items-center gap-2 text-[#4b5563] text-[12px]">
              <input
                type="checkbox"
                name="isPrivate"
                checked={formData.isPrivate}
                onChange={handleChange}
                className="w-4 h-4 accent-violet-600"
              />
              Make this document private
            </label>
          </div>

          {/* Access Section */}
          <div className="mb-3">
            <div className="flex items-center gap-2 text-[#4b5563] mb-3">
              <FaInfoCircle size={12} className="text-gray-400" />
              <span className="text-[12px] font-medium">Set document access</span>
            </div>

            <div className="border border-gray-200 rounded-[4px] p-4 space-y-4">
              {["legalEntity", "businessUnit", "location", "department", "workerType"].map((field) => (
                <div key={field}>
                  <label className="block mb-1.5 text-[#4b5563] text-[12px]">
                    {field === "legalEntity" && "Legal entities"}
                    {field === "businessUnit" && "Business Units"}
                    {field === "location" && "Locations"}
                    {field === "department" && "Departments"}
                    {field === "workerType" && "Worker types"}
                    <FaInfoCircle className="inline ml-1 text-gray-400" size={10} />
                  </label>
                  <select
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    className="w-full h-9 px-3 rounded-[4px] border border-gray-200 text-[12px] bg-white outline-none text-gray-600"
                  >
                    <option>{formData[field]}</option>
                  </select>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 px-4 py-4 flex justify-end gap-3 bg-white">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-[4px] border border-gray-300 text-[12px] text-gray-600 bg-white hover:bg-gray-50"
          >
            Cancel
          </button>

          <button className="px-5 py-2 rounded-[4px] bg-[#718fc2] text-white text-[12px] hover:bg-[#5a6fc2] shadow-sm">
            Add
          </button>
        </div>
      </div>
    </>
  );
};

export default AddDocumentFolderDrawer;