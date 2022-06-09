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
        <Typography component="h1">
          {language === "VI" ? "Cài Đặt" : "Setting"}
        </Typography>
      </Grid>
      <Box className="Setting__Main">
        <Box>
          <Box sx={{ textAlign: "start" }}>
            <Typography
              component="span"
              className="Title__Mode"
              sx={{
                color: Theme.palette.mainColor.textColor,
                marginRight: language === "VI" ? "48px" : "58px",
              }}
            >
              {language === "VI" ? "Chế Độ" : "Mode"}
            </Typography>
            <ToggleButtonGroup
              color="primary"
              value={mode}
              exclusive
              onChange={handleMode}
              label="Language"
            >
              <ToggleButton value="light">
                {language === "VI" ? "Sáng" : "Light"}
              </ToggleButton>
              <ToggleButton value="dark">
                {language === "VI" ? "Tối" : "Dark"}
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>
          <Box sx={{ textAlign: "start", marginTop: "20px" }}>
            <Typography component="span" className="Title__Lang">
              {language === "VI" ? "Ngôn Ngữ" : "Language"}
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
