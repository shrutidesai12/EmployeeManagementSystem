

// import React, { useState } from "react";
// import {
//   LayoutDashboard,
//   Users,
//   UserPlus,
//   Star,
//   GraduationCap,
//   FolderKanban,
//   Clock,
//   BarChart3,
//   Building2,
//   DollarSign,
//   Handshake,
//   Brain,
//   BookOpen,
//   ChevronDown,
//   ChevronLeft,
//   ChevronRight,
// } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// export default function Sidebar() {
//   // ✅ MULTIPLE OPEN SECTIONS (FIXED)
//   const [openMenus, setOpenMenus] = useState(() => {
//     const saved = localStorage.getItem("sidebarMenus");
//     return saved ? JSON.parse(saved) : ["PEOPLE"];
//   });

//   const [collapsed, setCollapsed] = useState(false);
//   const navigate = useNavigate();

//   // ✅ TOGGLE LOGIC (OPEN/CLOSE MANUALLY ONLY)
//   const toggleMenu = (menu) => {
//     let updatedMenus;

//     if (openMenus.includes(menu)) {
//       updatedMenus = openMenus.filter((m) => m !== menu); // close
//     } else {
//       updatedMenus = [...openMenus, menu]; // open
//     }

//     setOpenMenus(updatedMenus);
//     localStorage.setItem("sidebarMenus", JSON.stringify(updatedMenus));
//   };

//   return (
//     <div
//       className={`h-screen bg-[#718FC2] text-gray-300 flex flex-col justify-between transition-all duration-300 ${
//         collapsed ? "w-20" : "w-64"
//       }`}
//     >
//       {/* TOP */}
//       <div>
//         {/* HEADER */}
//         <div className="flex items-center justify-between p-4 border-b border-white">
//           {!collapsed && (
//             <span className="text-white text-lg font-semibold">
//               DigiElevate
//             </span>
//           )}

//           <button onClick={() => setCollapsed(!collapsed)}>
//             {collapsed ? (
//               <ChevronRight size={20} />
//             ) : (
//               <ChevronLeft size={20} />
//             )}
//           </button>
//         </div>

//         {/* MENU */}
//         <div className="p-3 space-y-4">
          
//           {/* OVERVIEW */}
//           <Section
//             title="OVERVIEW"
//             collapsed={collapsed}
//             open={openMenus.includes("OVERVIEW")}
//             toggle={() => toggleMenu("OVERVIEW")}
//           >
//             <MenuItem
//               icon={<LayoutDashboard size={18} />}
//               text="CEO Dashboard"
//               collapsed={collapsed}
//               onClick={() => navigate("/ceo-dashboard")}
//             />
//           </Section>

//           {/* PEOPLE */}
//           <Section
//             title="PEOPLE"
//             collapsed={collapsed}
//             open={openMenus.includes("PEOPLE")}
//             toggle={() => toggleMenu("PEOPLE")}
//           >
//             <MenuItem
//               icon={<Users size={18} />}
//               text="Employees"
//               collapsed={collapsed}
//               onClick={() => navigate("/employees")}
//             />

//             <MenuItem
//               icon={<Clock size={18} />}
//               text="Leave"
//               collapsed={collapsed}
//               onClick={() => navigate("/leave")}
//             />

//             <MenuItem
//               icon={<UserPlus size={18} />}
//               text="Recruitment"
//               collapsed={collapsed}
//             />

//             <MenuItem
//               icon={<Star size={18} />}
//               text="Performance"
//               collapsed={collapsed}
//               onClick={() => navigate("/performance")}

//             />

//             <MenuItem
//               icon={<GraduationCap size={18} />}
//               text="L&D Tracking"
//               collapsed={collapsed}
//             />
//           </Section>

//           {/* PROJECTS */}
//           <Section
//             title="PROJECTS"
//             collapsed={collapsed}
//             open={openMenus.includes("PROJECTS")}
//             toggle={() => toggleMenu("PROJECTS")}
//           >
//             <MenuItem
//               icon={<FolderKanban size={18} />}
//               text="Command Centre"
//               collapsed={collapsed}
//             />
//             <MenuItem
//               icon={<Clock size={18} />}
//               text="Timesheets"
//               collapsed={collapsed}
//             />
//             <MenuItem
//               icon={<BarChart3 size={18} />}
//               text="Staff Planning"
//               collapsed={collapsed}
//             />
//           </Section>

//           {/* BUSINESS */}
//           <Section
//             title="BUSINESS"
//             collapsed={collapsed}
//             open={openMenus.includes("BUSINESS")}
//             toggle={() => toggleMenu("BUSINESS")}
//           >
//             <MenuItem
//               icon={<Building2 size={18} />}
//               text="Clients"
//               collapsed={collapsed}
//             />
//             <MenuItem
//               icon={<DollarSign size={18} />}
//               text="Finance"
//               collapsed={collapsed}
//             />
//             <MenuItem
//               icon={<Handshake size={18} />}
//               text="Partnerships"
//               collapsed={collapsed}
//             />
//           </Section>

//           {/* AI */}
//           <Section
//             title="AI SUITE"
//             collapsed={collapsed}
//             open={openMenus.includes("AI")}
//             toggle={() => toggleMenu("AI")}
//           >
//             <MenuItem
//               icon={<Brain size={18} />}
//               text="Strategy Advisor"
//               collapsed={collapsed}
//             />
//             <MenuItem
//               icon={<BookOpen size={18} />}
//               text="Knowledge Base"
//               collapsed={collapsed}
//             />
//           </Section>
//         </div>
//       </div>

//       {/* PROFILE */}
//       <div className="p-4 border-t border-gray-800 flex items-center gap-3">
//         <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center text-sm font-bold">
//           AK
//         </div>

//         {!collapsed && (
//           <div>
//             <div className="text-white text-sm">Admin</div>
//             <div className="text-xs text-gray-400 flex items-center gap-1">
//               <span className="w-2 h-2 bg-green-500 rounded-full"></span>
//               CEO
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// /* SECTION */
// function Section({ title, children, open, toggle, collapsed }) {
//   return (
//     <div>
//       {!collapsed && (
//         <div
//           className="flex items-center justify-between text-xs font-semibold text-gray-600 mb-2 cursor-pointer"
//           onClick={toggle}
//         >
//           {title}
//           <ChevronDown
//             size={16}
//             className={`transition-transform ${open ? "rotate-180" : ""}`}
//           />
//         </div>
//       )}

//       {(open || collapsed) && (
//         <div className="space-y-1">{children}</div>
//       )}
//     </div>
//   );
// }

// /* MENU ITEM */
// function MenuItem({ icon, text, collapsed, active, onClick }) {
//   return (
//     <div
//       onClick={onClick}
//       className={`flex items-center gap-3 p-2 rounded cursor-pointer ${
//         active ? "bg-gray-200 text-black" : "hover:bg-gray-500"
//       }`}
//     >
//       {icon}
//       {!collapsed && text}
//     </div>
//   );
// }

import React from "react";
import { Home, User, CheckSquare, Users, Layers } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { HiOutlineCurrencyRupee } from "react-icons/hi2";

export default function Sidebar() {
  const navigate = useNavigate();

  const menuItems = [
    { name: "Home", icon: <Home size={24} />, path: "/dashboard" },
    { name: "Me", icon: <User size={24} />, path: "/me" },
    { name: "Inbox", icon: <CheckSquare size={24} />, path: "/inbox" },
    { name: "My Team", icon: <Users size={24} />, path: "/team" },
    { name: "My Finances", icon: <HiOutlineCurrencyRupee size={24} />, path: "/finances" },
    { name: "Org", icon: <Layers size={24} />, path: "/employees" },
  ];

  return (
    <div className="w-24 flex flex-col h-screen text-white" style={{ backgroundColor: "#718FC8" }}>
      
      {/* Logo */}
      <div
        className="flex items-center justify-center h-16 border-b border-[#3B4265]"
        style={{ backgroundColor: " #606062" }}
      >
        <span className="text-lg font-bold">DigiElevate</span>
      </div>

      {/* Menu items */}
      <div className="flex flex-col items-center mt-4 space-y-6">
        {menuItems.map((item) => (
          <div
            key={item.name}
            className="flex flex-col items-center gap-1 cursor-pointer hover:text-gray-300"
            onClick={() => navigate(item.path)}
          >
            {item.icon}
            <span className="text-xs font-medium">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}