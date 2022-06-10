import { Container, Typography, useTheme } from "@mui/material";
// import homeImage from "../../../public/image/Home.png";
import React from "react";
import { Link } from "react-router-dom";
import "./Home.scss";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Skeleton from "@mui/material/Skeleton";
const Button = styled.button`
  list-style: 1.5rem;
  font-size: 20px;
  background-color: ${(props) => props.Theme.palette.mainColor.backgroundColor};
  border: 1px solid ${(props) => props.Theme.palette.mainColor.borderColor};
  border-radius: 1rem;
  padding: 0.5rem 0.5rem;
  margin-top: 1rem;
  position: relative;
  z-index: 0;
  &:first-child {
    margin-right: 10px;
  }
  &:hover {
    cursor: pointer;
  }
  &::before {
    content: "";
    position: absolute;
    background-color: ${(props) => props.Theme.palette.mainColor.main};
    width: 0%;
    height: 100%;
    border-radius: 1rem;
    left: 50%;
    top: 0;
    z-index: -1;
    transition: all 0.3s ease-in-out;
  }
  &:hover {
    color: ${(props) => props.Theme.palette.mainColor.buttonHover};
  }
  &:hover::before {
    width: 100%;
    left: 0;
  }
`;
const Home = () => {
  let language = useSelector((state) => state.language.value);
  const Theme = useTheme();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getProfile = async () => {
      try {
        setLoading(true);
        const profile = await axios.get(
          process.env.REACT_APP_SERVER + "/profile?lang=" + language
        );

        setData(profile.data);
        setLoading(false);
      } catch (err) {}
    };
    getProfile();
  }, [language]);

  return loading ? (
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
            <Skeleton />
          </Typography>
          <Typography component="h1">
            <Skeleton />
          </Typography>
          <Typography component="h2">
            <Skeleton />
          </Typography>
          <Container className="Home__btn">
            <Link to="/about">
              <Button Theme={Theme}>
                <Skeleton variant="text" width={100} height={30} />
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button Theme={Theme}>
                <Skeleton variant="text" width={100} height={30} />
              </Button>
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
            <Skeleton variant="circular" />
          </Container>
        </Container>
      </Container>
    </Container>
  ) : (
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
          <Typography component="h1">{data.name}</Typography>
          <Typography component="h2">{data.job}</Typography>
          <Container className="Home__btn">
            <Link to="/about">
              <Button Theme={Theme}>
                {language === "VI" ? "Giới Thiệu" : "About"}
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button Theme={Theme}>
                {language === "VI" ? "Dự Án" : "Portfolio"}
              </Button>
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
            <img src={data.image.home} alt="img__profile"></img>
          </Container>
        </Container>
      </Container>
    </Container>
  );
};

export default Home;
