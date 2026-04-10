import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "../Layout/AppLayout";

import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import LeaveDashboard from "../pages/leaves/LeaveDashboard";
import Me from "../pages/Me/Me";
import KekaHome from "../pages/dashboard/Dashboard";
import Employees from "../pages/employee/Employees";
import EmployeeDetail from "../pages/employee/EmployeeDetail";
import EmployeeSkill from "../pages/employee/EmployeeSkill";
import Login from "../auth/Login";
import Performance from "../pages/performance/Performance";
import ProfilePage from "../pages/dashboard/ProfilePage";
import AddDocumentDetailsPage from "../components/DashboardComponents/EmployeeprofileComponents/DocumentTab/AddDocumentDetailsPage";
import EmployeeDirectory from "../pages/Organization/OrganizationMain";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<PublicRoute />}>
          <Route path="/login" element={<Login />} />
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route element={<AppLayout />}>

            <Route path="/" element={<KekaHome />} />
            <Route path="/dashboard" element={<KekaHome/>} />
            <Route path="/employees/:id" element={<EmployeeDetail />} />
            <Route path="/employees/:id/skills" element={<EmployeeSkill />} />
            <Route path="/performance" element={<Performance />} />
            <Route path="/leave" element={<LeaveDashboard />} />
            <Route path="/employees/:id/profile" element={<ProfilePage />} />
            <Route path="/add-document-details" element={<AddDocumentDetailsPage />} />
            <Route path="/employees" element={<EmployeeDirectory />} />
            <Route path="/me" element={<Me />} />
          </Route>
        </Route>

        <Route path="*" element={<div>Page Not Found</div>} />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;