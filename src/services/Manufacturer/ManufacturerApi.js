// ** Import config
import http from "../../utils/Http";

// ** Import utils
import { API_ROUTES } from "../../utils/Constants";

const manufacturerApi = {
  usefetchAllManufacturersAPI: async () => {
    const url = API_ROUTES.GET_ALL_MANUFACTURER;
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

export default manufacturerApi;
