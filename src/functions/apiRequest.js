import axios from "axios";

const createBaseUrl = () => {
  if (window.location.href.includes("localhost")) {
    axios.defaults.baseURL = "http://localhost:9000/api/";
  } else {
    axios.defaults.baseURL = process.env.REACT_APP_API_URL;
  }
};

export const setToken = async (token) => {
  axios.defaults.headers.common.Authorization = token
    ? `Bearer ${token}`
    : null;
};

export const apiCalls = async (method, url, data) => {
  createBaseUrl();

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

export const updateProfileImage = async (path, fromData, headers) => {
  createBaseUrl();

  try {
    const res = await axios.post(path, fromData, headers);

    console.log(" +++  \n api call - res", res);

    return res;
  } catch (error) {
    console.log(" +++  \n api call - error", error);

    throw error;
  }
};
