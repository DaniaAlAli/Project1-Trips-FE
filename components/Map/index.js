import React from "react";
import { PROVIDER_GOOGLE, Marker } from "react-native-maps";

//Styles
import { StyledMapView } from "./styles";

const Map = ({ trip }) => {
  return (
    <StyledMapView
      loadingEnabled={true}
      provider={PROVIDER_GOOGLE}
      initialRegion={{
        latitude: trip.latitude,
        longitude: trip.longitude,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}
    >
      <Marker
        coordinate={{
          latitude: trip.latitude,
          longitude: trip.longitude,
        }}
        title={trip.destinationInput}
      />
    </StyledMapView>
  );
};

export default Map;
