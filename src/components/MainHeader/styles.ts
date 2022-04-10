import styled from "styled-components/native";
import Animated from "react-native-reanimated";
import Icon from "@expo/vector-icons/Feather";
import { Dimensions, TextInput } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const { width } = Dimensions.get("window");

export const AnimatedIcon = Animated.createAnimatedComponent(Icon);
const AnimatedInputSearch = Animated.createAnimatedComponent(TextInput)

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  height: ${RFValue(80)}px;
  padding: 0 ${RFValue(16)}px;
  margin-top: ${RFValue(32)}px;
  background: transparent;
`;

export const InputSearch = styled(AnimatedInputSearch)`
  height: ${RFValue(56)}px;
  width: ${RFValue(width * 0.7)}px;
  border-radius: ${RFValue(12)}px;
  background: ${({ theme }) => theme.colors.secundary};
  padding: ${RFValue(12)}px ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.textColorPrimary};
`;