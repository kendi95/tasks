import { useTheme } from "styled-components/native";
import { createContext, FC, useEffect } from "react";
import { 
  Extrapolate, 
  interpolate, 
  useAnimatedStyle, 
  useDerivedValue, 
  useSharedValue, 
  withTiming
} from "react-native-reanimated";
import { useWindowDimensions } from "react-native";

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
  const widthSearchInput = useSharedValue(width * 0.7);
  const heightSearchInput = useSharedValue(48);

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
      [width * 0.7, width],
      [width * 0.7, width],
      Extrapolate.CLAMP
    );
  });

  const heightSearchInputStyled = useDerivedValue(() => {
    return interpolate(
      widthSearchInput.value,
      [48, 72],
      [48, 72],
      Extrapolate.CLAMP
    );
  });

  const menuAnimation = useAnimatedStyle(() => {
    return {
      width: widthMenuStyled.value,
      height: heightMenuStyled.value
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
      height: 48
    }
  });

  useEffect(() => {
    if (isExpandedInput) {
      settingButton.value = withTiming(0, {
        duration: 100
      }, () => {
        widthSearchInput.value = withTiming(width * 0.87, {
          duration: 100
        });
        heightSearchInput.value = withTiming(72, {
          duration: 100
        });
      });

    } else {
      widthSearchInput.value = withTiming(width * 0.7, {
        duration: 200
      });
      heightSearchInput.value = withTiming(48, {
        duration: 200
      }, () => {
        settingButton.value = withTiming(1, {
          duration: 200
        });
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
            duration: 300,
          });
    
          heightMenu.value = withTiming(300, {
            duration: 300,
          }, () => {
            opacity.value = withTiming(1, {
              duration: 200
            });
          });
        }
      });

      
    } else {
      opacity.value = withTiming(0, {
        duration: 50
      }, () => {
        widthMenu.value = withTiming(0, {
          duration: 200,
        });
  
        heightMenu.value = withTiming(0, {
          duration: 200,
        }, () => {
          settingIcon.value = withTiming(0, {
            duration: 200,
          });

        });

      });

    }
  }, [isShowedMenu])

  return (
    <AnimationContext.Provider
      value={{
        menuAnimation,
        opacityAnimation,
        rotateIconAnimation,
        settingButtonAnimation,
        searchInputAnimation
      }}
    >
      { children }
    </AnimationContext.Provider>
  );

}