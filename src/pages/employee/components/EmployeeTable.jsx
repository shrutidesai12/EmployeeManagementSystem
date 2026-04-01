// import React from "react";
// import { Eye } from "lucide-react";
// import ProgressBar from "../../../components/ui/ProgressBar";
// import Stars from "../../../components/ui/Stars";
// import { useNavigate } from "react-router-dom";

// const EmployeeTable = ({ employees }) => {
//   const navigate = useNavigate();
//   return (
//     <table className="w-full text-sm">
//       <thead className="bg-gray-50 text-gray-500 text-[10px] uppercase">
//   <tr className="text-left">
//     <th className="px-16 py-2">Employee</th>
//     <th className="px-1 py-2">Department & Role</th>
//     <th className="px-3 py-2">Utilization</th>
//     <th className="px-3 py-2">Performance</th>
//     <th className="px-3 py-2">Attrition Risk</th>
//     <th className="px-3 py-2">Availability</th>
//     <th className="px-3 py-2">Actions</th>
//   </tr>
// </thead>

//      <tbody className="text-xs">
//   {employees.map((emp, i) => (
//     <tr key={i} className="border-t border-gray-100 hover:bg-gray-50">
      
//       <td className="px-3 py-2 flex items-center gap-2">
//         <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs font-medium">
//           {emp.initials}
//         </div>
//         <div>
//           <p className="font-medium text-gray-900 text-sm">{emp.name}</p>
//           <p className="text-[10px] text-gray-500">{emp.tenure}</p>
//         </div>
//       </td>

//       <td className="px-3 py-2">
//         <p className="text-gray-900 text-sm">{emp.dept}</p>
//         <p className="text-[10px] text-gray-500">{emp.role}</p>
//       </td>

//       <td className="px-3 py-2"><ProgressBar value={emp.utilization} /></td>
//       <td className="px-3 py-2"><Stars value={emp.rating} /></td>

//       <td className="px-3 py-2">
//         <span className="bg-green-100 text-green-600 px-2 py-0.5 rounded-full text-[10px]">
//           {emp.risk}
//         </span>
//       </td>

//       <td className={`px-3 py-2 font-medium text-xs ${
//         emp.availability === "Overloaded"
//           ? "text-red-500"
//           : "text-orange-500"
//       }`}>
//         {emp.availability}
//       </td>

//     <td className="px-3 py-2">
//   <Eye
//     className="text-gray-500 cursor-pointer"
//     size={16}
//     onClick={() =>
//       navigate(`/employees/${emp.id}`, { state: emp })
//     }
//   />
// </td>

//     </tr>
//   ))}
// </tbody>
//     </table>
    
    
//   );
// };

// export default EmployeeTable;




import React from "react";
import { Eye } from "lucide-react";
import ProgressBar from "../../../components/ui/ProgressBar";
import Stars from "../../../components/ui/Stars";
import { useNavigate } from "react-router-dom";

const EmployeeTable = ({ employees }) => {
  const navigate = useNavigate();

  return (
    <div className="w-full overflow-x-auto"> {/* ✅ SCROLL FOR MOBILE */}
      <table className="min-w-[800px] w-full text-sm">
        
        {/* HEADER */}
        <thead className="bg-gray-50 text-gray-500 text-[10px] uppercase">
          <tr className="text-left">
            <th className="px-4 md:px-6 py-2">Employee</th>
            <th className="px-2 py-2">Department & Role</th>
            <th className="px-2 py-2 hidden sm:table-cell">Utilization</th>
            <th className="px-2 py-2 hidden sm:table-cell">Performance</th>
            <th className="px-2 py-2 hidden md:table-cell">Attrition Risk</th>
            <th className="px-2 py-2 hidden md:table-cell">Availability</th>
            <th className="px-2 py-2">Actions</th>
          </tr>
        </thead>

        {/* BODY */}
        <tbody className="text-xs">
          {employees.map((emp) => (
            <tr
              key={emp.id}
              className="border-t border-gray-100 hover:bg-gray-50"
            >
              
              {/* EMPLOYEE */}
              <td className="px-4 md:px-6 py-3 flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs font-medium">
                  {emp.initials}
                </div>
                <div>
                  <p className="font-medium text-gray-900 text-sm">
                    {emp.name}
                  </p>
                  <p className="text-[10px] text-gray-500">
                    {emp.tenure}
                  </p>
                </div>
              </td>

              {/* DEPT */}
              <td className="px-2 py-3">
                <p className="text-gray-900 text-sm">{emp.dept}</p>
                <p className="text-[10px] text-gray-500">{emp.role}</p>
              </td>

              {/* UTILIZATION */}
              <td className="px-2 py-3 hidden sm:table-cell">
                <ProgressBar value={emp.utilization} />
              </td>

              {/* PERFORMANCE */}
              <td className="px-2 py-3 hidden sm:table-cell">
                <Stars value={emp.rating} />
              </td>

              {/* RISK */}
              <td className="px-2 py-3 hidden md:table-cell">
                <span className="bg-green-100 text-green-600 px-2 py-0.5 rounded-full text-[10px]">
                  {emp.risk}
                </span>
              </td>

              {/* AVAILABILITY */}
              <td
                className={`px-2 py-3 hidden md:table-cell font-medium text-xs ${
                  emp.availability === "Overloaded"
                    ? "text-red-500"
                    : "text-orange-500"
                }`}
              >
                {emp.availability}
              </td>

              {/* ACTION */}
              <td className="px-2 py-3">
                <Eye
                  className="text-gray-500 cursor-pointer"
                  size={16}
                  onClick={() =>
                    navigate(`/employees/${emp.id}`, { state: emp })
                  }
                />
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
};

export default EmployeeTable;