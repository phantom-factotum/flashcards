import React from "react";
import {StyleSheet, View} from "react-native";
import {Text} from "react-native-paper";
import {Theme} from "../helpers/theme";
import Switch, {Props as SwitchProps} from "./Switch";
export type Props = Omit<SwitchProps, "theme"> & {
  label: string;
  currentValueMessage?: string;
  theme?: Theme;
};

export default function LabeledSwitch({
  label,
  currentValueMessage,
  style,
  ...props
}: Props) {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.labelContainer}>
        <Text style={styles.labelText}>{label}</Text>
        <View style={styles.messageContainer}>
          <Text style={styles.valueText}>{currentValueMessage}</Text>
        </View>
      </View>
      <View style={styles.switchContainer}>
        <Switch {...props} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    paddingBottom: 5,
    justifyContent: "space-between",
  },
  labelContainer: {
    width: "60%",
    flexWrap: "wrap",
  },
  labelText: {
    width: "100%",
    fontSize: 18,
  },
  messageContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  valueText: {
    fontSize: 14,
    fontWeight: "300",
    fontStyle: "italic",
    flexWrap: "wrap",
  },
  switchContainer: {
    width: "40%",
    alignItems: "flex-end",
  },
});
