import React, { useState } from "react";
import { observer } from "mobx-react";
import { CardItem, Left, Right, ListItem, Text, View } from "native-base";
import moment from "moment";

import {
  StyledCard,
  StyledContent,
  StyledImage,
  DeleteTrip,
  CreatedAt,
  ButtonWrapper,
} from "./styles";

// Stores
import tripStore from "../../stores/tripStore";
import UpdateButton from "../buttons/UpdateButton";

const TripItem = ({ trip, navigation, myTrips }) => {
  return (
    <>
      <ListItem>
        <StyledContent>
          <StyledCard>
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
            </CardItem>
            {myTrips && (
              <ButtonWrapper>
                <UpdateButton trip={trip} />

                <DeleteTrip
                  type="EvilIcons"
                  name="trash"
                  onPress={() => tripStore.deleteTrip(trip.id)}
                />
              </ButtonWrapper>
            )}
          </StyledCard>
        </StyledContent>
      </ListItem>
    </>
  );
};

export default observer(TripItem);
