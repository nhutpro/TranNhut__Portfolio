import { Container, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./Home.scss";
const Home = () => {
  return (
    <Container className="Home__container">
      <Container className="Home__main">
        <Container className="Home__text">
          <Typography component="p">Hello, I'm</Typography>
          <Typography component="h1">Tran Nhut</Typography>
          <Typography component="h2">Full-Stack Developer</Typography>
          <Container className="Home__btn">
            <Link to="/about">
              <button>More About Me</button>
            </Link>
            <Link to="/portfolio">
              <button>Portfolio</button>
            </Link>
          </Container>
        </Container>
        <Container className="Home__img">
          <Container className="img__box">
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
