import axios from "axios";
import { parseCookies } from "nookies";

const { "nextauth.token": token } = parseCookies();
const api = axios.create({
  baseURL: "https://motorshop-api-naianereis.vercel.app/",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

if (token) {
  api.defaults.headers["Authorization"] = `Bearer ${token}`;
}
export default api;
