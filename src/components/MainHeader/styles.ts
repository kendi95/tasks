import styled from "styled-components/native";
import Animated from "react-native-reanimated";
import Icon from "@expo/vector-icons/Feather";
import { Dimensions, TextInput } from "react-native";

const { width } = Dimensions.get("window");

export const AnimatedIcon = Animated.createAnimatedComponent(Icon);
const AnimatedInputSearch = Animated.createAnimatedComponent(TextInput)

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  height: 80px;
  padding: 0 16px;
  margin-top: 32px;
  background: transparent;
`;

export const InputSearch = styled(AnimatedInputSearch)`
  height: 56px;
  width: ${width * 0.7}px;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.secundary};
  padding: 12px 16px;
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textColorPrimary};
`;