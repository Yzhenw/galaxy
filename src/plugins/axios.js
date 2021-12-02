import axios from "axios";
import md5 from "blueimp-md5";

const response = (result) => {
  const data = result.data;
  if (result.status !== 200) throw data;
  else return data;
};

axios.defaults.withCredentials = true;
axios.defaults.baseURL =
  process.env.NODE_ENV === "development"
    ? "pp"
    : "http://api.hustmaths.top/api/pp/";
axios.interceptors.response.use(response);

export const LoginOrSignup = async (nick, password) => {
  const user = { nick, password: md5(password) };
  const result = await axios.post("./login", user);
  localStorage.setItem("user", JSON.stringify(user));
  return result;
};

export const StatisticsRoundInfo = async (round) => {
  const result = await axios.post("./round", round);
};

export const GetRank = async (user) => {
  const result = await axios.post("./rank", user);
  return result;
};
