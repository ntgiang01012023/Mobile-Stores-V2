import { Empty, Typography } from "antd";

// Ant design
const { Text } = Typography;

function CartEmpty() {
  return (
    <>
      <Empty
        description={<Text strong>Empty cart</Text>}
        image={Empty.PRESENTED_IMAGE_SIMPLE}
      />
    </>
  );
}

export default CartEmpty;
