import { FC } from "react";
import { TouchableWithoutFeedback } from "react-native";
import { useTheme } from "styled-components";

import { useGlobal } from "../../hooks/useGlobal";

import { MainHeader } from "../../components/MainHeader";
import { Container } from "./styles";

export const Tasks: FC = () => {
  const { fonts, colors } = useTheme();
  const { 
    onHideMenu, 
    onRetractedSearchInput, 
    isShowedMenu, 
    isExpandedInput 
  } = useGlobal();

  function onPressWithoutfeedback() {
    if (isShowedMenu) {
      onHideMenu();
    }

    if (isExpandedInput) {
      onRetractedSearchInput();
    }
  }

  return (
    <TouchableWithoutFeedback
      onPress={onPressWithoutfeedback}
    >
      <Container>
        <MainHeader />
      </Container>
    </TouchableWithoutFeedback>
  );
}