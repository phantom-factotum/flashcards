import type {RefObject} from "react";
import React, {useEffect} from "react";
import type {FlatList, ListRenderItemInfo} from "react-native";
import {StyleSheet, View} from "react-native";
import {TouchableOpacity} from "react-native-gesture-handler";
import {Card, Text} from "react-native-paper";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

import {useTheme} from "../helpers/theme";
import useAnswer from "../hooks/useAnswerSelection";
import type {Question} from "../hooks/useQuestions";

type Props = ListRenderItemInfo<Question> & {
  width: number;
  height: number;
  scrollRef: RefObject<FlatList<Question>>;
  totalItems: number;
};

const CHOICES = ["A", "B", "C", "D", "E", "F"];
//eslint-disable import/prefer-default-export
export default function QuestionFlashCard({
  item,
  index,
  width,
  height,
  scrollRef,
  totalItems,
}: Props) {
  const {choices, selectionIndex, setSelectionIndex, isCorrect, answerIndex} =
    useAnswer(item);
  const theme = useTheme();
  const cardRotation = useSharedValue(0);
  const rStyle = useAnimatedStyle(() => {
    const rotation = cardRotation.value;
    return {};
  });
  const remainingWidth =
    width - styles.container.margin - styles.container.padding;
  const backgroundColor = theme.dark
    ? theme.colors.darkPrimary
    : theme.colors.lightPrimary;

  useEffect(() => {
    if (isCorrect && index + 1 < totalItems) {
      setTimeout(() => {
        scrollRef.current?.scrollToIndex({
          index: index + 1,
        });
      }, 1500);
    }
  }, [isCorrect, scrollRef, index, totalItems]);
  return (
    <View style={[styles.container, {width: remainingWidth, height}]}>
      <Card style={styles.cardStyle}>
        <Card.Title title={item.question} />
        <Card.Content style={styles.choicesContainer}>
          {choices.map((choice, choiceIndex) => {
            const buttonStyle = {
              backgroundColor:
                choiceIndex === selectionIndex ? "red" : backgroundColor,
              width: (remainingWidth * 0.8 - styles.buttonContainer.margin) / 2,
            };
            return (
              <TouchableOpacity
                style={[styles.buttonContainer, buttonStyle]}
                onPress={() => {
                  setSelectionIndex(choiceIndex);
                }}
                key={`button-${choiceIndex}`}>
                <Text style={styles.choiceLetter}>
                  {CHOICES[choiceIndex]}:{" "}
                </Text>
                <Text style={styles.choice}>{choice}</Text>
              </TouchableOpacity>
            );
          })}
        </Card.Content>
      </Card>
      {selectionIndex >= 0 && (
        <View style={styles.answerContainer}>
          <Text>You selected {CHOICES[selectionIndex]}</Text>
          <Text>
            {isCorrect
              ? "Good job!"
              : `The correct answer is ${CHOICES[answerIndex]}`}
          </Text>
        </View>
      )}
    </View>
  );
}
Animated;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    padding: 5,
  },
  cardStyle: {
    flex: 1,
    margin: 5,
  },
  questionText: {
    // fontSize: 18,
    // alignItems: 'center',
    // justifyContent: 'center',
    // marginBottom: 10,
  },
  choicesContainer: {
    // flex: 1,
    height: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    // width: '100%',
    justifyContent: "space-evenly",
  },
  buttonContainer: {
    // width: '48%',
    margin: 5,
    padding: 15,
    borderRadius: 10,
    // flexWrap: 'wrap',
    // alignItems: 'center',
  },
  answerContainer: {
    // position: "absolute",
    borderWidth: 1,
    backgroundColor: "pink",
    alignItems: "center",
    padding: 5,
    margin: 10,
    borderRadius: 10,
    zIndex: 10,
    // top: "15%",
    // left: "15%",
    // width: "60%",
    // height: "50%",
  },
  choiceLetter: {
    textAlign: "left",
  },
  choice: {
    textAlign: "center",
  },
});
