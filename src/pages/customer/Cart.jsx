import { Layout, Row, Typography, Button, Modal, Grid } from "antd";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  checkoutCart,
  clearCart,
  decreaseProductQuantity,
  increaseProductQuantity,
  removeProductFromCart,
} from "../../stores/actions/CartActions";
import {
  faCartShopping,
  faCircleArrowLeft,
  faCircleXmark,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import CartEmpty from "../../components/cart/CartEmpty";
import GrandTotal from "../../components/cart/GrandTotal";
import CartMobile from "../../components/cart/CartMobile";
import CartDesktop from "../../components/cart/CartDesktop";
import ReusableButton from "../../components/common/ReusableButton";

// Ant design
const { Content } = Layout;
const { Text } = Typography;
const { useBreakpoint } = Grid;

// Styled components
const CustomContent = styled(Content)`
  background-color: var(--color-white);
  width: 100%;
  min-height: calc(100vh - 150px);
  padding: 30px 30px;
`;

function Cart() {
  const screen = useBreakpoint();

  // Redux state
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart?.list);

  // Local state
  const [productIdToRemove, setProductIdToRemove] = useState(null);
  const [isClearCartModalOpen, setIsClearCartModalOpen] = useState(false);

  // Event Handlers
  const showModal = (productId) => {
    setProductIdToRemove(productId);
  };

  const handleOk = () => {
    dispatch(removeProductFromCart(productIdToRemove));
    setProductIdToRemove(null);
  };

  const handleCancel = () => {
    setProductIdToRemove(null);
  };

  const handleClearCart = () => {
    dispatch(clearCart());
    setIsClearCartModalOpen(false);
  };

  const handleCheckout = () => {
    dispatch(checkoutCart());
    navigate("/");
  };

  const handleIncreaseQuantity = (productId) => {
    dispatch(increaseProductQuantity(productId));
  };

  const handleDecreaseQuantity = (productId) => {
    dispatch(decreaseProductQuantity(productId));
  };

  // Column products
  const columns = [
    {
      title: "Product",
      dataIndex: "title",
      key: "title",
      render: (text, record) => <Text>{record.title}</Text>,
      width: "40%",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
      render: (text, record) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          <Button
            size="small"
            onClick={() => handleDecreaseQuantity(record.id)}
            style={{
              fontSize: "8px",
            }}
            disabled={record.quantity === 1}
          >
            <MinusOutlined />
          </Button>

          <Text style={{ margin: "0 8px" }}>{record.quantity}</Text>
          <Button
            size="small"
            onClick={() => handleIncreaseQuantity(record.id)}
            style={{
              fontSize: "8px",
            }}
            disabled={record.quantity === record.stock}
          >
            <PlusOutlined />
          </Button>
        </div>
      ),
      width: "15%",
    },
    {
      title: "Unit price",
      dataIndex: "price",
      key: "price",
      render: (text, record) => <Text>${record.price}</Text>,
      width: "15%",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (text, record) => <Text>${record.quantity * record.price}</Text>,
      width: "15%",
    },
    {
      title: "Action",
      dataIndex: "id",
      key: "action",
      render: (text, record) => (
        <>
          <ReusableButton
            backgroundColor="var(--color-red)"
            color="var(--color-white)"
            size="small"
            onClick={() => showModal(record.id)}
            icon={faXmark}
            text="Remove"
          />

          <Modal
            title="Remove Product?"
            open={productIdToRemove === record.id}
            onOk={handleOk}
            onCancel={handleCancel}
            closeIcon={false}
            centered
            maskClosable={false}
          >
            <p>Are you sure you want to remove this product?</p>
          </Modal>
        </>
      ),
      width: "15%",
    },
  ];

  return (
    <>
      <CustomContent>
        <Row
          justify="space-between"
          style={{
            marginBottom: "10px",
          }}
        >
          <ReusableButton
            backgroundColor="var(--color-red)"
            color="var(--color-white)"
            size="large"
            onClick={() => setIsClearCartModalOpen(true)}
            icon={faCircleXmark}
            text="Clear Cart"
          />

          <Modal
            title="Empty Your Cart?"
            open={isClearCartModalOpen}
            onOk={handleClearCart}
            onCancel={() => setIsClearCartModalOpen(false)}
            closeIcon={false}
            centered
            maskClosable={false}
          >
            <p>Are you sure you want to remove all items?</p>
          </Modal>
          <ReusableButton
            backgroundColor="var(--color-green)"
            color="var(--color-white)"
            size="large"
            onClick={handleCheckout}
            icon={faCartShopping}
            iconFlip="horizontal"
            text="Checkout"
          />
        </Row>
        {/* Cart in Mobile */}
        {screen.xs ? (
          <>
            {cart.length === 0 && <CartEmpty />}
            {cart?.map((item) => (
              <CartMobile
                key={item.id}
                item={item}
                handleIncreaseQuantity={handleIncreaseQuantity}
                handleDecreaseQuantity={handleDecreaseQuantity}
                showModal={showModal}
                productIdToRemove={productIdToRemove}
                handleOk={handleOk}
                handleCancel={handleCancel}
              />
            ))}

            {cart.length !== 0 && <GrandTotal cart={cart} />}
          </>
        ) : (
          ""
        )}

        {/* Cart in Desktop */}
        {!screen.xs ? (
          <>
            {cart?.length ? (
              <CartDesktop columns={columns} cart={cart} />
            ) : (
              <CartEmpty />
            )}
          </>
        ) : (
          ""
        )}

        <Row justify="space-between">
          <Link to="/">
            <ReusableButton
              backgroundColor="var(--color-green)"
              color="var(--color-white)"
              size="large"
              icon={faCircleArrowLeft}
              text="continue shopping"
            />
          </Link>
        </Row>
      </CustomContent>
    </>
  );
}

export default Cart;
