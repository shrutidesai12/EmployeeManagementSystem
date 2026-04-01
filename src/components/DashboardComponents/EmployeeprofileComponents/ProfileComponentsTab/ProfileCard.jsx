import React from "react";

export default function ProfileCard({ title, children, onEdit }) {
  return (
    <div className="bg-white border border-gray-200">
      
      {/* Header */}
      <div className="flex justify-between items-center border-b px-4 py-2 border-gray-200">
        <h3 className="text-sm font-medium text-gray-700">
          {title}
        </h3>

        {onEdit && (
          <button
            onClick={onEdit}
            className="text-xs text-blue-500"
          >
            Edit
          </button>
        )}
      </div>

      {/* Body */}
      <div className="px-4 py-4">
        {children}
      </div>

    </div>
  );
}