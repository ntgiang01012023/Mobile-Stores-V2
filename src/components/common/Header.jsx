import { Button, Col, Layout, Row, Typography } from "antd";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { APP_ROUTE } from "../../utils/Constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

// Ant design
const { Header } = Layout;
const { Title, Text } = Typography;

// Styled components
const CustomHeader = styled(Header)`
  background-color: var(--color-gray);
  padding: 0 30px;
  width: 100%;
  height: 150px;
  line-height: 0 !important;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CustomTitle = styled(Title)`
  margin-bottom: 0 !important;
`;

function HeaderApp() {
  // Constants
  const location = useLocation();
  const url = location.pathname;

  let customTitle, customText, showCartButton, showLogoutButton;

  switch (url) {
    case APP_ROUTE.HOME:
      customTitle = "Products";
      customText = "All the available products in our store";
      showCartButton = true;
      showLogoutButton = false;
      break;
    case APP_ROUTE.PRODUCT:
      customTitle = "Products";
      customText = "";
      showCartButton = false;
      showLogoutButton = false;
      break;
    case APP_ROUTE.CART:
      customTitle = "Cart";
      customText = "All the selected products in your cart";
      showCartButton = false;
      showLogoutButton = false;
      break;
    case APP_ROUTE.ADMIN:
      customTitle = "Mobile Store";
      customText = "";
      showCartButton = false;
      showLogoutButton = false;
      break;
    case APP_ROUTE.ADMIN_LOGIN:
      customTitle = "Mobile Store";
      customText = "";
      showCartButton = false;
      showLogoutButton = false;
      break;
    case APP_ROUTE.ADMIN_ADD_PRODUCT:
      customTitle = "Products";
      customText = "Add products";
      showCartButton = false;
      showLogoutButton = true;
      break;
    default:
      customTitle = "Products";
      customText = "";
      showCartButton = false;
  }

  return (
    <>
      <CustomHeader>
        <Row align="top" justify="space-between" style={{ width: "100%" }}>
          <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
            <CustomTitle>{customTitle}</CustomTitle>
            <Text>{customText}</Text>
          </Col>
          {showCartButton && (
            <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} flex="none">
              <Button>
                <Link to={APP_ROUTE.CART}>
                  <FontAwesomeIcon
                    icon={faCartShopping}
                    flip="horizontal"
                    style={{
                      marginRight: "6px",
                    }}
                  />
                  view cart
                </Link>
              </Button>
            </Col>
          )}
          {showLogoutButton && (
            <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} flex="none">
              <Button
                style={{
                  background: "var(--color-red)",
                  color: "var(--color-white)",
                  borderRadius: "5px",
                }}
                size="large"
              >
                <Link to={APP_ROUTE.ADMIN_LOGIN}>logout</Link>
              </Button>
            </Col>
          )}
        </Row>
      </CustomHeader>
    </>
  );
}

export default HeaderApp;
