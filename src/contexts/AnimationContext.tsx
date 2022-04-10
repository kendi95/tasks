import { useTheme } from "styled-components/native";
import { createContext, FC, useEffect } from "react";
import { 
  Extrapolate, 
  interpolate, 
  useAnimatedStyle, 
  useDerivedValue, 
  useSharedValue, 
  withTiming,
  runOnJS
} from "react-native-reanimated";
import { useWindowDimensions, Keyboard } from "react-native";

import { useGlobal } from "../hooks/useGlobal";

interface AnimationContextProps {
  menuAnimation: {
    width: number;
    height: number;
  };
  opacityAnimation: {
    opacity: number;
  };
  rotateIconAnimation: {
    transform: {
      rotate: string;
    }[]
  };
  settingButtonAnimation: {
    opacity: number;
  };
  searchInputAnimation: {
    width: number;
    height: number;
  };
  mainFooterAnimation: {
    bottom: number;
  };
  mainTasksAnimation: {
    opacity: number;
  };
  onHideMainFooter(callback?: () => void): void;
  onShowMainFooter(duration?: number, callback?: () => void): void;
}

export const AnimationContext = createContext({} as AnimationContextProps);

export const AnimationProvider: FC = ({ children }) => {
  const { isShowedMenu, isExpandedInput } = useGlobal();
  const { colors } = useTheme();
  const { width } = useWindowDimensions();

  const widthMenu = useSharedValue(0);
  const heightMenu = useSharedValue(0);
  const opacity = useSharedValue(0);
  const settingIcon = useSharedValue(0);
  const settingButton = useSharedValue(1);
  const widthSearchInput = useSharedValue(width * 0.74);
  const bottomMainFooter = useSharedValue(0);
  const opacityMainTasks = useSharedValue(1);
  const borderRadiusSearchInput = useSharedValue(12);

  const borderRadiusSearchStyled = useDerivedValue(() => {
    return interpolate(
      borderRadiusSearchInput.value,
      [12, 24],
      [12, 24],
      Extrapolate.CLAMP
    );
  });

  const bottomMainFooterStyled = useDerivedValue(() => {
    return interpolate(
      bottomMainFooter.value,
      [0, -72],
      [0, -72],
      Extrapolate.CLAMP
    );
  });

  const opacityMainTasksStyled = useDerivedValue(() => {
    return interpolate(
      opacityMainTasks.value,
      [1, 0.1],
      [1, 0.1],
      Extrapolate.CLAMP
    );
  });

  const widthMenuStyled = useDerivedValue(() => {
    return interpolate(
      widthMenu.value,
      [0, 200],
      [0, 200],
      Extrapolate.CLAMP
    );
  });

  const heightMenuStyled = useDerivedValue(() => {
    return interpolate(
      heightMenu.value,
      [0, 300],
      [0, 300],
      Extrapolate.CLAMP
    );
  });

  const opacityMenuStyled = useDerivedValue(() => {
    return interpolate(
      opacity.value,
      [0, 1],
      [0, 1],
      Extrapolate.CLAMP
    );
  });

  const rotateIconStyled = useDerivedValue(() => {
    return interpolate(
      settingIcon.value,
      [0, 180],
      [0, 180],
      Extrapolate.CLAMP
    );
  });

  const opacitySettingButtonStyled = useDerivedValue(() => {
    return interpolate(
      settingButton.value,
      [1, 0],
      [1, 0],
      Extrapolate.CLAMP
    );
  });

  const widthSearchInputStyled = useDerivedValue(() => {
    return interpolate(
      widthSearchInput.value,
      [width * 0.74, width],
      [width * 0.74, width],
      Extrapolate.CLAMP
    );
  });

  const mainTasksAnimation = useAnimatedStyle(() => {
    return {
      opacity: opacityMainTasksStyled.value
    }
  });

  const mainFooterAnimation = useAnimatedStyle(() => {
    return {
      bottom: bottomMainFooterStyled.value
    }
  });

  const menuAnimation = useAnimatedStyle(() => {
    return {
      width: widthMenuStyled.value,
      height: heightMenuStyled.value,
    }
  });

  const opacityAnimation = useAnimatedStyle(() => {
    return {
      opacity: opacityMenuStyled.value
    }
  });

  const rotateIconAnimation = useAnimatedStyle(() => {
    return {
      transform: [
        { rotate: `${rotateIconStyled.value}deg` }
      ]
    }
  });

  const settingButtonAnimation = useAnimatedStyle(() => {
    return {
      opacity: opacitySettingButtonStyled.value,
      backgroundColor: isExpandedInput 
        ? "transparent"
        : colors.secundary
    }
  });

  const searchInputAnimation = useAnimatedStyle(() => {
    return {
      width: widthSearchInputStyled.value,
      height: 48,
      borderRadius: borderRadiusSearchStyled.value
    }
  });runOnJS

  function onHideMainFooter(callback?: () => void) {
    bottomMainFooter.value = withTiming(-72, {
      duration: 400
    }, (finished) => {
      if (callback && finished) {
        runOnJS(callback)();
      }
    });

  }

  function onShowMainFooter(duration: number = 600, callback?: () => void) {
    bottomMainFooter.value = withTiming(0, {
      duration: duration
    }, (finished) => {
      if (callback && finished) {
        runOnJS(callback)();
      }
    });
  }

  useEffect(() => {
    if (isExpandedInput) {
      settingButton.value = withTiming(0, {
        duration: 50
      }, () => {
        widthSearchInput.value = withTiming(width * 0.92, {
          duration: 100
        });

        borderRadiusSearchInput.value = withTiming(24, {
          duration: 200
        });
      });
    } else {
      widthSearchInput.value = withTiming(width * 0.7, {
        duration: 160
      }, () => {
        settingButton.value = withTiming(1, {
          duration: 200
        });
      });

      borderRadiusSearchInput.value = withTiming(12, {
        duration: 200
      });
    }
  }, [isExpandedInput]);

  useEffect(() => {
    if (isShowedMenu) {
      settingIcon.value = withTiming(180, {
        duration: 200
      }, (finished) => {
        if (finished) {
          widthMenu.value = withTiming(200, {
            duration: 260,
          });
    
          heightMenu.value = withTiming(300, {
            duration: 260,
          }, () => {
            opacity.value = withTiming(1, {
              duration: 200
            });
          });

          opacityMainTasks.value = withTiming(0.4, {
            duration: 50
          });
        }
      });
      
    } else {
      
      opacity.value = withTiming(0, {
        duration: 50
      }, () => {
        widthMenu.value = withTiming(0, {
          duration: 260,
        });
  
        heightMenu.value = withTiming(0, {
          duration: 260,
        }, () => {
          settingIcon.value = withTiming(0, {
            duration: 200,
          });
        });

        opacityMainTasks.value = withTiming(1, {
          duration: 50
        });
      });

    }
  }, [isShowedMenu])

  Keyboard.addListener("keyboardDidHide", () => {
    Keyboard.dismiss();
    onShowMainFooter();
  });

  Keyboard.addListener("keyboardDidShow", () => {
    onHideMainFooter();
  });

  return (
    <AnimationContext.Provider
      value={{
        menuAnimation,
        opacityAnimation,
        rotateIconAnimation,
        settingButtonAnimation,
        searchInputAnimation,
        mainFooterAnimation,
        mainTasksAnimation,
        onHideMainFooter,
        onShowMainFooter
      }}
    >
      { children }
    </AnimationContext.Provider>
  );

}