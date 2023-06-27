import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from "@react-navigation/native";
import Color from "color";
import merge from "deepmerge";
import {
  MD3DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
  useTheme as useRNPTheme,
} from "react-native-paper";
import {blend, toRGBA} from "./colors";

const CombinedDefaultTheme = merge(PaperDefaultTheme, NavigationDefaultTheme);
const CombinedDarkTheme = merge(PaperDarkTheme, NavigationDarkTheme);

export type Theme = ReturnType<typeof getTheme>;

export const getTheme = (color: string, isDarkMode: boolean) => {
  const DefaultTheme = isDarkMode ? CombinedDarkTheme : CombinedDefaultTheme;

  const lightPrimary = toRGBA(Color(color).lighten(0.5));
  const darkPrimary = toRGBA(Color(color).darken(0.5));
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: color,
      lightPrimary,
      darkPrimary,
    },
  };

  if (isDarkMode) {
    const background = blend(theme.colors.primary, "#000");
    theme.colors.background = background;
    theme.colors.text = blend(background, "#fcfafc");
  }
  return theme;
};

// export react-native-paper theme with the correct type
export const useTheme = useRNPTheme<Theme>;
