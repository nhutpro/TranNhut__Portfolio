import { Container, Typography, useTheme } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./Home.scss";
import styled from "styled-components";
import { useSelector } from "react-redux";
const Home = () => {
  const Theme = useTheme();
  const Button = styled.button`
    list-style: 1.5rem;
    font-size: 20px;
    background-color: ${Theme.palette.mainColor.backgroundColor};
    border: 1px solid ${Theme.palette.mainColor.borderColor};
    border-radius: 1rem;
    padding: 0.5rem 1rem;
    margin-left: 1rem;
    margin-top: 1rem;
    position: relative;
    z-index: 0;
    &:hover {
      cursor: pointer;
    }
    &::before {
      content: "";
      position: absolute;
      background-color: ${Theme.palette.mainColor.main};
      width: 0%;
      height: 100%;
      border-radius: 1rem;
      left: 50%;
      top: 0;
      z-index: -1;
      transition: all 0.3s ease-in-out;
    }
    &:hover {
      color: ${Theme.palette.mainColor.buttonHover};
    }
    &:hover::before {
      width: 100%;
      left: 0;
    }
  `;
  let language = useSelector((state) => state.language.value);
  return (
    <Container
      className="Home__container"
      sx={{
        backgroundColor: Theme.palette.mainColor.backgroundColor,
        border: `1px solid ${Theme.palette.mainColor.borderColor}`,
      }}
    >
      <Container className="Home__main">
        <Container
          className="Home__text"
          sx={{ color: Theme.palette.mainColor.textColor }}
        >
          <Typography component="p">
            {language === "VI" ? "Xin Chào, Tôi Là" : "Hello, I'm"}
          </Typography>
          <Typography component="h1">
            {language === "VI" ? "Trần Nhựt" : "Tran Nhut"}
          </Typography>
          <Typography component="h2">Full-Stack Developer</Typography>
          <Container className="Home__btn">
            <Link to="/about">
              {/* <button
                className="btn"
                style={{
                  backgroundColor: Theme.palette.mainColor.backgroundColor,
                  border: `1px solid ${Theme.palette.mainColor.borderColor}`,
                  color: Theme.palette.mainColor.main,
                }}
              >
                More About Me
              </button> */}
              <Button>About Me</Button>
            </Link>
            <Link to="/portfolio">
              {/* <button
                style={{
                  backgroundColor: Theme.palette.mainColor.backgroundColor,
                  border: `1px solid ${Theme.palette.mainColor.borderColor}`,
                  color: Theme.palette.mainColor.main,
                }}
              >
                Portfolio
              </button> */}
              <Button>Portfolio</Button>
            </Link>
          </Container>
        </Container>
        <Container className="Home__img">
          <Container
            className="img__box"
            sx={{
              backgroundColor: Theme.palette.mainColor.backgroundColor,
              border: `1px solid ${Theme.palette.mainColor.borderColor}`,
            }}
          >
            <img
              src="https://cdn.pixabay.com/photo/2016/10/25/18/57/animal-1769728_960_720.png"
              alt="img__profile"
            ></img>
          </Container>
        </Container>
      </Container>
    </Container>
  );
};

export default Home;
