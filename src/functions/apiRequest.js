import axios from "axios";
axios.defaults.baseURL = "http://localhost:9999/api/";
// axios.defaults.baseURL = "https://deployment.app"

export const setToken = async (token) => {
  axios.defaults.headers.common.Authorization = token
    ? `Bearer ${token}`
    : null;
};

const apiCalls = async (method, url, data) => {
  axios.defaults.headers.common.Authorization = `Bearer ${localStorage.token}`;
  console.log(" +++  \n api call - send ", method, url, data);
  try {
    console.log(axios.defaults);
    const res = await axios({
      method: method,
      url: url,
      data: data,
    });

    console.log(" +++  \n api call - res", res);
    return res;
  } catch (error) {
    console.log(" +++  \n api call - error", error);
    throw error;
  }
};

export default apiCalls;
