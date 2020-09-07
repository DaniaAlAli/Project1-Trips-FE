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
  BackgroundImage,
} from "./styles";

// component
import Ask from "../QA/index";

// Stores
import tripStore from "../../stores/tripStore";
import UpdateButton from "../buttons/UpdateButton";

const TripItem = ({ trip, navigation, myTrips }) => {
  return (
    <>
      <ListItem>
        <StyledContent>
          <StyledCard style={{ backgroundColor: "#101030" }}>
            <BackgroundImage source={{ backgroundColor: "white" }}>
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
                            "https://images.hdqwalls.com/wallpapers/boeing-737-next-generation-planes-minimalism-4k-st.jpg",
                        }
                  }
                />
              </CardItem>
              <CardItem style={{ backgroundColor: "#101030" }}>
                <Left>
                  <Text
                    onPress={() =>
                      navigation.navigate("Trip Detail", { trip: trip })
                    }
                    style={{ color: "white" }}
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

                  <Ask trip={trip} />
                </ButtonWrapper>
              )}
            </BackgroundImage>
          </StyledCard>
        </StyledContent>
      </ListItem>
    </>
  );
};

export default observer(TripItem);
