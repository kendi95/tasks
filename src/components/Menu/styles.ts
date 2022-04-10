import styled from "styled-components/native";
import Animated from 'react-native-reanimated';
import { RFValue, RFPercentage } from "react-native-responsive-fontsize";

export const Container = styled(Animated.View)`
  border-radius: ${RFValue(16)}px;

  position: absolute;
  right: ${RFValue(16)}px;
  top: ${RFValue(16)}px;

  align-items: center;
  background: ${({ theme }) => theme.colors.secundary};
`;

export const SwitchContainer = styled(Animated.View)`
  width: ${RFPercentage(100)}%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${RFValue(16)}px;
  margin-top: ${RFValue(8)}px;
`;

export const SwitchLabel = styled.Text`
  color: ${({ theme }) => theme.colors.textColorSecundary};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(14)}px;
`;