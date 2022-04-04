import styled from "styled-components/native";
import { BorderlessButton } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";

const AnimatedBorderlessButton = Animated.createAnimatedComponent(BorderlessButton);

export const Container = styled(AnimatedBorderlessButton)`
  align-items: center;
  justify-content: center;

  width: 48px;
  height: 48px;
  border-radius: 24px;
  background: ${({ theme }) => theme.colors.secundary};
`;