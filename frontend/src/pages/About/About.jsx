import React from "react";
import "./About.scss";
import { Container, Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <Container className="About__Container">
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
            <Container className="Home__btn">
              <Link to="/about">
                <button>Download CV</button>
              </Link>
              <Link to="/portfolio">
                <button>Contact Me</button>
              </Link>
            </Container>
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
