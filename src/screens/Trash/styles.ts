import styled from "styled-components/native";
import Animated from "react-native-reanimated";
import { View } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";

const AnimatedMain = Animated.createAnimatedComponent(View);

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.primary};
`;

export const Main = styled(AnimatedMain)`
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-evenly;
  flex-wrap: wrap;

  padding: 0 ${RFValue(8)}px;
`;

export const Task = styled(RectButton)<RectButtonProps>`
  margin: ${RFValue(8)}px ${RFValue(4)}px;
  width: ${RFValue(172)}px;
  height: ${RFValue(120)}px;
  border-radius: ${RFValue(12)}px;
  background: ${({ theme }) => theme.colors.secundary};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.textColorPrimary};
  margin: ${RFValue(8)}px ${RFValue(16)}px ${RFValue(4)}px ${RFValue(16)}px;
`;