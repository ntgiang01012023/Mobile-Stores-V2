import { Layout, Row, Col, Typography, Image, notification, Tag } from "antd";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "../../stores/actions/Cart/CartActions";
import {
  faCartShopping,
  faCircleArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import ReusableButton from "../../components/common/ReusableButton";
import { useEffect } from "react";
import { fetchASingleProduct } from "../../stores/thunks/Product/ProductThunks";
import Loading from "../../components/common/Loading";
import "react-quill/dist/quill.snow.css";
import DOMPurify from "dompurify";

const { Content } = Layout;
const { Title, Text } = Typography;

const CustomContent = styled(Content)`
  background-color: var(--color-white);
  width: 100%;
  min-height: calc(100vh - 150px);
  padding: 30px 30px;
`;

function ProductDetail() {
  // React router dom
  const { id } = useParams();

  // Redux state
  const dispatch = useDispatch();
  const selectedProduct = useSelector(
    (state) => state.product?.selectedProduct
  );
  const loading = useSelector((state) => state.product?.loading);
  const error = useSelector((state) => state.product?.error);

  // useEffect loading a single product
  useEffect(() => {
    dispatch(fetchASingleProduct(id));

    window.scrollTo(0, 0);
  }, [dispatch, id]);

  // Event Handlers
  const handleClickOrderNow = (product) => {
    dispatch(addProductToCart(product));

    notification.success({
      message: "Success",
      description: "Product added to cart",
      duration: 2,
    });
  };

  // Sử dụng thư viện Quill Delta to HTML để chuyển đổi Delta thành HTML
  const sanitizedHTML = DOMPurify.sanitize(selectedProduct?.description);

  return (
    <>
      <CustomContent>
        {loading && <Loading />}
        {error && <p>Error: {error.message}</p>}
        {!loading && !error && !selectedProduct && <p>Product not found</p>}
        {!loading && !error && selectedProduct && (
          <>
            <Row gutter={(16, 16)}>
              <Col
                xs={24}
                sm={24}
                md={24}
                lg={12}
                xl={12}
                xxl={12}
                style={{
                  textAlign: "center",
                }}
              >
                <Image
                  width="auto"
                  height="400px"
                  style={{
                    objectFit: "cover",
                  }}
                  src={selectedProduct.image}
                />
              </Col>
              <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                <Title level={3}>{selectedProduct.name}</Title>

                <Title level={5}>
                  Item Code : <Tag color="#eeae44">{selectedProduct.id}</Tag>
                </Title>

                <Title level={5}>
                  manufacturer :{" "}
                  <Text type="default">{selectedProduct.manufacturer}</Text>
                </Title>
                <Title level={5}>
                  category : <Link>{selectedProduct.category}</Link>
                </Title>
                <Title level={5}>
                  Availble units in stock :{" "}
                  <Text type="default">{selectedProduct.quantity}</Text>
                </Title>
                <Title level={4}>{selectedProduct.price} USD</Title>
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
                  onClick={() => handleClickOrderNow(selectedProduct)}
                  icon={faCartShopping}
                  iconFlip="horizontal"
                  text="Order Now"
                />
              </Col>
            </Row>

            <Row
              gutter={(16, 16)}
              style={{
                borderTop: "1px solid var(--color-border2)",
                marginTop: "30px",
                padding: "30px 20px",
              }}
            >
              <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                <Title level={5} style={{ textAlign: "center" }}>
                  Description
                </Title>

                <div
                  dangerouslySetInnerHTML={{
                    __html: sanitizedHTML,
                  }}
                />
              </Col>
            </Row>
          </>
        )}
      </CustomContent>
    </>
  );
}

export default ProductDetail;
