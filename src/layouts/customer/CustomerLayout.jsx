import { Outlet } from "react-router-dom";

import { Layout } from "antd";

import styled from "styled-components";

import Header from "../../components/common/Header";

import Footer from "../../components/common/Footer";

// Styled Components
const CustomLayout = styled(Layout)`
  background-color: var(--color-white);
  width: 100%;
  min-height: 100vh;
`;

function CustomerLayout() {
  return (
    <>
      <CustomLayout>
        <Header />
        <Outlet />
        <Footer />
      </CustomLayout>
    </>
  );
}

export default CustomerLayout;
