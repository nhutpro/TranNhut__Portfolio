import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { useRef } from "react";
import { useEffect } from "react";

import styled from "styled-components";
import { useSelector } from "react-redux";
import "./Intro.scss";
const SpanEffect = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  span.active {
    opacity: 1;
    transform: translateY(0);
    transition: all 0.5s ease-in-out;
  }
  span.fade {
    transform: translateY(-35px);
    opacity: 0;
    transition: all 0.5s ease-in-out;
  }
`;

const Intro = () => {
  const Theme = useTheme();
  const IntroEle = useRef(null);
  const mode = useSelector((state) => state.mode.value);
  const language = useSelector((state) => state.language.value);
  useEffect(() => {
    const span = IntroEle.current.querySelectorAll("span");
    span.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add("active");
      }, (index + 1) * 300);
    });
    span.forEach((item, index) => {
      setTimeout(() => {
        item.classList.remove("active");
        item.classList.add("fade");
      }, 2400);
    });
    setTimeout(() => {
      IntroEle.current.style.top = "-100vh";
    }, 3000);
  }, []);
  return (
    <Box
      id="intro"
      ref={IntroEle}
      component="div"
      sx={{
        zIndex: 2,
        position: "fixed",
        top: 0,
        width: "100%",
        left: 0,
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `linear-gradient(to bottom right, ${Theme.palette.mainColor.backgroundImageOne}, ${Theme.palette.mainColor.backgroundImageTwo})`,
        color: Theme.palette.mainColor.main,
        transition: "all 0.5s ease-in-out",
      }}
    >
      <Box>
        <div className="Logo">
          <div className="Logo__main">
            {mode === "light" ? (
              <img src="./image/logo--light.svg" alt="logo"></img>
            ) : (
              <img src="./image/logo--dark.svg" alt="logo"></img>
            )}
          </div>

          <div className="Logo__text">
            {mode === "light" ? (
              <img src="./image/text--light.svg" alt="text"></img>
            ) : (
              <img src="./image/text--dark.svg" alt="text"></img>
            )}
          </div>
        </div>
        <SpanEffect>
          <Typography
            component={"span"}
            sx={{
              display: "inline-block",
              paddingRight: "10px",
              fontSize: "30px",
              fontWeight: 700,
              transform: "translateY(-35px)",
              opacity: 0,
            }}
          >
            {language === "VI" ? "Chào Mừng" : "Welcome"}
          </Typography>
          <Typography
            component={"span"}
            sx={{
              display: "inline-block",
              paddingRight: "10px",
              fontSize: "30px",
              fontWeight: 700,
              transform: "translateY(-35px)",
              opacity: 0,
            }}
          >
            {language === "VI" ? "Đến" : "To"}
          </Typography>
          <Typography
            component={"span"}
            sx={{
              display: "inline-block",
              paddingRight: "10px",
              fontSize: "30px",
              fontWeight: 700,
              transform: "translateY(-35px)",
              opacity: 0,
            }}
          >
            {language === "VI" ? "Xem" : "Visit"}
          </Typography>
          <Typography
            component={"span"}
            sx={{
              display: "inline-block",
              paddingRight: "10px",
              fontSize: "30px",
              fontWeight: 700,
              opacity: 0,
              transform: "translateY(-35px)",
            }}
          >
            {language === "VI" ? "Website" : "My"}
          </Typography>
          <Typography
            component={"span"}
            sx={{
              display: "inline-block",
              fontSize: "30px",
              fontWeight: 700,
              opacity: 0,
              transform: "translateY(-35px)",
            }}
          >
            {language === "VI" ? "Của Tôi" : "Portfolio"}
          </Typography>
        </SpanEffect>
      </Box>
    </Box>
  );
};

export default Intro;
