import logo from "./logo.svg";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./pages/Home/Home";
import Portfolio from "./pages/Portfolio/Portfolio";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import PortfolioDetail from "./components/portfolioDetail/PortfolioDetail";
import Setting from "./pages/Setting/Setting";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "../src/Styles/Theme";
import { Typography, Box } from "@mui/material";

import { useSelector } from "react-redux";

function App() {
  const mode = useSelector((state) => state.mode.value);
  console.log(mode);
  const Theme = mode === "light" ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={Theme}>
      <Box
        className="App"
        sx={{
          backgroundImage: `linear-gradient(to bottom right, ${Theme.palette.mainColor.backgroundImageOne}, ${Theme.palette.mainColor.backgroundImageTwo})`,
          position: "relative",
        }}
      >
        <Box className="App__Main">
          <Header></Header>

          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/portfolio" element={<Portfolio></Portfolio>}></Route>
            <Route path="/about" element={<About></About>}></Route>
            <Route path="/contact" element={<Contact></Contact>}></Route>
            <Route
              path="/detail"
              element={<PortfolioDetail></PortfolioDetail>}
            ></Route>
            <Route path="/setting" element={<Setting></Setting>}></Route>
          </Routes>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
