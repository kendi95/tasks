import { FC, useEffect, useState } from "react";
import { useTheme } from "styled-components/native";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { useAnimation } from "../../hooks/useAnimation";
import { useGlobal } from "../../hooks/useGlobal";

import { 
  Container, 
  ScreenButton, 
  ScrennAnimatedIcon, 
  ScreenBadge,
  ScreenBadgeText
} from "./styles";

type ChangeScreenProps = "Tasks" | "Trash" | "Favorit";

export const MainFooter: FC = () => {
  const { 
    changeBackgroundColorNavigation, 
    onChangeCurrentScreen,
    currentScreen
  } = useGlobal();
  const { mainFooterAnimation, onHideMainFooter } = useAnimation();
  const { colors } = useTheme();
  const { isFocused, goBack, navigate} = useNavigation();

  const [countRemovedTask, setCountRemovedTask] = useState(0);

  const styles = StyleSheet.create({
    container: {
      borderTopColor: colors.primary,
      borderRightColor: colors.primary,
      borderLeftColor: colors.primary,
      borderTopWidth: 3, 
      borderRightWidth: 0.1,
      borderLeftWidth: 0.1
    }
  });

  function onChangeScheen(screen: ChangeScreenProps) {
    if (currentScreen === screen) {
      return;
    }

    if (currentScreen !== screen && screen !== "Tasks") {
      onChangeCurrentScreen(screen);

      onHideMainFooter(() => {
        navigate(screen);
      });
    }

    if (screen === "Tasks") {
      onChangeCurrentScreen(screen);

      onHideMainFooter();
      goBack();
    }
  }

  // useEffect(() => {
  //   setTimeout(() => {
  //     setCountRemovedTask(10);
  //   }, 3000);
  // }, []);

  useEffect(() => {
    changeBackgroundColorNavigation(colors.secundary);
  }, [])

  return (
    <Container style={[mainFooterAnimation, styles.container]}>
      <ScreenButton 
        isActive={currentScreen === "Tasks" && isFocused()}
        onPress={() => onChangeScheen("Tasks")}
      >
        <ScrennAnimatedIcon 
          isActive={currentScreen === "Tasks" && isFocused()}
          name="grid" 
          size={currentScreen === "Tasks" ? 24 : 20}
        />
      </ScreenButton>

      <ScreenButton 
        isActive={currentScreen === "Trash" && isFocused()}
        onPress={() => onChangeScheen("Trash")}
      >
        {countRemovedTask > 0 && (
          <ScreenBadge>
            <ScreenBadgeText>{countRemovedTask}</ScreenBadgeText>
          </ScreenBadge>
        )}
        <ScrennAnimatedIcon 
          isActive={currentScreen === "Trash" && isFocused()}
          name={countRemovedTask > 0 ? "trash-2" : "trash"} 
          size={currentScreen === "Trash" ? 24 : 20}
        />
      </ScreenButton>

      <ScreenButton 
        isActive={currentScreen === "Favorit" && isFocused()}
        onPress={() => onChangeScheen("Favorit")}
      >
        <ScrennAnimatedIcon 
          isActive={currentScreen === "Favorit" && isFocused()}
          name="star" 
          size={currentScreen === "Favorit" ? 24 : 20}
        />
      </ScreenButton>
    </Container>
  );
}