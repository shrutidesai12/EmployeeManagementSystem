// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Sidebar from "./components/layout/Sidebar";
// import CEODashboard from "./pages/Dashboard";
// import Employees from "./pages/Employees"; // 👈 create this


// function App() {
//   return (
//     <BrowserRouter>
//       <div className="flex">
//         <Sidebar />

//         <div className="flex-1">
//           <Routes>
//             <Route path="/" element={<CEODashboard />} />
//             <Route path="/ceo-dashboard" element={<CEODashboard />} />
//             <Route path="/employees" element={<Employees />} /> {/* ✅ */}

//           </Routes>
//         </div>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;



import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./Layout/AppLayout";

import CEODashboard from "./pages/dashboard/Dashboard";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return <AppRoutes />;
}

export default App;