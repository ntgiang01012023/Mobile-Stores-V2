import { Card, Col, Row, Typography } from "antd";
import styled from "styled-components";
import {
  faCartShopping,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import ReusableButton from "../common/ReusableButton";

const { Title } = Typography;

// Styled components
const CustomImage = styled.img`
  width: auto;
  height: 300px;
  object-fit: cover;
`;

function ProductCart({
  product,
  handleNavigateProductDetail,
  handleClickOrderNow,
}) {
  const { id, name, image, description, price, quantity } = product;

  // const renderPlainTextDescription = (html) => {
  //   const tempElement = document.createElement("div");
  //   tempElement.innerHTML = html;
  //   return tempElement.textContent || tempElement.innerText || "";
  // };

  return (
    <>
      <Col key={id} xs={24} sm={12} md={7} lg={6} xl={6} xxl={6}>
        <Card title={name} hoverable>
          <Col style={{ textAlign: "center" }}>
            <CustomImage alt={name} src={image} />
          </Col>
          {/* <Title level={5}>{renderPlainTextDescription(description)}</Title> */}

          <Title level={5}>{price} USD</Title>
          <Title level={5}>{quantity} units in stock</Title>

          <Row gutter={[16, 16]}>
            <Col xs={24} sm={24} md={24} lg={24} xl={12} xxl={12}>
              <ReusableButton
                width="100%"
                backgroundColor="var(--color-blue)"
                color="var(--color-white)"
                size="large"
                onClick={() => handleNavigateProductDetail(product)}
                icon={faCircleInfo}
                iconFlip="horizontal"
                text="Details"
              />
            </Col>
            <Col xs={24} sm={24} md={24} lg={24} xl={12} xxl={12}>
              <ReusableButton
                width="100%"
                backgroundColor="var(--color-orange)"
                color="var(--color-white)"
                size="large"
                onClick={() => handleClickOrderNow(product)}
                icon={faCartShopping}
                iconFlip="horizontal"
                text="Order Now"
              />
            </Col>
          </Row>
        </Card>
      </Col>
    </>
  );
}

ProductCart.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
  handleNavigateProductDetail: PropTypes.func.isRequired,
  handleClickOrderNow: PropTypes.func.isRequired,
};

export default ProductCart;
