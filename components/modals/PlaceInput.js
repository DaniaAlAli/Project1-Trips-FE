import React, { useState } from "react";
import { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import axios from "axios";
import { debounce } from "lodash";
import { ScrollView } from "react-native-gesture-handler";
import { View } from "native-base";

import {
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";

//Components
import Suggestions from "./Suggestions";

//Styles
import { StyledMapTextInput } from "./styles";

const PlaceInput = ({ trip, setTrip }) => {
  const getPlaces = async (input) => {
    // console.log("getPlaces", input);
    const result = await axios.get(
      `https://maps.googleapis.com/maps/api/place/autocomplete/json?key=AIzaSyDPlAdw1thw8hYHNNO8xbi8EO6_0Etn7Jo&input=${
        input !== "" ? input : "Kuwait"
      }`
    );
    setTrip({
      ...trip,
      destinationInput: input,
      predictions: result.data.predictions,
    });
  };

  const getCoordinates = async (input) => {
    // console.log("getCoordinates");
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${input}&key=AIzaSyDPlAdw1thw8hYHNNO8xbi8EO6_0Etn7Jo`
    );
    // console.log(
    //   "getCoordinates -> response.data.results[0].geometry.location.lat",
    //   response.data.results[0].geometry.location.lat
    // );

    setTrip({
      ...trip,
      destinationInput: trip.destinationInput, //response.data.results[0].address_components.long_name,
      latitude: response.data.results[0].geometry.location.lat,
      longitude: response.data.results[0].geometry.location.lng,
      predictions: [],
    });
  };

  const hideKeyboard = () => {
    Keyboard.dismiss();
  };

  const handleDestination = (main_text, place_id) => {
    hideKeyboard();
    // console.log("handleDestination -> main_text", main_text);
    setTrip({
      ...trip,
      destinationInput: main_text,
      destinationId: place_id,
      predictions: [],
    });
    getCoordinates(main_text);
  };

  const predictions = trip.predictions.map((prediction) => {
    return (
      <Suggestions
        prediction={prediction}
        handleDestination={handleDestination}
      />
    );
  });

  //   console.log("PlaceInput -> place.latitude", place.latitude);
  //   console.log("PlaceInput -> place.longitude", place.longitude);
  //   console.log("PlaceInput -> place.destinationInput", place.destinationInput);
  return (
    <TouchableWithoutFeedback onPress={hideKeyboard}>
      <ScrollView>
        <View>
          <StyledMapTextInput
            onChangeText={(input) => getPlaces(input)}
            // value={place.destinationInput} when i remove this lag in input disappears
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Add Location"
            placeholderTextColor="#000000"
          />
          {predictions}
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

export default PlaceInput;
