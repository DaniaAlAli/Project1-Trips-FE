import React from "react";
import axios from "axios";
import _ from "lodash";
import { ScrollView } from "react-native-gesture-handler";
import { View } from "native-base";
import { Keyboard, TouchableWithoutFeedback } from "react-native";

//Components
import Suggestions from "./Suggestions";

//Styles
import { StyledMapTextInput } from "./styles";

const PlaceInput = ({ trip, setTrip }) => {
  const getPlaces = _.debounce(async (input) => {
    const result = await axios.get(
      `https://maps.googleapis.com/maps/api/place/autocomplete/json?key=AIzaSyDPlAdw1thw8hYHNNO8xbi8EO6_0Etn7Jo&input=${input}`
    );
    setTrip({
      ...trip,
      destinationInput: input,
      predictions: result.data.predictions,
    });
  }, 1000);

  const getCoordinates = async (input) => {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${input}&key=AIzaSyDPlAdw1thw8hYHNNO8xbi8EO6_0Etn7Jo`
    );

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
            onChangeText={(input) => {
              getPlaces(input);
              setTrip({ ...trip, destinationInput: input });
            }}
            // value={trip.destinationInput}
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
