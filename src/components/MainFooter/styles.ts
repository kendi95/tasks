import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import Icon from "@expo/vector-icons/Feather";
import Animated from "react-native-reanimated";
import { View } from "react-native";

const AnimatedIcon = Animated.createAnimatedComponent(Icon);
const AnimatedContainer = Animated.createAnimatedComponent(View);

interface ScreenButtonProps {
  isActive: boolean;
}

interface ScreenAnimatedIconProps {
  isActive: boolean;
}

export const Container = styled(AnimatedContainer)`
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  background: ${({ theme }) => theme.colors.secundary};

  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 72px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`;

export const ScreenButton = styled(RectButton)<ScreenButtonProps>`
  width: 64px;
  height: 48px;
  border-radius: 24px;

  align-items: center;
  justify-content: center;
  background: ${({ theme, isActive }) => 
    isActive ? theme.colors.primary : theme.colors.secundary
  };
`;

export const ScrennAnimatedIcon = styled(AnimatedIcon)<ScreenAnimatedIconProps>`
  color: ${({ theme, isActive }) => 
    isActive ? theme.colors.iconColorPrimary : theme.colors.iconColorSecundary
  };
`;

export const ScreenBadge = styled.View`
  background: ${({ theme }) => theme.colors.error};
  width: 16px;
  height: 16px;
  border-radius: 8px;

  position: absolute;
  right: 10px;
  top: 4px;
  
  align-items: center;
  justify-content: center;
`;

export const ScreenBadgeText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 10px;
  color: ${({ theme }) => theme.colors.textColorPrimary};
`;