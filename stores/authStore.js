//React
import { decorate, observable } from "mobx";
import instance from "./instance";
import AsyncStorage from "@react-native-community/async-storage";

//Decode
import decode from "jwt-decode";

class AuthStore {
  user = null;

  setUser = async (token) => {
    await AsyncStorage.setItem("myToken", token);
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    this.user = decode(token);
  };

  signup = async (userData) => {
    try {
      const res = await instance.post("/signup", userData);
      await this.setUser(res.data.token);
    } catch (error) {
      console.log("error:", error);
    }
  };

  signin = async (userData) => {
    try {
      const res = await instance.post("/signin", userData);
      await this.setUser(res.data.token);
    } catch (error) {
      console.log("error:", error);
    }
  };

  signout = async (navigation) => {
    delete instance.defaults.headers.common.Authorization;
    await AsyncStorage.removeItem("myToken");
    this.user = null;
  };

  updateProfile = async (updatedProfile) => {
    try {
      const formData = new FormData();
      for (const key in updatedProfile)
        formData.append(key, updatedProfile[key]);
      await instance.put(`/profile`, formData);
      const profile = this.user.profile;
      for (const key in updatedProfile) profile[key] = updatedProfile[key];
    } catch (error) {
      console.log("error:", error);
    }
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

  updateProfile = async (updatedProfile) => {
    try {
      await instance.put("/profile", updatedProfile);

      const profile = this.user.profile;

      for (const key in updatedProfile) profile[key] = updatedProfile[key];
    } catch (error) {
      console.log("error:", error);
    }
  };
}

decorate(AuthStore, {
  user: observable,
});

const authStore = new AuthStore();
authStore.checkForToken();

export default authStore;
