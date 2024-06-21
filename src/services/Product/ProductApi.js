// ** Import config
import http from "../../utils/Http";

// ** Import utils
import { API_ROUTES } from "../../utils/Constants";

const productApi = {
  useAddProductAPI: async (data) => {
    const url = API_ROUTES.ADD_PRODUCT;
    try {
      const response = await http.post(url, data);
      // console.log("response api", response);
      return response;
    } catch (error) {
      // console.log("error api", error);
      return { error };
    }
  },

  useGetAllProductAPI: async (limit, skip) => {
    const url = `${API_ROUTES.GET_ALL_PRODUCTS}?limit=${limit}&skip=${skip}`;
    try {
      const response = await http.get(url);
      console.log("response api", response);
      return response;
    } catch (error) {
      console.log("error api", error);
      return { error };
    }
  },

  useGetASingleProductAPI: async (id) => {
    const url = API_ROUTES.GET_A_SINGLE_PRODUCT.replace(":id", id);
    try {
      const response = await http.get(url);
      // console.log("response api", response);
      return response;
    } catch (error) {
      // console.log("error api", error);
      return { error };
    }
  },
};

export default productApi;
