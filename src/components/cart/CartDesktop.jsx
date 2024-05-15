import { Table, Typography } from "antd";
import PropTypes from "prop-types";

// Ant design
const { Text } = Typography;

function CartDesktop({ columns, cart }) {
  return (
    <>
      <Table
        rowKey="id"
        columns={columns}
        dataSource={cart}
        pagination={false}
        scroll={{ x: true }}
        summary={(data) => {
          let total = 0;
          data.forEach(({ price, quantity }) => {
            total += price * quantity;
          });
          return (
            <>
              <Table.Summary.Row>
                <Table.Summary.Cell index={0} colSpan={2}></Table.Summary.Cell>
                <Table.Summary.Cell colSpan={1}>
                  <Text strong>Grand Total</Text>
                </Table.Summary.Cell>
                <Table.Summary.Cell>
                  <Text strong>${total}</Text>
                </Table.Summary.Cell>
              </Table.Summary.Row>
            </>
          );
        }}
      />
    </>
  );
}

CartDesktop.propTypes = {
  columns: PropTypes.array.isRequired,
  cart: PropTypes.array.isRequired,
};

export default CartDesktop;
