import React from "react";
import { observer } from "mobx-react";
import { CardItem, Left, Right, ListItem, Text } from "native-base";

import {
  TripItemStyled,
  StyledCard,
  StyledContent,
  StyledImage,
  DeleteTrip,
} from "./styles";

// Stores
import tripStore from "../../stores/tripStore";
import UpdateButton from "../buttons/UpdateButton";

const TripItem = ({ trip, navigation }) => {
  return (
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
            <UpdateButton trip={trip} />
          </StyledCard>
        </StyledContent>
      </ListItem>
    </>
  );
};

export default observer(TripItem);
