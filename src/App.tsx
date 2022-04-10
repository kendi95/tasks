import React, { FC } from 'react';
import { 
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold
} from "@expo-google-fonts/inter";
import { BackHandler } from 'react-native';

import { GlobalProvider } from "./contexts/GlobalContext";
import { AnimationProvider } from './contexts/AnimationContext';
import { Router } from './routers';
import { AppLoading } from './components/AppLoading';

export const App: FC = () => {
  const [loadedFonts] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold
  });

  if (!loadedFonts) {
    return <AppLoading />
  }

  BackHandler.addEventListener("hardwareBackPress", () => {
    BackHandler.exitApp();

    return true;
  });

  return (
    <GlobalProvider>
      <AnimationProvider>
        <Router />
      </AnimationProvider>
    </GlobalProvider>
  );
}
