import {BottomTabScreenProps} from "@react-navigation/bottom-tabs";
import React, {useRef} from "react";
import {FlatList, StyleSheet, View} from "react-native";
import {Text} from "react-native-paper";
import {ParamList} from ".";
import QuestionFlashCard from "../components/QuestionFlashCard";
import {useTheme} from "../helpers/theme";
import useLayout from "../hooks/useLayout";
import useQuestions, {Question} from "../hooks/useQuestions";

type Props = BottomTabScreenProps<ParamList, "Home">;

export default function Home({}: Props) {
  const theme = useTheme();
  const questions = useQuestions();
  const [{width, height}, onLayout] = useLayout();
  const flatlistRef = useRef<FlatList<Question>>(null);
  return (
    <View
      style={[styles.container, {backgroundColor: theme.colors.background}]}>
      <Text>Home screen</Text>
      <View style={styles.flatListContainer} onLayout={onLayout}>
        <FlatList
          data={questions}
          renderItem={props => (
            <QuestionFlashCard
              {...props}
              width={width}
              height={height}
              scrollRef={flatlistRef}
              totalItems={questions.length}
            />
          )}
          horizontal
          pagingEnabled
          scrollEnabled={false}
          ref={flatlistRef}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatListContainer: {
    flex: 1,
  },
});
