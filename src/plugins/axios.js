import axios from "axios";

const response = (response) => {
  const data = response.data;
  if (response.status !== 200) throw data;
  else return data;
};

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "./php";
axios.interceptors.response.use(response);

export default axios;
