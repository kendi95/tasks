import styled from "styled-components/native";
import Animated from 'react-native-reanimated';

export const Container = styled(Animated.View)`
  border-radius: 16px;

  position: absolute;
  right: 24px;
  top: 16px;

  flex: 100;
  align-items: center;
  background: ${({ theme }) => theme.colors.secundary};
`;

export const SwitchContainer = styled(Animated.View)`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  margin-top: 8px;
`;

export const SwitchLabel = styled.Text`
  color: ${({ theme }) => theme.colors.textColorSecundary};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 16px;
`;