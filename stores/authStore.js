//React
import { decorate, observable } from "mobx";
import instance from "./instance";
import AsyncStorage from "@react-native-community/async-storage";

//Decode
import decode from "jwt-decode";
import tripStore from "./tripStore";

class AuthStore {
  user = null;

  myTrips = this.user
    ? tripStore.trips.filter((trip) => trip.userId === this.user.id)
    : [];

  setUser = async (token) => {
    await AsyncStorage.setItem("myToken", token);
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    this.user = decode(token);
    // console.log("AuthStore -> setUser -> this.user", this.user);
  };

  signup = async (userData) => {
    try {
      const res = await instance.post("/signup", userData);
      await this.setUser(res.data.token);

      console.log(res.data.token);
    } catch (error) {
      console.log("error:", error);
    }
  };

  signin = async (userData) => {
    try {
      const res = await instance.post("/signin", userData);
      await this.setUser(res.data.token);

      console.log(res.data.token);
    } catch (error) {
      console.log("error:", error);
    }
  };

  signout = async () => {
    delete instance.defaults.headers.common.Authorization;
    await AsyncStorage.removeItem("myToken");
    this.user = null;
  };

  getUserById = (userId) => {
    return this.users.find((user) => user.id === userId);
  };

  checkForToken = async () => {
    const token = await AsyncStorage.getItem("myToken");
    if (token) {
      const user = decode(token);
      if (Date.now() < user.exp) {
        this.setUser(token);
      } else {
        this.signout();
      }
    }
  };
}

decorate(AuthStore, {
  user: observable,
  myTrips: observable,
});

const authStore = new AuthStore();
authStore.checkForToken();

export default authStore;
