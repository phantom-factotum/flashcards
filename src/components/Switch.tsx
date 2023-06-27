import {useAtom} from "jotai";
import React from "react";
import {StyleSheet} from "react-native";
import {Switch, SwitchProps} from "react-native-paper";
import {themeAtom} from "../atoms";
import {Theme} from "../helpers/theme";
// making theme optional only works this way
export type Props = Omit<SwitchProps, "theme"> & {
  theme?: Theme;
};

export default function MySwitch(props: Props) {
  const [theme] = useAtom(themeAtom);
  return (
    <Switch
      style={[styles.switch, props.style]}
      {...props}
      thumbColor={theme.colors.primary}
      trackColor={{
        false: theme.colors.lightPrimary,
        true: theme.colors.darkPrimary,
      }}
    />
  );
}

const styles = StyleSheet.create({
  switch: {
    marginHorizontal: 10,
  },
});
