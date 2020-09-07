import React, { useState } from "react";
import { observer } from "mobx-react";

//Styles
import { Text, Right, Card, CardItem } from "native-base";
import { MultiLineInput, Send, SmallText } from "./styles";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

// store
import qaStore from "../../stores/qaStore";

const Answer = ({ ask, trip }) => {
  const [updateAnswer, setUpdateAnswer] = useState(ask);
  const [addAnswer, setAddAnswer] = useState(false);

  const user = authStore.users.find((user) => ask.userId === user.id);

  const handleAnswer = async () => {
    setAddAnswer(!addAnswer);
    await qaStore.updateAnswer(updateAnswer);
  };
  return (
    <Card
      style={{
        borderColor: "Blue",
      }}
    >
      <CardItem style={{ backgroundColor: "grey" }}>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 14, paddingLeft: 10 }}>{user.username}</Text>
        </View>
        {authStore.user.id === trip.userId && (
          <>
            <Right>
              <Icon
                onPress={() => setAddAnswer(!addAnswer)}
                name="message-text-outline"
                size="20"
              />
              <SmallText>Reply Question</SmallText>
            </Right>
          </>
        )}
      </CardItem>

      <CardItem style={{ backgroundColor: "grey", paddingTop: 0 }}>
        <Text style={{ color: "blue" }}>{ask.question}</Text>
      </CardItem>
      {addAnswer ? (
        <>
          <View>
            <MultiLineInput
              onChangeText={(answer) =>
                setUpdateAnswer({ ...updateAnswer, answer })
              }
              placeholder="answer"
              placeholderTextColor="red"
              multiline={true}
              value={updateAnswer.answer}
            />

            <Send>
              <Text style={{ fontSize: 14 }} onPress={handleAnswer}>
                send
              </Text>
            </Send>
          </View>
        </>
      ) : (
        <CardItem>
          <Text style={{ color: "red" }}>{ask.answer}</Text>
        </CardItem>
      )}
    </Card>
  );
};

export default observer(Answer);
