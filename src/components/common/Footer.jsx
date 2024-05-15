import { Col, Layout, Row, Typography } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { APP_ROUTE } from "../../utils/Constants";

// Ant design
const { Footer } = Layout;
const { Title, Text } = Typography;

// Styled components
const StyledUl = styled.ul`
  padding: 0;
  margin: 0;
`;

const StyledLi = styled.li`
  list-style-type: none;
  margin-bottom: 5px;
`;

function FooterApp() {
  return (
    <Footer style={{ background: "var(--color-gray)", padding: "24px 50px" }}>
      <Row gutter={[16, 16]} justify="space-around">
        <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
          <Title level={4}>Mobile Stores</Title>
          <Text>All the available products in our store</Text>
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
          <Title level={4}>Useful links</Title>
          <StyledUl>
            <StyledLi>
              <Link to={APP_ROUTE.HOME}>Home</Link>
            </StyledLi>
            <StyledLi>
              <Link to={APP_ROUTE.PRODUCT}>Product Details</Link>
            </StyledLi>
            <StyledLi>
              <Link to={APP_ROUTE.CART}>Cart</Link>
            </StyledLi>
          </StyledUl>
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
          <Title level={4}>Follow us</Title>
          <StyledUl>
            <StyledLi>
              <Link to="/facebook">Facebook</Link>
            </StyledLi>
            <StyledLi>
              <Link to="/instagram">Instagram</Link>
            </StyledLi>
            <StyledLi>
              <Link to="/twitter">Twitter</Link>
            </StyledLi>
            <StyledLi>
              <Link to="/youtube">Youtube</Link>
            </StyledLi>
          </StyledUl>
        </Col>
      </Row>
    </Footer>
  );
}

export default FooterApp;
