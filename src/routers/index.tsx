import React, { FC, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as ScreenOrientation from 'expo-screen-orientation';

import { Tasks } from "../screens/Tasks";

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
        }}
      >
        <Stack.Screen 
          name="Tasks" 
          component={Tasks} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}