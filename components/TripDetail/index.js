import React from "react";
import { observer } from "mobx-react";
import { SafeAreaView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

//Stores
import tripStore from "../../stores/tripStore";

//Components
import Map from "../Map";

// Styles
import { Body, Content, Text, Container, Card, CardItem } from "native-base";

import {
  CountryButtonStyled,
  DateButtonStyled,
  DetailTitle,
  DetailDiv,
  StyledImage,
  StyledMapContainer,
  DetailButtonStyled,
} from "./styles";

const TripDetail = ({ route }) => {
  const { trip } = route.params;

  return (
    <>
      <SafeAreaView>
        <ScrollView>
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
                        <DateButtonStyled
                          type="MaterialIcons"
                          name="date-range"
                        />
                        Date: {trip.date}
                      </DetailTitle>
                    </DetailDiv>
                    <DetailDiv>
                      <DetailTitle>
                        <DetailButtonStyled type="Entypo" name="info" />
                        Details: {trip.details}
                      </DetailTitle>
                    </DetailDiv>
                    {trip.latitude && <Map trip={trip} />}
                  </Body>
                </CardItem>
              </Card>
            </Content>
          </Container>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default observer(TripDetail);
