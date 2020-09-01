import { decorate, observable } from "mobx";
import instance from "./instance";

class ProfileStore {
  profiles = [];
  loading = true;

  // updateProfile = async (updatedProfile) => {
  //   console.log("UPDATEE", updatedProfile);
  //   try {
  //     console.log("77777");
  // await instance.put("/profile", updatedProfile);
  //     console.log("555555");
  //     const profile = this.profiles.find(
  //       (profile) => profile.id === updatedProfile.id
  //     );
  //     // this.profiles = updatedProfile;

  //     console.log("PROFILE", profile);
  //     for (const key in updatedProfile) profile[key] = updatedProfile[key];
  //   } catch (error) {
  //     console.log("error:", error);
  //   }
  // };
}

decorate(ProfileStore, {
  profile: observable,
  loading: observable,
});

const profileStore = new ProfileStore();

export default profileStore;
