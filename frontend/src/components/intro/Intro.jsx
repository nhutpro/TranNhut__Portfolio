import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { useRef } from "react";
import { useEffect } from "react";
import { lightTheme } from "../../Styles/Theme";
import styled from "styled-components";
const SpanEffect = styled.div`
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
      }, 2000);
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
          Welcome
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
          To
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
          See
        </Typography>
        <Typography
          component={"span"}
          sx={{
            display: "inline-block",
            fontSize: "30px",
            fontWeight: 700,
            opacity: 0,
          }}
        >
          Portfolio
        </Typography>
      </SpanEffect>
    </Box>
  );
};

export default Intro;
