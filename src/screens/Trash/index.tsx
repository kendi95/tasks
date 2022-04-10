import { FC, useEffect } from "react";
import { TouchableWithoutFeedback } from "react-native";

import { useGlobal } from "../../hooks/useGlobal";
import { useAnimation } from "../../hooks/useAnimation";

import { MainHeader } from "../../components/MainHeader";
import { MainFooter } from "../../components/MainFooter";
import { Container, Main, Task, Title } from "./styles";

export const Trash: FC = () => {
  const { 
    onHideMenu, 
    onRetractedSearchInput, 
    isShowedMenu, 
    isExpandedInput
  } = useGlobal();
  const { mainTasksAnimation, onShowMainFooter } = useAnimation();

  function onPressWithoutfeedback() {
    if (isShowedMenu) {
      onHideMenu();
    }

    if (isExpandedInput) {
      onRetractedSearchInput();
    }
  }
  useEffect(() => {
    onShowMainFooter();
  }, []);

  return (
    <TouchableWithoutFeedback
      onPress={onPressWithoutfeedback}
    >
      <Container>
        <MainHeader />

        <Title>Lixeira</Title>

        <Main style={mainTasksAnimation}>
          <Task enabled={!isShowedMenu}/>
          <Task enabled={!isShowedMenu}/>
          <Task enabled={!isShowedMenu}/>
          <Task enabled={!isShowedMenu}/>
          <Task enabled={!isShowedMenu}/>
          <Task enabled={!isShowedMenu}/>
          <Task enabled={!isShowedMenu}/>
          <Task enabled={!isShowedMenu}/>
          <Task enabled={!isShowedMenu}/>
          <Task enabled={!isShowedMenu}/>
        </Main>

        <MainFooter />
      </Container>
    </TouchableWithoutFeedback>
  );
}