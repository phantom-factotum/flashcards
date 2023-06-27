import {NavigationContainer} from "@react-navigation/native";
import {useAtom} from "jotai";
import React from "react";
import {StyleSheet} from "react-native";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import {Provider as PaperProvider} from "react-native-paper";
import {SafeAreaProvider} from "react-native-safe-area-context";

import AppRoot from "./src";
import {themeAtom} from "./src/atoms";

export default function App() {
  const [theme] = useAtom(themeAtom);
  return (
    <GestureHandlerRootView style={styles.container}>
      <SafeAreaProvider style={styles.container}>
        <PaperProvider theme={theme}>
          <NavigationContainer theme={theme}>
            <AppRoot />
          </NavigationContainer>
        </PaperProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
