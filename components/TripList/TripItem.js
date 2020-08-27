import React from "react";
import { CardItem, Left, Right, ListItem, Text } from "native-base";

import {
  TripItemStyled,
  StyledCard,
  StyledContent,
  StyledImage,
  DeleteTrip,
} from "./styles";
// REVIEW: Remove imports you're not using

// Stores
import tripStore from "../../stores/tripStore";

const TripItem = ({ trip, navigation }) => {
  return (
    // REVIEW: Remove fragment
    <>
      <ListItem
        onPress={() => navigation.navigate("Trip Detail", { trip: trip })}
      >
        <StyledContent>
          <StyledCard>
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

            <DeleteTrip
              type="EvilIcons"
              name="trash"
              onPress={() => tripStore.deleteTrip(trip.id)}
            />
          </StyledCard>
        </StyledContent>
      </ListItem>
    </>
  );
};

export default TripItem;
