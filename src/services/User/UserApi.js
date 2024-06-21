// ** Import config
import http from "../../utils/Http";

// ** Import utils
import { API_ROUTES } from "../../utils/Constants";

const userApi = {
  useLoginAPI: async (data) => {
    const url = API_ROUTES.LOGIN;
    try {
      const response = await http.post(url, data);
      // console.log("response api", response);
      return response;
    } catch (error) {
      // console.log("error api", error);
      return { error };
    }
  },
};

export default userApi;
