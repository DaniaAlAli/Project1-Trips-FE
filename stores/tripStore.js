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
      const res = await instance.post("/trips", newTrip);
      this.trips.push(res.data);
    } catch (error) {
      console.log("TripStore -> createTrip -> error", error);
    }
  };

  getTripById = (tripId) => {
    return this.trips.find((trip) => trip.id === tripId);
  };

  updateTrip = async (updatedOne) => {
    try {
      await instance.put(`/trips/${updatedOne.id}`, updatedOne);
      const trip = this.trips.find((trip) => trip.id === updatedOne.id);
      for (const key in updatedOne) trip[key] = updatedOne[key];
    } catch (error) {
      console.log("error:", error);
    }
  };

  updateFavoritetrip = async (updatedFavoritetrip) => {
    try {
      await instance.put(`/trips/${updatedFavoritetrip.id}`, {
        favorite: false,
      });
      console.log(
        "TripStore -> updateFavoritetrip -> updatedFavoritetrip.favorite before",
        updatedFavoritetrip.favorite
      );
      const favoriteTrip = this.trips.find(
        (trip) => trip.id === updatedFavoritetrip.id
      );
      favoriteTrip.favorite = !updatedFavoritetrip.favorite;
      console.log(
        "TripStore -> updateFavoritetrip -> updatedFavoritetrip.favorite after",
        updatedFavoritetrip.favorite
      );
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
