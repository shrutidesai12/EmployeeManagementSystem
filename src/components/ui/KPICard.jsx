import React from "react";

const KPICard = ({ icon: Icon, label, value, color }) => (
  <div className="bg-white rounded-xl p-5 flex items-center gap-4 shadow-md shadow-gray-300/40">
    <div className={`w-10 h-10 flex items-center justify-center rounded-full ${color}`}>
      <Icon size={18} />
    </div>
    <div>
      <p className="text-xs text-gray-500">{label}</p>
      <p className="text-2xl font-semibold text-gray-900">{value}</p>
    </div>
  </div>
);

export default KPICard;