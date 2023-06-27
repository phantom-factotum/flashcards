import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import * as React from "react";
import HomeScreen from "./Home";
import SettingsScreen from "./Settings";
export type ParamList = {
  Home: undefined;
  Settings: undefined;
  Lessons: undefined;
};
const Tab = createBottomTabNavigator<ParamList>();
export default function Screens() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
