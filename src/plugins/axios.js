import axios from "axios";

const env = process.env.NODE_ENV === "development";

const error = (error) => {
  store.commit("Progress", false);
  store.commit("Notify", { type: "error", message: error.message });
  return Promise.reject(error);
};

const request = (request) => {
  store.commit("Progress", true);
  const method = request.method.toLowerCase();
  if (method === "get") {
    request.params || (request.params = {});
    request.params.appId = env ? "205429877279690752" : "204066132339068928";
  }
  return request;
};

const response = (response) => {
  const data = response.data;
  store.commit("Progress", false);
  if (response.status !== 200) {
    store.commit("Notify", { type: "error", message: data.message });
    throw data;
  } else return data;
};

export const Quality = axios.create({
  timeout: 60000,
  withCredentials: true,
});

export const Insight = axios.create({
  baseURL: env
    ? "http://new.insight.iot.mi.srv/mi-quality/mijia/quicklink"
    : "http://insight.iot.mi.srv/mi-quality/mijia/quicklink",
  timeout: 60000,
});

Quality.interceptors.request.use(request, error);
Quality.interceptors.response.use(response, error);
