import styled from "styled-components/native";
import Animated from "react-native-reanimated";
import { View } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

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

  padding: 0 8px;
`;

export const Task = styled(RectButton)<RectButtonProps>`
  margin: 8px 4px;
  width: 180px;
  height: 120px;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.secundary};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 24px;
  color: ${({ theme }) => theme.colors.textColorPrimary};
  margin: 8px 16px 4px 16px;
`;