import React from "react";

export default function ProfileProgress() {
  return (
    <div className="bg-white border border-gray-200">
      <div className="px-4 py-3 flex items-center justify-between">
        
        <div className="flex items-center gap-4 w-full">
          <p className="text-sm text-gray-700">
            Incomplete profile
          </p>

          <div className="w-[200px] bg-gray-200 h-2 rounded">
            <div className="bg-red-400 h-2 rounded w-[85%]"></div>
          </div>

          <p className="text-sm text-red-500 font-medium">
            85% completed
          </p>
        </div>

        <p className="text-xs text-gray-500">
          * All fields marked mandatory
        </p>

      </div>
    </div>
  );
}