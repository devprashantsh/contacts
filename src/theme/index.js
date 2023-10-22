import { extendTheme } from "@chakra-ui/react";

// Define your custom colors
const customColors = {
  greenShade2: "#9effa6",
  greenShade1: "#79AC78",
  greenShade3: "#B0D9B1",
  greenShade4: "#D0E7D2",
  greenShade5: "#618264",
};

export const theme = extendTheme({
  colors: {
    brand: {
      100: customColors.greenShade1,
      200: customColors.greenShade2,
      300: customColors.greenShade3,
      400: customColors.greenShade4,
      500: customColors.greenShade5,
    },
  },
  fonts: {
    heading: `monospace, sans-serif`,
    body: `monospace, sans-serif`,
  },
});
