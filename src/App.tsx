import React, { FC } from 'react';
import { 
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold
} from "@expo-google-fonts/inter";


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

  return (
    <GlobalProvider>
      <AnimationProvider>
        <Router />
      </AnimationProvider>
    </GlobalProvider>
  );
}
