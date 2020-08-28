import { decorate, observable } from "mobx";

import instance from "./instance";

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

  // Now we are using dummydata for front end, code commented(13-20) out for when backend is integrated
  createTrip = async (newTrip) => {
    try {
      // const formData = new FormData();
      // for (const key in newTrip) formData.append(key, newTrip[key]);
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
