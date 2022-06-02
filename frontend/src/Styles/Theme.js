import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    primary: {
      main: "#e02f6b",
    },
    mainColor: {
      main: "#e02f6b",
      backgroundImageOne: "#cfa2b4",
      backgroundImageTwo: "#aef1ee",
      backgroundColor: "rgba(255, 255, 255, 0.25)",
      borderColor: "rgba(255, 255, 255, 0.4)",
      titleColor: "#8a2435",
      textColor: "#18293c",
      buttonHover: "#ffffff",
    },
  },
});
const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#eeeeee",
    },
    mainColor: {
      main: "#eeeeee",
      backgroundImageOne: "#212121",
      backgroundImageTwo: "#616161",
      backgroundColor: "rgba(255, 255, 255, 0.4)",
      borderColor: "rgba(255, 255, 255, 0.6)",
      titleColor: "#eeeeee",
      textColor: "#f5f5f5",
      buttonHover: "#212121",
    },
  },
});
export { lightTheme, darkTheme };
