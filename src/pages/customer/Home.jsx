import { Layout, notification } from "antd";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  addProductToCart,
  selectedProduct,
} from "../../stores/actions/CartActions";
import ProductList from "../../components/products/ProductList";

// Ant design
const { Content } = Layout;

// Styled components
const CustomContent = styled(Content)`
  background-color: var(--color-white);
  width: 100%;
  min-height: calc(100vh - 150px);
  padding: 30px 30px;
`;

// Data
const products = [
  {
    id: 1,
    title: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    price: 549,
    stock: 94,
    quantity: 1,
    itemCode: "HSNK827HS",
    manufacturer: "Apple",
    category: "Apple",
    thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
  },
  {
    id: 2,
    title: "iPhone X",
    description:
      "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip",
    price: 899,
    stock: 34,
    quantity: 1,
    itemCode: "HSNK827HS",
    manufacturer: "Apple",
    category: "Apple",
    thumbnail: "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg",
  },
  {
    id: 3,
    title: "Samsung Universe 9",
    description:
      "Samsung's new variant which goes beyond Galaxy to the Universe",
    price: 1249,
    stock: 36,
    quantity: 1,
    itemCode: "HSNK827HS",
    manufacturer: "Apple",
    category: "Apple",
    thumbnail: "https://cdn.dummyjson.com/product-images/5/thumbnail.jpg",
  },
  {
    id: 4,
    title: "OPPOF19",
    description: "OPPO F19 is officially announced on April 2021.",
    price: 280,
    stock: 123,
    quantity: 1,
    itemCode: "HSNK827HS",
    manufacturer: "Apple",
    category: "Apple",
    thumbnail: "https://cdn.dummyjson.com/product-images/4/thumbnail.jpg",
  },
];

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Event Handlers
  const handleNavigateProductDetail = (product) => {
    dispatch(selectedProduct(product));
    navigate(`/product/${product.id}`);
  };

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
        <ProductList
          products={products}
          handleNavigateProductDetail={handleNavigateProductDetail}
          handleClickOrderNow={handleClickOrderNow}
        />
      </CustomContent>
    </>
  );
}

export default Home;
