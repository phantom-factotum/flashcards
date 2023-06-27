import {atom} from "jotai";
import {atomWithStorage} from "jotai/utils";

import {getTheme} from "./helpers/theme";

export const defaultMainColor = "#1491b7";

export const mainColorAtom = atomWithStorage("@appColor", defaultMainColor);
export const isDarkModeAtom = atomWithStorage("@colorScheme", false);
// no need to store this atom in storage since its value
// depends on atoms stored in storage
export const themeAtom = atom(get => {
  const mainColor = get(mainColorAtom);
  const isDarkMode = get(isDarkModeAtom);
  return getTheme(mainColor, isDarkMode);
});
