import { Col, Row, Typography } from "antd";
import PropTypes from "prop-types";

// Ant design
const { Text } = Typography;

function GrandTotal({ cart }) {
  return (
    <>
      <Row
        style={{
          padding: "10px",
          borderRadius: "6px",
          border: "2px solid var(--color-border2)",
          marginBottom: "10px",
        }}
      >
        <Col span={12}>
          <Col
            style={{
              border: "1px solid var(--color-border2)",
              padding: "5px",
              background: "var(--color-gray)",
            }}
          >
            <Text strong>Grand Total</Text>
          </Col>
        </Col>
        <Col span={12}>
          <Col
            style={{
              border: "1px solid var(--color-border2)",
              padding: "5px",
            }}
          >
            <Text strong>
              $
              {cart.reduce(
                (acc, curr) => acc + curr.price * curr.quantityInCart,
                0
              )}
            </Text>
          </Col>
        </Col>
      </Row>
    </>
  );
}

GrandTotal.propTypes = {
  cart: PropTypes.array.isRequired,
};

export default GrandTotal;
