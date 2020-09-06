import React, { useState } from "react";
import { observer } from "mobx-react";
import moment from "moment";


// Styles
import { CardItem, Left, Right, ListItem, Text, Icon } from "native-base";

// Components
import UpdateButton from "../buttons/UpdateButton";
import Profile from "../Profile";


// Styles
import { CardItem, Left, Right, ListItem, Text, Icon } from "native-base";
import { color } from "react-native-reanimated";
import {
  StyledCard,
  StyledContent,
  StyledImage,
  DeleteTrip,
  CreatedAt,
  OwnerOfTrip,
  ButtonWrapper,
} from "./styles";

// Stores
import tripStore from "../../stores/tripStore";
import authStore from "../../stores/authStore";

const TripItem = ({ trip, navigation, myTrips }) => {
  return (
    <>
      <ListItem>
        <StyledContent>
          <StyledCard>
            <CreatedAt>{moment(trip.createdAt).fromNow()}</CreatedAt>
            {!myTrips && (
              <OwnerOfTrip
                onPress={() =>
                  navigation.push("Profile", {
                    userId: trip.userId,
                    trip: trip,
                  })
                }
              >
                {trip.profileName}
              </OwnerOfTrip>
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
              <Icon
                type="AntDesign"
                name={trip.favorited ? "star" : "staro"}
                style={{ color: "#ffbe0b" }}
                // permissions
                onPress={() => tripStore.updateFavoritetrip(trip)}
              />
              <Text
                onPress={() =>
                  navigation.navigate("Trip Detail", { trip: trip })
                }
              >
                {trip.destination}
              </Text>

              <Right>
                <Text>{trip.details}</Text>
              </Right>
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
