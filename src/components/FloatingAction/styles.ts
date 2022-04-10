import styled from "styled-components/native";
import { BorderlessButton } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";
import { RFValue } from "react-native-responsive-fontsize";

const AnimatedBorderlessButton = Animated.createAnimatedComponent(BorderlessButton);

export const Container = styled(AnimatedBorderlessButton)`
  align-items: center;
  justify-content: center;

  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
  border-radius: ${RFValue(24)}px;
  background: ${({ theme }) => theme.colors.secundary};
`;