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
    },
  },
});
const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#424242",
    },
    mainColor: {
      main: "#424242",
      backgroundImageOne: "#212121",
      backgroundImageTwo: "#fafafa",
      backgroundColor: "rgba(255, 255, 255, 0.25)",
      borderColor: "rgba(255, 255, 255, 0.4)",
      titleColor: "#eeeeee",
      textColor: "#f5f5f5",
    },
  },
});
export { lightTheme, darkTheme };
