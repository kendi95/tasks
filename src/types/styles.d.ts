import "styled-components";
import theme from '../styles/global';

declare module "styled-components" {
  type ThemeType = typeof theme;
  export interface DefaultTheme extends ThemeType {
    
  }
}