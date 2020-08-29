import { decorate, observable } from "mobx";
import instance from "./instance";

class ProfileStore {
  profiles = [];
  loading = true;

  updateProfile = async (updatedProfile) => {
    try {
      await instance.put(`/profile/${updatedProfile.id}`, updatedProfile);
      const profile = this.profiles.find(
        (profile) => profile.id === updatedProfile.id
      );
      for (const key in updatedProfile) profile[key] = updatedProfile[key];
    } catch (error) {
      console.log("error:", error);
    }
  };
}

decorate(ProfileStore, {
  profile: observable,
  loading: observable,
});

const profileStore = new ProfileStore();

export default profileStore;
