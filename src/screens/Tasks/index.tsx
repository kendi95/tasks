import { FC } from "react";
import { TouchableWithoutFeedback } from "react-native";

import { useGlobal } from "../../hooks/useGlobal";

import { MainHeader } from "../../components/MainHeader";
import { MainFooter } from "../../components/MainFooter";
import { Container } from "./styles";

export const Tasks: FC = () => {
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
        <MainFooter />
      </Container>
    </TouchableWithoutFeedback>
  );
}