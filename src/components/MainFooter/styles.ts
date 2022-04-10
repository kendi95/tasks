import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import Icon from "@expo/vector-icons/Feather";
import Animated from "react-native-reanimated";
import { View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

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
  height: ${RFValue(72)}px;
  border-top-left-radius: ${RFValue(16)}px;
  border-top-right-radius: ${RFValue(16)}px;
`;

export const ScreenButton = styled(RectButton)<ScreenButtonProps>`
  width: ${RFValue(64)}px;
  height: ${RFValue(48)}px;
  border-radius: ${RFValue(24)}px;

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
  width: ${RFValue(16)}px;
  height: ${RFValue(16)}px;
  border-radius: ${RFValue(8)}px;

  position: absolute;
  right: ${RFValue(10)}px;
  top: ${RFValue(4)}px;
  
  align-items: center;
  justify-content: center;
`;

export const ScreenBadgeText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.textColorPrimary};
`;