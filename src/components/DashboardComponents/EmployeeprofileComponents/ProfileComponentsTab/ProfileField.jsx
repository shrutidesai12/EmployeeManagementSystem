import React from "react";

export default function ProfileField({ label, value }) {
  return (
    <div>
      <p className="text-[10px] uppercase text-gray-400 tracking-wide">
        {label}
      </p>
      <p className="text-sm text-gray-800">
        {value || "-Not Set-"}
      </p>
    </div>
  );
}