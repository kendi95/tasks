import { FC, useEffect } from "react";
import { setBackgroundColorAsync } from "expo-navigation-bar";
import LottieView from 'lottie-react-native';
import { StatusBar } from "expo-status-bar";

import loadingApp from "../../assets/loading-app.json";

import { Container } from "./styles";

export const AppLoading: FC = () => {

  useEffect(() => {
    async function changeBackgroundColorNavigation() {
      await setBackgroundColorAsync("#3C3939");
    }

    changeBackgroundColorNavigation();
  }, []);

  return (
    <Container>
      <StatusBar 
        animated 
        backgroundColor="#3C3939" 
        translucent 
        style="light"
      />

      <LottieView
        source={loadingApp}
        style={{
          backgroundColor: "#3C3939",
        }}
        renderMode="SOFTWARE"
        loop 
        autoPlay 
        cacheStrategy="strong"
        hardwareAccelerationAndroid 
      />
    </Container>
  );
}