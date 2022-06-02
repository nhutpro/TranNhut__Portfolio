import React from "react";
import "./About.scss";
import { Container, Typography, Grid, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";
const About = () => {
  const languageValue = useSelector((state) => state);
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
  return (
    <Container
      className="About__Container"
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
        <Typography component="h1">About</Typography>
      </Grid>

      <Grid container spacing={3} className="About__Main">
        <Grid item xs={12} lg={4} className="About__Img">
          <Container className="Img__Box">
            <img
              src="https://cdn.pixabay.com/photo/2016/10/25/18/57/animal-1769728_960_720.png"
              alt="personal__img"
            ></img>
          </Container>
        </Grid>
        <Grid item xs={12} lg={8} className="About__Text">
          <Typography component="p" className="About__Des">
            I'm interested in Full-Stack Developer
          </Typography>
          <Container className="About__Skills">
            <Typography component="h2">Skills</Typography>
            <ul>
              <li>Html</li>
              <li>Css</li>
              <li>Javascript</li>
            </ul>
          </Container>

          <Container className="About__Tabs" sx={{ padding: 0 }}>
            <button className="Tab__Item active">education</button>
            <button className="Tab__Item">experience</button>
          </Container>
          <Container className="About__Timeline" sx={{ padding: 0 }}>
            <Container className="timeline__item" sx={{ padding: 0 }}>
              <Typography component="span" className="date">
                2019-2022
              </Typography>
              <Typography component="h4">
                bachlor of technology{" "}
                <Typography component="span">
                  University of Information Technology
                </Typography>
              </Typography>
              <Typography component="p">
                I have lots of nice memory in here
              </Typography>
            </Container>
            <Container className="timeline__item" sx={{ padding: 0 }}>
              <Typography component="span" className="date">
                2019-2022
              </Typography>
              <Typography component="h4">
                bachelor of technology{" "}
                <Typography component="span">
                  University of Information Technology
                </Typography>
              </Typography>
              <Typography component="p">
                I have lots of nice memory in here
              </Typography>
            </Container>
            <Container className="timeline__item" sx={{ padding: 0 }}>
              <Typography component="span" className="date">
                2019-2022
              </Typography>
              <Typography component="h4">
                bachlor of technology{" "}
                <Typography component="span">
                  University of Information Technology
                </Typography>
              </Typography>
              <Typography component="p">
                I have lots of nice memory in here
              </Typography>
            </Container>
          </Container>
          <Container className="About__Btns">
            <Link to="/about">
              <Button>Download CV</Button>
            </Link>
            <Link to="/portfolio">
              <Button>Contact Me</Button>
            </Link>
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
