import { Row } from "antd";
import ProductCart from "./ProductCart";
import PropTypes from "prop-types";

function ProductList({
  products,
  handleNavigateProductDetail,
  handleClickOrderNow,
}) {
  return (
    <>
      <Row gutter={(16, 16)}>
        {products.map((product) => (
          <ProductCart
            key={product.id}
            product={product}
            handleNavigateProductDetail={handleNavigateProductDetail}
            handleClickOrderNow={handleClickOrderNow}
          />
        ))}
      </Row>
    </>
  );
}

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
  handleNavigateProductDetail: PropTypes.func.isRequired,
  handleClickOrderNow: PropTypes.func.isRequired,
};

export default ProductList;
