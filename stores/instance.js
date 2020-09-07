import axios from "axios";

// REVIEW: I LOVE HOW ORGANISED THIS IS ❤️
const instance = axios.create({
  // baseURL: "http://localhost:8000", //Zahraa
  // baseURL: "http://192.168.8.102:8000", // Dania

  baseURL: "http://192.168.1.130:8000", // Luis
});

export default instance;
