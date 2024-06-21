import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

function RejetedRoute() {
  const { isAuthenticated } = useAuth();

  return isAuthenticated() ? <Navigate to="/admin/add-product" /> : <Outlet />;
}

export default RejetedRoute;
