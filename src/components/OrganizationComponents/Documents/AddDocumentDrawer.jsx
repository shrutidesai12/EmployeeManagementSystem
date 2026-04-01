import React, { useRef, useState } from "react";
import { FaTimes, FaPaperclip, FaInfoCircle, FaTrashAlt } from "react-icons/fa";

const AddOrganizationDocumentDrawer = ({ isOpen, onClose }) => {
  const fileInputRef = useRef(null);

  const [showDescription, setShowDescription] = useState(false);

  const [formData, setFormData] = useState({
    documentName: "",
    description: "",
    allowDownload: true,
    acknowledgementRequired: false,
    setExpiry: false,
    expiryDate: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, checked, type, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : type === "file"
          ? files[0]
          : value,
    }));
  };

  const handleRemoveFile = () => {
    setFormData((prev) => ({ ...prev, file: null }));
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
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
        className={`fixed top-0 right-0 h-full w-full sm:w-[460px] bg-white z-50 shadow-2xl transition-transform duration-300 flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200">
          <h2 className="text-[15px] font-medium text-[#4b5563]">
            Add new organization document
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <FaTimes size={14} />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-5 py-4 text-[12px]">
          {/* Document Name */}
          <div className="mb-5">
            <label className="block mb-1.5 text-[#4b5563] font-medium">
              Document name
            </label>
            <input
              type="text"
              name="documentName"
              value={formData.documentName}
              onChange={handleChange}
              placeholder="Policy 2"
              className="w-full h-10 px-3 rounded-[4px] border border-gray-300 text-[12px] outline-none focus:border-violet-500"
            />
          </div>

          {/* Add Description */}
          <div className="mb-5">
            {!showDescription ? (
              <button
                type="button"
                onClick={() => setShowDescription(true)}
                className="text-violet-600 text-[12px] font-medium hover:underline"
              >
                + Add description
              </button>
            ) : (
              <div>
                <label className="block mb-1.5 text-[#4b5563] font-medium">
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Enter document description"
                  className="w-full px-3 py-2 rounded-[4px] border border-gray-300 text-[12px] outline-none resize-none focus:border-violet-500"
                />
              </div>
            )}
          </div>

          {/* Allow Download */}
          <div className="mb-5">
            <label className="flex items-center gap-2 text-[#4b5563] text-[12px]">
              <input
                type="checkbox"
                name="allowDownload"
                checked={formData.allowDownload}
                onChange={handleChange}
                className="w-4 h-4 accent-violet-600"
              />
              Allow employees to download the document
            </label>
          </div>

          {/* Acknowledgement */}
          <div className="mb-5">
            <label className="flex items-center gap-2 text-[#4b5563] text-[12px]">
              <input
                type="checkbox"
                name="acknowledgementRequired"
                checked={formData.acknowledgementRequired}
                onChange={handleChange}
                className="w-4 h-4 accent-violet-600"
              />
              Acknowledgement required from employees
            </label>
          </div>

          {/* Expiry */}
          <div className="mb-5">
            <label className="flex items-center gap-2 text-[#4b5563] text-[12px] mb-2">
              <input
                type="checkbox"
                name="setExpiry"
                checked={formData.setExpiry}
                onChange={handleChange}
                className="w-4 h-4 accent-violet-600"
              />
              Set expiration date for the document
            </label>

            {formData.setExpiry && (
              <input
                type="date"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleChange}
                className="w-full h-10 px-3 rounded-[4px] border border-gray-300 text-[12px] outline-none focus:border-violet-500 mt-2"
              />
            )}
          </div>

          {/* Attachment */}
          <div className="mb-4">
            <label className="flex items-center gap-2 text-violet-600 text-[12px] font-medium mb-2 cursor-pointer hover:underline">
              <FaPaperclip size={11} />
              Add Attachment
              <FaInfoCircle size={11} className="text-gray-400 ml-1" />
              <input
                ref={fileInputRef}
                type="file"
                name="file"
                onChange={handleChange}
                className="hidden"
              />
            </label>

            {formData.file && (
              <div className="flex items-center justify-between text-[12px] text-violet-600 mt-1">
                <span className="truncate">{formData.file.name}</span>
                <button
                  type="button"
                  onClick={handleRemoveFile}
                  className="text-gray-400 hover:text-red-500 ml-3"
                >
                  <FaTrashAlt size={11} />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 px-5 py-4 flex justify-end gap-3 bg-white">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-[4px] border border-violet-300 text-[12px] text-violet-600 bg-white hover:bg-violet-50"
          >
            Cancel
          </button>

          <button className="px-5 py-2 rounded-[4px] bg-violet-600 text-white text-[12px] hover:bg-violet-700 shadow-sm">
            Add
          </button>
        </div>
      </div>
    </>
  );
};

export default AddOrganizationDocumentDrawer;