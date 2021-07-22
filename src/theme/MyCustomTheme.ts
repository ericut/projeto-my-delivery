import { extendTheme, ThemeConfig } from "@chakra-ui/react";

import styles from "./styles";
import colors from "./foundations/colors";
import fonts from "./foundations/fonts";
import breakpoints from "./foundations/breakpoints";

const config: ThemeConfig = {
  initialColorMode: "light",
};

const MyCustomTheme = extendTheme({
  config,
  styles,
  colors,
  fonts,
  breakpoints,
});

export default MyCustomTheme;
