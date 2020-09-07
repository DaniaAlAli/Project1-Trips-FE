import { decorate, observable } from "mobx";
import instance from "./instance";
import authStore from "./authStore";

class TripStore {
  trips = [];
  loading = true;

  fetchTrips = async () => {
    try {
      const response = await instance.get("/trips");
      this.trips = response.data;
      this.loading = false;
    } catch (error) {
      console.log("TripStore -> fetchTrips -> error", error);
    }
  };

  createTrip = async (newTrip) => {
    try {
      const formData = new FormData();
      for (const key in newTrip) formData.append(key, newTrip[key]);
      const res = await instance.post("/trips", formData);
      this.trips.push(res.data);
    } catch (error) {
      console.log("TripStore -> createTrip -> error", error);
    }
  };

  updateTrip = async (updatedOne) => {
    try {
      const formData = new FormData();
      for (const key in updatedOne) formData.append(key, updatedOne[key]);
      await instance.put(`/trips/${updatedOne.id}`, formData);
      const trip = this.trips.find((trip) => trip.id === updatedOne.id);
      for (const key in updatedOne) trip[key] = updatedOne[key];
    } catch (error) {
      console.log("error:", error);
    }
  };

  updateFavoritetrip = async (updatedFavoritetrip) => {
    try {
      await instance.put(`/trips/${updatedFavoritetrip.id}`, {
        favorited: !updatedFavoritetrip.favorited,
      });
      const favoriteTrip = this.trips.find(
        (trip) => trip.id === updatedFavoritetrip.id
      );
      favoriteTrip.favorited = !updatedFavoritetrip.favorited;
    } catch (error) {
      console.log("TripStore -> updateFavoritetrip -> error", error);
    }
  };

  deleteTrip = async (TripId) => {
    try {
      await instance.delete(`/trips/${TripId}`);
      this.trips = this.trips.filter((trip) => trip.id !== TripId);
    } catch (error) {
      console.log("error:", error);
    }
  };
}

decorate(TripStore, {
  trips: observable,
  loading: observable,
});

const tripStore = new TripStore();
tripStore.fetchTrips();
export default tripStore;
