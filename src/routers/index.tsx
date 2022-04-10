import React, { FC, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";
import * as ScreenOrientation from 'expo-screen-orientation';

import { Tasks, Trash } from "../screens";

const Stack = createStackNavigator();

export const Router: FC = () => {

  useEffect(() => {
    async function setDeviceOrientationToVertical() {
      await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.PORTRAIT
      );
    }

    setDeviceOrientationToVertical();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          cardShadowEnabled: false
        }}
      >
        <Stack.Screen 
          name="Tasks" 
          component={Tasks} 
        />

        <Stack.Screen 
          name="Trash" 
          component={Trash} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}