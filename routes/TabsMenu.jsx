import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
//import { SafeAreaView } from "react-native-safe-area-context";
import { Profile, Posts } from "../pages";

const Tab = createMaterialTopTabNavigator();

export function TabsMenu() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Posts" component={Posts} />
    </Tab.Navigator>
  );
}

