import React from "react";
import { observer } from "mobx-react";
<<<<<<< HEAD

//Stores
import tripStore from "../../stores/tripStore";

//Styles
import { Body, Content, Container, Card, CardItem } from "native-base";
=======
import {
  Body,
  Content,
  Text,
  Container,
  Card,
  CardItem,
  View,
} from "native-base";

//Styles
>>>>>>> e11f116624da0eadeaede235c4ae5f93a058c8d6
import {
  CountryButtonStyled,
  DateButtonStyled,
  DetailTitle,
  DetailDiv,
  DetailField,
  DetailButtonStyled,
  StyledImage,
} from "./styles";

const TripDetail = ({ route }) => {
  const { trip } = route.params;

  return (
    <Container>
      <Content>
        <Card style={{ flex: 1 }}>
          <CardItem>
            <Body>
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
              <DetailDiv>
                <DetailTitle>
                  <CountryButtonStyled type="Entypo" name="location" />
                  Country: {trip.country}
                </DetailTitle>
              </DetailDiv>
              <DetailDiv>
                <DetailTitle>
                  <DateButtonStyled type="MaterialIcons" name="date-range" />
                  Date:{trip.date}
                </DetailTitle>
              </DetailDiv>
              <DetailDiv>
                <DetailTitle>
                  <DetailButtonStyled type="Entypo" name="info" />
                  Details:{trip.details}
                </DetailTitle>
              </DetailDiv>
            </Body>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
};

export default observer(TripDetail);
