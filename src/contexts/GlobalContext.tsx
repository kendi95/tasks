import { createContext, FC, useEffect, useState } from "react";
import { Keyboard } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { StatusBar } from "expo-status-bar";
import { setBackgroundColorAsync } from "expo-navigation-bar";

import lightTheme from "../styles/light";
import darkTheme from "../styles/dark";

interface IGlobalContextProps {
  isDarkMode: boolean;
  isShowedMenu: boolean;
  isExpandedInput: boolean;
  onChangeTheme(status: boolean): void;
  onHideMenu(): void;
  onShowMenu(): void;
  onExpandedSearchInput(): void;
  onRetractedSearchInput(): void;
}

export const GlobalContext = createContext({} as IGlobalContextProps);

export const GlobalProvider: FC = ({ children }) => {
  const [isShowedMenu, setIsShowedMenu] = useState<boolean>(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const [isExpandedInput, setIsExpandedInput] = useState<boolean>(false);

  function onChangeTheme(status: boolean) {
    // setIsDarkMode(status);
  }

  function onHideMenu() {
    setIsShowedMenu(false);
  }

  function onShowMenu() {
    setIsShowedMenu(true);
  }

  function onExpandedSearchInput() {
    setIsExpandedInput(true);
  }

  function onRetractedSearchInput() {
    Keyboard.dismiss();
    setIsExpandedInput(false);
  }

  useEffect(() => {
    async function changeBackgroundColorNavigation() {
      await setBackgroundColorAsync("#3C3939");
    }

    changeBackgroundColorNavigation();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        isDarkMode,
        isShowedMenu,
        isExpandedInput,
        onChangeTheme,
        onHideMenu,
        onShowMenu,
        onExpandedSearchInput,
        onRetractedSearchInput
      }}
    >
      <StatusBar 
        animated 
        backgroundColor="#3C3939" 
        translucent 
        style="light"
      />

      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme }>
        { children }  
      </ThemeProvider>
    </GlobalContext.Provider>
  );
}