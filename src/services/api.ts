import axios from "axios";

const api = axios.create({
  baseURL: 'https://motorshop-api-naianereis.vercel.app/',
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});
export default api;
