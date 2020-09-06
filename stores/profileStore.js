import { decorate, observable } from "mobx";
import instance from "./instance";

class ProfileStore {
  profiles = [];
  loading = true;

  fetchProfiles = async () => {
    try {
      const response = await instance.get("/profiles");
      this.profiles = response.data;
      this.loading = false;
    } catch (error) {
      console.log("ProfileStore -> fetchUser -> error", error);
    }
  };
}

decorate(ProfileStore, {
  profiles: observable,
  loading: observable,
});

const profileStore = new ProfileStore();
profileStore.fetchProfiles();
export default profileStore;
