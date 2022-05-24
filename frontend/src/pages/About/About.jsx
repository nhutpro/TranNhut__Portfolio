import React from "react";
import "./About.scss";
import { Container, Typography, Grid } from "@mui/material";
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
          <Typography component="p">
            I'm interested in Full-Stack Developer
          </Typography>
          <Typography component="h2">Skills</Typography>
          <ul>
            <li>Html</li>
            <li>Css</li>
            <li>Javascript</li>
          </ul>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
