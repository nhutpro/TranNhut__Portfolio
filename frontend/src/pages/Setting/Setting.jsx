import React, { useState } from "react";
import { Container, Grid, Typography, Box, useTheme } from "@mui/material";

import { useSelector, useDispatch } from "react-redux";

import { setModeValue } from "../../redux/mode";
import { setLanguageValue } from "../../redux/language";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import "./Setting.scss";
const Setting = () => {
  const currentMode = useSelector((state) => state.mode.value);
  const currentLang = useSelector((state) => state.language.value);
  const dispatch = useDispatch();

  const [mode, setMode] = useState(currentMode);
  const [language, setLanguage] = useState(currentLang);
  const handleLang = (e) => {
    setLanguage(e.target.value);
    dispatch(setLanguageValue(e.target.value));
  };
  const handleMode = (e) => {
    setMode(e.target.value);
    dispatch(setModeValue(e.target.value));
  };
  const Theme = useTheme();
  console.log(Theme.palette.mainColor);
  return (
    <Container
      className="Setting__Container"
      sx={{
        backgroundColor: Theme.palette.mainColor.backgroundColor,
        border: `1px solid ${Theme.palette.mainColor.borderColor}`,
        color: Theme.palette.mainColor.textColor,
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className="Title__Container"
      >
        <Typography component="h1">Setting</Typography>
      </Grid>
      <Box className="Setting__Main">
        <Box>
          <Box sx={{ textAlign: "start" }}>
            <Typography
              component="span"
              className="Title__Mode"
              sx={{ color: Theme.palette.mainColor.textColor }}
            >
              Mode
            </Typography>
            <ToggleButtonGroup
              color="primary"
              value={mode}
              exclusive
              onChange={handleMode}
              label="Language"
            >
              <ToggleButton value="light">Light</ToggleButton>
              <ToggleButton value="dark">Dark</ToggleButton>
            </ToggleButtonGroup>
          </Box>
          <Box sx={{ textAlign: "start", marginTop: "20px" }}>
            <Typography component="span" className="Title__Lang">
              Language
            </Typography>
            <ToggleButtonGroup
              color="primary"
              value={language}
              exclusive
              onChange={handleLang}
              label="Language"
            >
              <ToggleButton value="EN">EN</ToggleButton>
              <ToggleButton value="VI">VI</ToggleButton>
            </ToggleButtonGroup>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Setting;
