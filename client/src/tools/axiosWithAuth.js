import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURl: "http://localhost:5000",
    headers: {
      authorization: token
      //'Access-Control-Allow-Origin': '*'
    }
  });
};
