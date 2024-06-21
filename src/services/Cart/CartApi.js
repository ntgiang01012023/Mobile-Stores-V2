// ** Import config
import http from "../../utils/Http";

// ** Import utils
import { API_ROUTES } from "../../utils/Constants";

const cartApi = {
  useCheckoutCartAPI: async (data) => {
    const url = API_ROUTES.CHECKOUT;
    try {
      const response = await http.post(url, data);
      console.log("response api", response);
      return response;
    } catch (error) {
      console.log("error api", error);
      return { error };
    }
  },
};

export default cartApi;
