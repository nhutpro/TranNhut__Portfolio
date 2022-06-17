import React, { useState } from "react";
import "./About.scss";
import { Container, Typography, Grid, useTheme, Skeleton } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useEffect } from "react";
import axios from "axios";
import moment from "moment";
import FileDownload from "js-file-download";
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
const Div = styled.div`
  .displayNone {
    display: none !important;
  }
  .About__Tabs {
    padding: 0;
    .Tab__Item {
      font-size: inherit;
      user-select: none;
      padding: 2px 0;
      background-color: transparent;
      border: none;
      display: inline-block;
      text-transform: capitalize;
      color: ${(props) => props.Theme.palette.mainColor.textColor};
      cursor: pointer;
      font-weight: 700;
      margin-top: 20px;
      margin-right: 30px;
      position: relative;
      opacity: 0.5;
      &:last-child {
        margin-right: 0;
      }
      &::before {
        content: "";
        position: absolute;
        left: 50%;
        bottom: 0;
        width: 0%;
        height: 1px;
        background-color: ${(props) => props.Theme.palette.mainColor.textColor};
        transition: all 0.3s ease-in-out;
      }
      &:hover::before {
        width: 100%;
        left: 0;
      }
      &.active {
        opacity: 1 !important;
        color: ${(props) => props.Theme.palette.mainColor.main};
        cursor: auto;
        &::before {
          left: 0;
          background-color: ${(props) =>
            props.Theme.palette.mainColor.main} !important;
          width: 100%;
        }
      }
    }
  }
  .About__Timeline {
    padding: 0;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 1px;
      height: 100%;
      background-color: ${(props) => props.Theme.palette.mainColor.main};
    }
    .timeline__item {
      margin-top: 30px;
      padding: 0 0 0 10px;
      position: relative;
      &::before {
        content: "";
        position: absolute;
        top: 11px;
        left: -2px;
        width: 6px;
        height: 6px;
        background-color: ${(props) => props.Theme.palette.mainColor.main};
      }
      .date {
        color: ${(props) => props.Theme.palette.mainColor.main};
        margin-bottom: 5px;
        font-weight: 500;
        display: inline-block;
      }
      h4 {
        font-weight: 700;
        margin-bottom: 5px;
      }
    }
  }
`;
const About = () => {
  const language = useSelector((state) => state.language.value);
  const Theme = useTheme();
  const [tab, setTab] = useState("education");
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const handleButton = (e) => {
    setTab(e.target.value);
    console.log(e.target.value);
  };
  const handleDownload = () => {
    const getCV = async () => {
      const CV = await axios({
        url: process.env.REACT_APP_SERVER + "/download",
        method: "GET",
        responseType: "blob",
      });
      FileDownload(CV.data, "CV_TranNhut_Full-Stack.pdf");
    };
    getCV();
  };
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
      className="About__Container"
      sx={{
        backgroundColor: Theme.palette.mainColor.backgroundColor,
        border: `1px solid ${Theme.palette.mainColor.borderColor}`,
        color: Theme.palette.mainColor.textColor,
      }}
    >
      <Div Theme={Theme}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          className="Title__Container"
        >
          <Typography component="h1">
            <Skeleton variant="text" width={100} height={35}></Skeleton>
          </Typography>
        </Grid>

        <Grid container spacing={3} className="About__Main">
          <Grid item xs={12} lg={4} className="About__Img">
            <Container className="Img__Box">
              <Skeleton></Skeleton>
            </Container>
          </Grid>
          <Grid item xs={12} lg={8} className="About__Text">
            <Typography component="p" className="About__Des">
              <Skeleton></Skeleton>
            </Typography>
            <Container className="About__Skills">
              <Typography component="h2">
                <Skeleton></Skeleton>
              </Typography>
              <Skeleton varient="text" width={"100%"} height={50}></Skeleton>
            </Container>

            <Container className="About__Tabs" sx={{ padding: 0 }}>
              {/* <button
                className={
                  tab === "education" ? "Tab__Item active" : "Tab__Item"
                }
                value="education"
                onClick={handleButton}
              >
                {language === "VI" ? "Học Vấn" : "Education"}
              </button>
              <button
                className={
                  tab === "experience" ? "Tab__Item active" : "Tab__Item"
                }
                value="experience"
                onClick={handleButton}
              >
                {language === "VI" ? "Kinh Nghiệm" : "Experience"}
              </button> */}
            </Container>

            <Container
              className={
                tab === "education"
                  ? "About__Timeline"
                  : "About__Timeline displayNone"
              }
              sx={{ padding: 0 }}
            >
              <Skeleton
                variant="rectangular"
                height={300}
                width={"100%"}
              ></Skeleton>
            </Container>
            <Container
              className={
                tab === "experience"
                  ? "About__Timeline"
                  : "About__Timeline displayNone"
              }
              sx={{ padding: 0 }}
            >
              {/* {data.experience.map((item, index) => (
                <Container
                  className="timeline__item"
                  key={index}
                  sx={{ padding: 0 }}
                >
                  <Typography component="span" className="date">
                    {moment(item.start).format("YYYY")} -{" "}
                    {moment(item.end).format("YYYY")}
                  </Typography>
                  <Typography component="h4">
                    {item.position}
                    <Typography component="span">
                      {" in " + item.company}
                    </Typography>
                  </Typography>
               
                </Container>
              ))} */}
            </Container>

            <Container className="About__Btns">
              <Link to="/about">
                <Button Theme={Theme} onClick={handleDownload}>
                  <Skeleton variant="text" width={100} height={30} />
                </Button>
              </Link>
              <Link to="/contact">
                <Button Theme={Theme}>
                  <Skeleton variant="text" width={100} height={30} />
                </Button>
              </Link>
            </Container>
          </Grid>
        </Grid>
      </Div>
    </Container>
  ) : (
    <Container
      className="About__Container"
      sx={{
        backgroundColor: Theme.palette.mainColor.backgroundColor,
        border: `1px solid ${Theme.palette.mainColor.borderColor}`,
        color: Theme.palette.mainColor.textColor,
      }}
    >
      <Div Theme={Theme}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          className="Title__Container"
        >
          <Typography component="h1">
            {language === "VI" ? "Giới Thiệu" : "About"}
          </Typography>
        </Grid>

        <Grid container spacing={3} className="About__Main">
          <Grid item xs={12} lg={4} className="About__Img">
            <Container className="Img__Box">
              <img src={data.image.about} alt="personal__img"></img>
            </Container>
          </Grid>
          <Grid item xs={12} lg={8} className="About__Text">
            <Typography component="p" className="About__Des">
              {data.description}
            </Typography>
            <Container className="About__Skills">
              <Typography component="h2">
                {language === "VI" ? "Kĩ Năng" : "Skills"}
              </Typography>
              <ul>
                {data.skills.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </Container>

            <Container className="About__Tabs" sx={{ padding: 0 }}>
              <button
                className={
                  tab === "education" ? "Tab__Item active" : "Tab__Item"
                }
                value="education"
                onClick={handleButton}
              >
                {language === "VI" ? "Học Vấn" : "Education"}
              </button>
              <button
                className={
                  tab === "experience" ? "Tab__Item active" : "Tab__Item"
                }
                value="experience"
                onClick={handleButton}
              >
                {language === "VI" ? "Kinh Nghiệm" : "Experience"}
              </button>
            </Container>

            <Container
              className={
                tab === "education"
                  ? "About__Timeline"
                  : "About__Timeline displayNone"
              }
              sx={{ padding: 0 }}
            >
              {data.education.map((item, index) => (
                <Container
                  className="timeline__item"
                  key={index}
                  sx={{ padding: 0 }}
                >
                  <Typography component="span" className="date">
                    {moment(item.start).format("YYYY")} -{" "}
                    {moment(item.end).format("YYYY")}
                  </Typography>
                  <Typography component="h4">
                    {item.certificate}

                    <Typography component="span">
                      {" "}
                      {language === "VI" ? " tại " : " in "} {item.school}
                    </Typography>
                  </Typography>
                </Container>
              ))}
            </Container>
            <Container
              className={
                tab === "experience"
                  ? "About__Timeline"
                  : "About__Timeline displayNone"
              }
              sx={{ padding: 0 }}
            >
              {data.experience.map((item, index) => (
                <Container
                  className="timeline__item"
                  key={index}
                  sx={{ padding: 0 }}
                >
                  <Typography component="span" className="date">
                    {moment(item.start).format("YYYY")} -{" "}
                    {moment(item.end).format("YYYY")}
                  </Typography>
                  <Typography component="h4">
                    {item.position}
                    <Typography component="span">
                      {" in " + item.company}
                    </Typography>
                  </Typography>
                  {/* <Typography component="p">
                    I have lots of nice memory in here
                  </Typography> */}
                </Container>
              ))}
            </Container>

            <Container className="About__Btns">
              <Link to="/about">
                <Button Theme={Theme} onClick={handleDownload}>
                  {language === "VI" ? "Tải CV" : "Download CV"}
                </Button>
              </Link>
              <Link to="/contact">
                <Button Theme={Theme}>
                  {language === "VI" ? "Liên Hệ" : "Contact Me"}
                </Button>
              </Link>
            </Container>
          </Grid>
        </Grid>
      </Div>
    </Container>
  );
};

export default About;
