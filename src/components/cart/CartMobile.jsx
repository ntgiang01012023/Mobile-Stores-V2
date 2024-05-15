import { Button, Col, Modal, Row, Typography } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";

// Ant design
const { Text } = Typography;

function CartMobile({
  item,
  handleIncreaseQuantity,
  handleDecreaseQuantity,
  showModal,
  productIdToRemove,
  handleOk,
  handleCancel,
}) {
  const { id, title, quantity, price, stock } = item;
  return (
    <>
      <Row
        key={id}
        style={{
          padding: "10px",
          borderRadius: "6px",
          border: "2px solid var(--color-border2)",
          marginBottom: "10px",
        }}
      >
        <Col
          span={12}
          style={{
            background: "var(--color-gray)",
          }}
        >
          <Col
            style={{
              border: "1px solid var(--color-border2)",
              padding: "5px",
            }}
          >
            <Text strong>Product</Text>
          </Col>
          <Col
            style={{
              border: "1px solid var(--color-border2)",
              padding: "5px",
            }}
          >
            <Text strong>Quantity</Text>
          </Col>
          <Col
            style={{
              border: "1px solid var(--color-border2)",
              padding: "5px",
            }}
          >
            <Text strong>Unit price</Text>
          </Col>
          <Col
            style={{
              border: "1px solid var(--color-border2)",
              padding: "5px",
            }}
          >
            <Text strong>Price</Text>
          </Col>
          <Col
            style={{
              border: "1px solid var(--color-border2)",
              padding: "5px",
            }}
          >
            <Text strong>Action</Text>
          </Col>
        </Col>
        <Col span={12}>
          <Col
            style={{
              border: "1px solid var(--color-border2)",
              padding: "5px",
            }}
          >
            <Text>{title}</Text>
          </Col>
          <Col
            style={{
              border: "1px solid var(--color-border2)",
              padding: "5px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <Button
                size="small"
                onClick={() => handleDecreaseQuantity(id)}
                style={{
                  fontSize: "8px",
                }}
                disabled={quantity === 1}
              >
                <MinusOutlined />
              </Button>
              <Text style={{ margin: "0 8px" }}>{quantity}</Text>
              <Button
                size="small"
                onClick={() => handleIncreaseQuantity(id)}
                style={{
                  fontSize: "8px",
                }}
                disabled={quantity === stock}
              >
                <PlusOutlined />
              </Button>
            </div>
          </Col>
          <Col
            style={{
              border: "1px solid var(--color-border2)",
              padding: "5px",
            }}
          >
            <Text>${price}</Text>
          </Col>
          <Col
            style={{
              border: "1px solid var(--color-border2)",
              padding: "5px",
            }}
          >
            <Text>${quantity * price}</Text>
          </Col>
          <Col
            style={{
              border: "1px solid var(--color-border2)",
              padding: "4px 5px",
            }}
          >
            <Button
              style={{
                background: "var(--color-red)",
                color: "var(--color-white)",
                borderRadius: "5px",
                padding: "0 12px",
                lineHeight: "none",
              }}
              size="small"
              onClick={() => showModal(id)}
            >
              <FontAwesomeIcon
                icon={faXmark}
                style={{
                  marginRight: `4px`,
                }}
              />
              Remove
            </Button>
          </Col>
        </Col>
      </Row>
      <Modal
        key={id}
        title="Remove Product?"
        open={productIdToRemove === id}
        onOk={handleOk}
        onCancel={handleCancel}
        closeIcon={false}
        centered
        maskClosable={false}
      >
        <p>Are you sure you want to remove this product?</p>
      </Modal>
    </>
  );
}

CartMobile.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    stock: PropTypes.number.isRequired,
  }).isRequired,
  handleIncreaseQuantity: PropTypes.func.isRequired,
  handleDecreaseQuantity: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired,
  productIdToRemove: PropTypes.number.isRequired,
  handleOk: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
};

export default CartMobile;
