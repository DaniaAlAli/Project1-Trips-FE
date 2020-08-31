import React, { useState } from "react";
import { observer } from "mobx-react";
import { CardItem, Left, Right, ListItem, Text } from "native-base";
import moment from "moment";

import {
  TripItemStyled,
  StyledCard,
  StyledContent,
  StyledImage,
  DeleteTrip,
  CreatedAt,
} from "./styles";

// Stores
import tripStore from "../../stores/tripStore";
import UpdateButton from "../buttons/UpdateButton";
import authStore from "../../stores/authStore";

const TripItem = ({ trip, navigation, myTrips }) => {
  return (
    <>
      <ListItem
        onPress={() => navigation.navigate("Trip Detail", { trip: trip })}
      >
        <StyledContent>
          <StyledCard>
            <Left></Left>
            <Left></Left>
            <CreatedAt>{moment(trip.createdAt).fromNow()}</CreatedAt>
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
                <Text>{trip.destination}</Text>
              </Left>
              <Right>
                <Text>{trip.details}</Text>
              </Right>
            </CardItem>
            {myTrips && (
              <>
                <DeleteTrip
                  type="EvilIcons"
                  name="trash"
                  onPress={() => tripStore.deleteTrip(trip.id)}
                />
                <UpdateButton trip={trip} />
              </>
            )}
          </StyledCard>
        </StyledContent>
      </ListItem>
    </>
  );
};

export default observer(TripItem);
