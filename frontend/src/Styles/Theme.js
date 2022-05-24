import { createTheme } from "@mui/material/styles";

const Theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: "#0971f1",

      darker: "#053e85",
    },
    neutral: {
      main: "#64748B",
    },
  },
  color: {
    glassColor: "rgba(255,255,255,0.2)",
  },
  fontSize: {
    Title: "48px",
    normal: "20px",
  },
});
export default Theme;
