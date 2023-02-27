import axios from "axios";

const api = axios.create({
  baseURL: "https://testeapi-mu.vercel.app/",
});
export default api;
