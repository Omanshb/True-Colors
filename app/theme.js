import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const colors = {
  dark: {
    background: "#000000",
    text: "#ffffff"
  },
  light: {
    background: "#ffffff",
    text: "#000000"
  }
};

const theme = extendTheme({
  config,
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === "dark" ? colors.dark.background : colors.light.background,
        color: props.colorMode === "dark" ? colors.dark.text : colors.light.text
      }
    })
  },
  colors
});

export default theme;