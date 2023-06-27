import {BottomTabScreenProps} from "@react-navigation/bottom-tabs";
import {useAtom} from "jotai";
import React from "react";
import {StyleSheet, View} from "react-native";
import {Text} from "react-native-paper";
import ColorPicker, {HueSlider, Panel1} from "reanimated-color-picker";
import {ParamList} from ".";
import {isDarkModeAtom, mainColorAtom} from "../atoms";
import LabeledSwitch from "../components/LabeledSwitch";
import {toRGBA} from "../helpers/colors";
import {useTheme} from "../helpers/theme";
type Props = BottomTabScreenProps<ParamList, "Settings">;

export default function Settings({}: Props) {
  const [mainColor, setMainColor] = useAtom(mainColorAtom);
  const [isDarkMode, setIsDarkMode] = useAtom(isDarkModeAtom);
  const theme = useTheme();
  return (
    <View
      style={[styles.container, {backgroundColor: theme.colors.background}]}>
      <Text>Settings screen</Text>
      <LabeledSwitch
        value={isDarkMode}
        onValueChange={setIsDarkMode}
        label="Set color theme"
      />
      <Text>Color: {mainColor}</Text>
      <ColorPicker
        style={styles.colorPicker}
        value={theme.colors.primary}
        onComplete={result => {
          let color = toRGBA(result.hex);
          setMainColor(color);
        }}>
        <Panel1 />
        <HueSlider />
      </ColorPicker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  colorPicker: {
    width: "80%",
    height: "50%",
    alignSelf: "center",
  },
});
