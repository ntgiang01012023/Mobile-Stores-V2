import { Outlet } from "react-router-dom";
import HeaderApp from "../../components/common/Header";
import FooterApp from "../../components/common/Footer";

function AdminLayout() {
  return (
    <div>
      <HeaderApp />
      <Outlet />
      <FooterApp />
    </div>
  );
}

export default AdminLayout;
