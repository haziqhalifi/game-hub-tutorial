import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "c93bfc755f104700aea4d9a20b77f3fb",
  },
});
