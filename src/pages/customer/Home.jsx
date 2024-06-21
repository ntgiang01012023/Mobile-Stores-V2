import { Button, Layout, notification } from "antd";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addProductToCart,
  selectedProduct,
} from "../../stores/actions/Cart/CartActions";
import ProductList from "../../components/products/ProductList";
import { useCallback, useEffect, useState } from "react";
import { fetchProduct } from "../../stores/thunks/Product/ProductThunks";
import Loading from "../../components/common/Loading";
import ErrorAlert from "../../components/common/ErrorAlert";

// Ant design
const { Content } = Layout;

// Styled components
const CustomContent = styled(Content)`
  background-color: var(--color-white);
  width: 100%;
  min-height: calc(100vh - 150px);
  padding: 30px 30px;
`;

const LoadingContainer = styled.div`
  text-align: center;
  margin-top: 20px;
`;

// // Data
// const products = [
//   {
//     id: 1,
//     title: "iPhone 9",
//     description: "An apple mobile which is nothing like apple",
//     price: 549,
//     stock: 94,
//     quantity: 1,
//     itemCode: "HSNK827HS",
//     manufacturer: "Apple",
//     category: "Apple",
//     thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
//   },
//   {
//     id: 2,
//     title: "iPhone X",
//     description:
//       "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip",
//     price: 899,
//     stock: 34,
//     quantity: 1,
//     itemCode: "HSNK827HS",
//     manufacturer: "Apple",
//     category: "Apple",
//     thumbnail: "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg",
//   },
//   {
//     id: 3,
//     title: "Samsung Universe 9",
//     description:
//       "Samsung's new variant which goes beyond Galaxy to the Universe",
//     price: 1249,
//     stock: 36,
//     quantity: 1,
//     itemCode: "HSNK827HS",
//     manufacturer: "Apple",
//     category: "Apple",
//     thumbnail: "https://cdn.dummyjson.com/product-images/5/thumbnail.jpg",
//   },
//   {
//     id: 4,
//     title: "OPPOF19",
//     description: "OPPO F19 is officially announced on April 2021.",
//     price: 280,
//     stock: 123,
//     quantity: 1,
//     itemCode: "HSNK827HS",
//     manufacturer: "Apple",
//     category: "Apple",
//     thumbnail: "https://cdn.dummyjson.com/product-images/4/thumbnail.jpg",
//   },
// ];

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.product?.list);
  const loading = useSelector((state) => state.product?.loading);
  const error = useSelector((state) => state.product?.error);
  const totalProducts = useSelector((state) => state.products?.total);

  // Local state
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);

  // useEffect loading fetch all product
  useEffect(() => {
    dispatch(fetchProduct(8, 0));
  }, [dispatch]);

  // Event Handlers
  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 &&
      products.length < totalProducts
    ) {
      setLoadingMore(true);
    }
  }, [products, totalProducts]);

  const handleLoadMoreProducts = async () => {
    setIsLoading(true);
    const skip = products.length;
    const limit = 8;
    await dispatch(fetchProduct(limit, skip));
    setIsLoading(false);
  };

  // useEffect scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

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
        {loading && <Loading />}
        {error && <ErrorAlert error={error} />}
        {products.length > 0 && (
          <ProductList
            products={products}
            handleNavigateProductDetail={handleNavigateProductDetail}
            handleClickOrderNow={handleClickOrderNow}
          />
        )}
        {loadingMore && totalProducts - products.length > 0 && (
          <LoadingContainer>
            <Button onClick={handleLoadMoreProducts} loading={isLoading}>
              Xem thêm {totalProducts - products.length} sản phẩm
            </Button>
          </LoadingContainer>
        )}
      </CustomContent>
    </>
  );
}

export default Home;
