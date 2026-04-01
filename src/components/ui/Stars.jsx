import React from "react";

const Stars = ({ value }) => {
  const full = Math.floor(value);

  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <span key={i} className={i < full ? "text-orange-400" : "text-gray-300"}>
          ★
        </span>
      ))}
      <span className="text-gray-500 ml-1 text-sm">{value}</span>
    </div>
  );
};

export default Stars;