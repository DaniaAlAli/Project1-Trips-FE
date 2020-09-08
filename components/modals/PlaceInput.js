import React, { useState } from "react";
import { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { ScrollView } from "react-native-gesture-handler";
import { View } from "native-base";
import { debounce } from "lodash";
import axios from "axios";

import { Keyboard, TouchableWithoutFeedback } from "react-native";

//Components
import Suggestions from "./Suggestions";

//Styles
import { StyledMapTextInput } from "./styles";

const PlaceInput = ({ trip, setTrip }) => {
  const getPlaces = async (input) => {
    const result = await axios.get(
      `https://maps.googleapis.com/maps/api/place/autocomplete/json?key=AIzaSyC9ug0NmoXwgxvq_96l0iAQcok8rCzlXAs
      &input=${input}`
    );
    setTrip({
      ...trip,
      destinationInput: input,
      predictions: result.data.predictions,
    });
  };

  const getCoordinates = async (input) => {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${input}&key=AIzaSyC9ug0NmoXwgxvq_96l0iAQcok8rCzlXAs
      `
    );

    setTrip({
      ...trip,
      destinationInput: trip.destinationInput,
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

  return (
    <TouchableWithoutFeedback onPress={hideKeyboard}>
      <ScrollView>
        <View>
          <StyledMapTextInput
            onChangeText={(input) => getPlaces(input)}
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
