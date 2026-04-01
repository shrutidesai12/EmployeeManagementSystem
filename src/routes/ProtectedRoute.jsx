import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  // 🔐 Replace this with real auth logic (token, login state, etc.)
  const isAuthenticated = localStorage.getItem("token");

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;