import { createContext, FC, useEffect, useState } from "react";
import { BackHandler, Keyboard } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { StatusBar } from "expo-status-bar";
import { setBackgroundColorAsync } from "expo-navigation-bar";

import lightTheme from "../styles/light";
import darkTheme from "../styles/dark";

interface IGlobalContextProps {
  isDarkMode: boolean;
  isShowedMenu: boolean;
  isExpandedInput: boolean;
  currentScreen: string;
  onChangeTheme(status: boolean): void;
  onHideMenu(): void;
  onShowMenu(): void;
  onExpandedSearchInput(): void;
  onRetractedSearchInput(): void;
  changeBackgroundColorNavigation(color: string): Promise<void>;
  onChangeCurrentScreen(screen: ICurrentScreen): void;
}

type ICurrentScreen = "Tasks" | "Trash" | "Favorit";

export const GlobalContext = createContext({} as IGlobalContextProps);

export const GlobalProvider: FC = ({ children }) => {
  const [isShowedMenu, setIsShowedMenu] = useState<boolean>(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const [isExpandedInput, setIsExpandedInput] = useState<boolean>(false);
  const [currentScreen, setCurrentScreen] = useState<ICurrentScreen>("Tasks");

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

  function onChangeCurrentScreen(screen: ICurrentScreen) {
    setCurrentScreen(screen);
  }

  async function changeBackgroundColorNavigation(color: string = "#3C3939") {
    await setBackgroundColorAsync(color);
  }

  return (
    <GlobalContext.Provider
      value={{
        isDarkMode,
        isShowedMenu,
        isExpandedInput,
        currentScreen,
        onChangeTheme,
        onHideMenu,
        onShowMenu,
        onExpandedSearchInput,
        onRetractedSearchInput,
        changeBackgroundColorNavigation,
        onChangeCurrentScreen
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