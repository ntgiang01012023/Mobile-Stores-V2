import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { decodeToken } from "react-jwt";

export const useAuth = () => {
  const navigate = useNavigate();

  const isAuthenticated = () => {
    const token = Cookies.get("token");

    if (!token) {
      return false;
    }

    try {
      const decoded = decodeToken(token);
      return decoded.role === "ADMIN";
    } catch (error) {
      console.error("Error decoding token:", error);
      return false;
    }
  };

  const logout = () => {
    Cookies.remove("token");
    navigate("/admin/login");
  };

  return { isAuthenticated, logout };
};
