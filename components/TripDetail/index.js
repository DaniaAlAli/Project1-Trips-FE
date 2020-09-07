import React from "react";
import { observer } from "mobx-react";
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
import {
  CountryButtonStyled,
  DateButtonStyled,
  DestinationName,
  DetailTitle,
  DetailDiv,
  DetailField,
  DetailButtonStyled,
  StyledImage,
} from "./styles";

// component
import Ask from "../QA";

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
                  Country:
                </DetailTitle>
                <DetailField>{trip.country}</DetailField>
              </DetailDiv>
              <DetailDiv>
                <DetailTitle>
                  <DateButtonStyled type="MaterialIcons" name="date-range" />
                  Date:
                </DetailTitle>
                <DetailField>{trip.date}</DetailField>
              </DetailDiv>
              <DetailDiv>
                <DetailTitle>
                  <DetailButtonStyled type="Entypo" name="info" />
                  Details:
                </DetailTitle>
                <DetailField>{trip.details}</DetailField>
              </DetailDiv>
              {/* <UpdateButton trip={trip} /> */}
            </Body>
          </CardItem>
          {/* <CardItem>
          </CardItem> */}
        </Card>
      </Content>
    </Container>
  );
};

export default observer(TripDetail);
