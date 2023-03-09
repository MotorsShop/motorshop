import axios from "axios";



const api = axios.create({
  baseURL: "https://motorshop-api-naianereis.vercel.app/",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

if (typeof window !== 'undefined') {
  const token = localStorage.getItem("@TOKEN");
  if (token) {
    api.defaults.headers["Authorization"] = `Bearer ${JSON.parse(token)}`;
    console.log(api.defaults.headers["Authorization"])
  }
}


export default api;
