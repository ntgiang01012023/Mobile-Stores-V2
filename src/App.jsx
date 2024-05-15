import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomerLayout from "./layouts/customer/CustomerLayout";
import Home from "./pages/customer/Home";
import ProductDetail from "./pages/customer/ProductDetail";
import Cart from "./pages/customer/Cart";
import NotFound from "./pages/customer/NotFound";
import AdminLayout from "./layouts/admin/AdminLayout";
import Login from "./pages/admin/Login";
import AddProduct from "./pages/admin/AddProduct";

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
            <Route index element={<Login />} />
            <Route path="login" element={<Login />} />
            <Route path="add-product" element={<AddProduct />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
