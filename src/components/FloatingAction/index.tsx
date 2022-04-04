import { FC, ReactElement } from "react";
import { BorderlessButtonProps } from "react-native-gesture-handler";

import { useAnimation } from "../../hooks/useAnimation";

import { Container } from "./styles";

interface FloatingActionProps extends BorderlessButtonProps{
  icon: ReactElement
}

export const FloatingAction: FC<FloatingActionProps> = ({ icon, ...rest }) => {
  const { settingButtonAnimation } = useAnimation();

  return (
    <Container style={settingButtonAnimation} {...rest}>
      { icon }
    </Container>
  );

}