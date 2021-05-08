import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import colors from "../utils/styles/colors";
import Confirmation from "../screens/Confirmation";
import UserIdentification from "../screens/UserIdentification";
import Welcome from "../screens/Welcome";

const StackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
  <StackRoutes.Navigator
    headerMode="none"
    screenOptions={{
      cardStyle: {
        backgroundColor: colors.white,
      },
    }}
  >
    <StackRoutes.Screen name="Welcome" component={Welcome} />
    <StackRoutes.Screen
      name="UserIdentification"
      component={UserIdentification}
    />
    <StackRoutes.Screen name="Confirmation" component={Confirmation} />
  </StackRoutes.Navigator>
);

export default AppRoutes;
