import { Layout, Row, Col, Typography, Image, Tag, notification } from "antd";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "../../stores/actions/CartActions";
import {
  faCartShopping,
  faCircleArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import ReusableButton from "../../components/common/ReusableButton";

const { Content } = Layout;
const { Title, Text } = Typography;

const CustomContent = styled(Content)`
  background-color: var(--color-white);
  width: 100%;
  min-height: calc(100vh - 150px);
  padding: 30px 30px;
`;

function ProductDetail() {
  // Redux state
  const dispatch = useDispatch();
  const product = useSelector((state) => state.cart?.selectedProduct);

  // Event Handlers
  const handleClickOrderNow = (product) => {
    dispatch(addProductToCart(product));

    notification.success({
      message: "Success",
      description: "Product added to cart",
      duration: 2,
    });
  };

  return (
    <>
      <CustomContent>
        <Row gutter={(16, 16)}>
          <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
            <Image width="100%" height="400px" src={product.thumbnail} />
          </Col>
          <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
            <Title level={3}>{product.title}</Title>
            <Title level={5}>{product.description}</Title>
            <Title level={5}>
              Item Code : <Tag color="#eeae44">{product.itemCode}</Tag>
            </Title>
            <Title level={5}>
              manufacturer : <Text type="default">{product.manufacturer}</Text>
            </Title>
            <Title level={5}>
              category : <Link>{product.category}</Link>
            </Title>
            <Title level={5}>
              Availble units in stock :
              <Text type="default">{product.stock}</Text>
            </Title>
            <Title level={4}>{product.price}USD</Title>
            <Link to="/">
              <ReusableButton
                backgroundColor="var(--color-green)"
                color="var(--color-white)"
                size="large"
                icon={faCircleArrowLeft}
                text="Back"
              />
            </Link>
            <ReusableButton
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
      </CustomContent>
    </>
  );
}

export default ProductDetail;
