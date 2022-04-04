import { FC } from "react";
import { useTheme } from "styled-components/native"

import { Container, InputSearch, AnimatedIcon } from "./styles";
import { FloatingAction } from "../FloatingAction";
import { Menu } from "../Menu";

import { useGlobal } from "../../hooks/useGlobal";
import { useAnimation } from "../../hooks/useAnimation";

export const MainHeader: FC = () => {
  const { colors } = useTheme();
  const { 
    onShowMenu, 
    onExpandedSearchInput, 
    onRetractedSearchInput
  } = useGlobal();
  const { 
    rotateIconAnimation, 
    searchInputAnimation
  } = useAnimation();

  return (
    <Container>
      <InputSearch 
        style={searchInputAnimation}
        placeholder="Pesquise suas tarefas..."
        placeholderTextColor={colors.textColorSecundary} 
        onFocus={onExpandedSearchInput}
        onBlur={onRetractedSearchInput}
      />

      <FloatingAction 
        onPress={onShowMenu}
        icon={
          <AnimatedIcon 
            name="settings" 
            color={colors.iconColorPrimary} 
            size={24}
            style={rotateIconAnimation}
          />
        }
      />

      <Menu />
    </Container>

  );
}