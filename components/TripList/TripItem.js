import React, { useState } from "react";
import { observer } from "mobx-react";
import {
  CardItem,
  Left,
  Right,
  ListItem,
  Text,
  Icon,
  Button,
} from "native-base";
import moment from "moment";

import {
  TripItemStyled,
  StyledCard,
  StyledContent,
  StyledImage,
  DeleteTrip,
  MyTripStyle,
  CreatedAt,
} from "./styles";

// Stores
import tripStore from "../../stores/tripStore";
import UpdateButton from "../buttons/UpdateButton";
import authStore from "../../stores/authStore";
import profileStore from "../../stores/profileStore";
import Profile from "../Profile";
import { color } from "react-native-reanimated";

const TripItem = ({ trip, navigation, myTrips }) => {
  console.log("TripItem -> trip", trip);
  return (
    <>
      <ListItem>
        <StyledContent>
          <StyledCard>
            <Left></Left>
            <Left></Left>
            <CreatedAt>{moment(trip.createdAt).fromNow()}</CreatedAt>
            {!myTrips && (
              <Text
                onPress={() =>
                  navigation.navigate("Other Profile", {
                    userId: trip.userId,
                  })
                }
              >
                {trip.profileName}
              </Text>
            )}

            <CardItem cardBody>
              <StyledImage
                source={
                  trip.image
                    ? { uri: trip.image }
                    : {
                        uri:
                          "https://images.unsplash.com/photo-1564689510742-4e9c7584181d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
                      }
                }
              />
            </CardItem>
            <CardItem>
              <Left>
                <Text
                  onPress={() =>
                    navigation.navigate("Trip Detail", { trip: trip })
                  }
                >
                  {trip.destination}
                </Text>
              </Left>
              <Right>
                <Text>{trip.details}</Text>
              </Right>
            </CardItem>

            {myTrips && (
              <>
                <UpdateButton trip={trip} />
                <DeleteTrip
                  type="EvilIcons"
                  name="trash"
                  onPress={() => tripStore.deleteTrip(trip.id)}
                />

                <Icon
                  type="AntDesign"
                  name={trip.favorite ? "star" : "staro"}
                  style={{ color: "#ffbe0b" }}
                  onPress={() => tripStore.updateFavoritetrip(trip)}
                />
              </>
            )}
          </StyledCard>
        </StyledContent>
      </ListItem>
    </>
  );
};

export default observer(TripItem);
