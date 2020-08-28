import { decorate, observable } from "mobx";
import instance from "./instance";

class ProfileStore {
  profiles = [];
  loading = true;

  fetchProfile = async () => {
    try {
      const response = await instance.get("/myprofile");
      this.profiles = response.data;
      console.log(
        "ProfileStore -> fetchProfile -> this.profiles",
        this.profiles
      );
      this.loading = false;
    } catch (error) {
      console.log("ProfileStore -> fetchProfiles -> error", error);
    }
  };

  getProfileById = (profileId) => {
    return this.profiles.find((profile) => profile.id === profileId);
  };

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
profileStore.fetchProfile();

export default profileStore;
