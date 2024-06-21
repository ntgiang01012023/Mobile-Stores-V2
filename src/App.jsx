import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomerLayout from "./layouts/customer/CustomerLayout";
import Home from "./pages/customer/Home";
import ProductDetail from "./pages/customer/ProductDetail";
import Cart from "./pages/customer/Cart";
import NotFound from "./pages/customer/NotFound";
import AdminLayout from "./layouts/admin/AdminLayout";
import Login from "./pages/admin/Login";
import AddProduct from "./pages/admin/AddProduct";
import ProtectedRoute from "./utils/ProtectedRoute";
import RejectedRoute from "./utils/RejectedRoute";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Route Customer */}
          <Route path="/" element={<CustomerLayout />}>
            <Route index element={<Home />} />
            <Route path="product/:id" element={<ProductDetail />} />
            <Route path="cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Route>

          {/* Route Admin */}
          <Route path="/admin/" element={<AdminLayout />}>
            <Route element={<RejectedRoute />}>
              <Route index element={<Login />} />
            </Route>

            <Route element={<RejectedRoute />}>
              <Route path="login" element={<Login />} />
            </Route>

            <Route element={<ProtectedRoute />}>
              <Route path="add-product" element={<AddProduct />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
