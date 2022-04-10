import { FC, useEffect, useState } from "react";
import { useTheme } from "styled-components/native";
import { StyleSheet } from "react-native";

import { useAnimation } from "../../hooks/useAnimation";
import { useGlobal } from "../../hooks/useGlobal";

import { 
  Container, 
  ScreenButton, 
  ScrennAnimatedIcon, 
  ScreenBadge,
  ScreenBadgeText
} from "./styles";

export const MainFooter: FC = () => {
  const { 
    changeBackgroundColorNavigation, 
    onChangeCurrentScreen,
    currentScreen
  } = useGlobal();
  const { mainFooterAnimation } = useAnimation();
  const { colors } = useTheme();

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

  useEffect(() => {
    setTimeout(() => {
      setCountRemovedTask(10);
    }, 3000);
  }, []);

  useEffect(() => {
    changeBackgroundColorNavigation(colors.secundary);
  }, [])

  return (
    <Container style={[mainFooterAnimation, styles.container]}>
      <ScreenButton 
        isActive={currentScreen === "Tasks" && true}
        onPress={() => onChangeCurrentScreen("Tasks")}
      >
        <ScrennAnimatedIcon 
          isActive={currentScreen === "Tasks" && true}
          name="grid" 
          size={currentScreen === "Tasks" ? 24 : 20}
        />
      </ScreenButton>

      <ScreenButton 
        isActive={currentScreen === "Trash" && true}
        onPress={() => onChangeCurrentScreen("Trash")}
      >
        {countRemovedTask > 0 && (
          <ScreenBadge>
            <ScreenBadgeText>{countRemovedTask}</ScreenBadgeText>
          </ScreenBadge>
        )}
        <ScrennAnimatedIcon 
          isActive={currentScreen === "Trash" && true}
          name={countRemovedTask > 0 ? "trash-2" : "trash"} 
          size={currentScreen === "Trash" ? 24 : 20}
        />
      </ScreenButton>

      <ScreenButton 
        isActive={currentScreen === "Favorit" && true}
        onPress={() => onChangeCurrentScreen("Favorit")}
      >
        <ScrennAnimatedIcon 
          isActive={currentScreen === "Favorit" && true}
          name="star" 
          size={currentScreen === "Favorit" ? 24 : 20}
        />
      </ScreenButton>
    </Container>
  );
}