import React from "react";
import { CardItem, Left, Right, ListItem, Text } from "native-base";

import {
  TripItemStyled,
  StyledCard,
  StyledContent,
  StyledImage,
} from "./styles";

const TripItem = ({ trip, navigation }) => {
  return (
    <>
      <ListItem
      // onPress={() => navigation.navigate("Coffees", { trip: trip })}
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
                          "https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F150929101049-black-coffee-stock.jpg",
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
          </StyledCard>
        </StyledContent>
      </ListItem>
    </>
  );
};

export default TripItem;
