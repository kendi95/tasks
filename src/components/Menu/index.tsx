import { FC, useEffect, useState } from "react";
import { 
  useSharedValue, 
  useAnimatedStyle, 
  interpolate, 
  Extrapolate, 
  useDerivedValue, 
  withTiming 
} from "react-native-reanimated";
import { Switch } from "react-native-switch";
import { useTheme } from "styled-components/native";

import { useAnimation } from "../../hooks/useAnimation";
import { useGlobal } from "../../hooks/useGlobal";

import { Container, SwitchContainer, SwitchLabel } from "./styles";

export const Menu: FC = () => {
  const { colors } = useTheme();
  const { onChangeTheme, isDarkMode } = useGlobal();
  const { menuAnimation, opacityAnimation } = useAnimation();
  

  return (
    <Container style={menuAnimation}>
      <SwitchContainer style={opacityAnimation}>
        <SwitchLabel>Modo Escuro</SwitchLabel>
        <Switch 
          value={isDarkMode}
          onValueChange={onChangeTheme}
          renderActiveText={false}
          renderInActiveText={false}
          disabled={false}
          circleSize={26}
          barHeight={24}
          circleBorderWidth={3}
          backgroundActive={colors.iconColorSecundary}
          backgroundInactive={colors.primary}
          circleActiveColor={colors.iconColorPrimary}
          circleInActiveColor={colors.secundary}
        />
      </SwitchContainer>
    </Container>
  );
}