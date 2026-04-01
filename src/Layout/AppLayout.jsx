import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function AppLayout() {
  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <Sidebar />

      {/* Main content area */}
      <div className="flex-1 flex flex-col">

        {/* Navbar */}
        <Navbar />

        {/* Page content */}
        <div className="flex-1 overflow-y-auto " style={{ backgroundColor: "#F5F5F5" }}>
          <Outlet /> {/* This is where your routed pages render */}
        </div>
      </div>
    </div>
  );
}