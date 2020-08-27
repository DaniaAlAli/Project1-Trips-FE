import { decorate, observable } from "mobx";

//Stores
import trips from "../trips";
import instance from "./instance";
class TripStore {
  trips = trips;

  // Now we are using dummydata for front end, code commented(13-20) out for when backend is integrated
  createTrip = (newTrip) => {
    newTrip.id = this.trips[trips.length - 1].id + 1;
    this.trips.push(newTrip);
    // try {
    //   const formData = new FormData();
    //   for (const key in newTrip) formData.append(key, newTrip[key]);
    //   const res = await axios.post("http://localhost:8000/trips", formData);
    //   this.trips.push(res.data);
    // } catch (error) {
    //   console.log("TripStore -> createTrip -> error", error);
    // }
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
});

const tripStore = new TripStore();

export default tripStore;
