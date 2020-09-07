import axios from "axios";

const instance = axios.create({
  //baseURL: "http://localhost:8000", //Zahraa
  baseURL: "http://localhost:8000", // Dania

  // baseURL: "http://192.168.1.130:8000", // Luis
});

export default instance;
