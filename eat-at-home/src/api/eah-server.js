import axios from "axios";

const instance = axios.create({
  baseURL: "https://eat-at-home-server.herokuapp.com/"
});

export default instance;
