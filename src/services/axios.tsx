import axios from "axios";

const axiosURL = axios.create({
  baseURL: "https://crud-alunos-production-a8de.up.railway.app/",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default axiosURL;
