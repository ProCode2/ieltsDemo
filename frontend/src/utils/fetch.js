import axios from "axios";

export const todoFetch = async (config) => {
  try {
    let res = await axios({ ...config, withCredentials: true });
    return res.data;
  } catch (error) {
    if (error.response.data?.message == "Unauthorized") {
      // redirect to "/"
      if (!window.location.href.includes("/login"))
        window.location.href = "/login";
      console.log(error.response);
    } else {
      console.log(error);
    }
  }
};
