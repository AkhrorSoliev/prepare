import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://json-api.uz/api/project/football-my",
});
