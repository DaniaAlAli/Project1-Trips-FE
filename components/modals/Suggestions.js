import React from "react";
import { TouchableOpacity } from "react-native";
import { SuggestionView, MainText, SecondaryText } from "./styles";

const Suggestions = ({ prediction, handleDestination }) => {
  return (
    <TouchableOpacity
      key={prediction.matched_substrings.place_id}
      onPress={() => {
        handleDestination(
          prediction.structured_formatting.main_text,
          prediction.matched_substrings.place_id
        );
      }}
    >
      <SuggestionView>
        <MainText>{prediction.structured_formatting.main_text}</MainText>
        <SecondaryText>
          {prediction.structured_formatting.secondary_text}
        </SecondaryText>
      </SuggestionView>
    </TouchableOpacity>
  );
};

export default Suggestions;
