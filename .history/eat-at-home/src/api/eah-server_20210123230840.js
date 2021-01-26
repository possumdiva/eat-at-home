import axios from "axios";

const instance = axios.create({
  baseURL: "https://cors-anywhere.herokuapp.com/https://eat-at-home-server.herokuapp.com/",
});

export default instance;
