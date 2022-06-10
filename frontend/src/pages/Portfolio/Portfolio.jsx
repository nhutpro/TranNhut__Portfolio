import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  Grid,
  useTheme,
  Skeleton,
} from "@mui/material";
import { useSelector } from "react-redux";
import styled from "styled-components";
import "./Portfolio.scss";
import PortfolioDetail from "../../components/portfolioDetail/PortfolioDetail";
import { useEffect } from "react";
import axios from "axios";
const Button = styled.button`
  list-style: 1.5rem;
  font-size: 20px;
  background-color: ${(props) => props.Theme.palette.mainColor.backgroundColor};
  border: 1px solid ${(props) => props.Theme.palette.mainColor.borderColor};
  border-radius: 1rem;
  padding: 0.5rem 1rem;

  margin-top: 1rem;
  position: relative;
  z-index: 0;
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
const Portfolio = () => {
  const [showDetail, setShowDetail] = useState(false);
  const [data, setData] = useState([]);
  const [detail, setDetail] = useState();
  const [loading, setLoading] = useState(true);
  const closeDetail = () => {
    setShowDetail(false);
  };
  const openDetail = (e) => {
    setDetail(data[e.target.value]);
    setShowDetail(true);
  };
  const Theme = useTheme();
  let language = useSelector((state) => state.language.value);
  useEffect(() => {
    const getProject = async () => {
      setLoading(true);
      const Project = await axios.get(
        process.env.REACT_APP_SERVER + "/project?lang=" + language
      );

      setData(Project.data);
      setLoading(false);
    };
    getProject();
  }, [language]);
  return loading ? (
    <Container
      className="Portfolio__Container"
      sx={{
        position: "relative",
        zIndex: 0,
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
          <Skeleton variant="text" width={100} height={35}></Skeleton>
        </Typography>
      </Grid>

      <Grid container spacing={3} className="Portfolio__List">
        <Grid item sm={12} md={6} lg={4} className="Portfolio__Item">
          <Box className="Img__Box" sx={{ width: "100%", height: "200px" }}>
            <Skeleton variant="text" width={"100%"} height={"100%"} />
          </Box>
          <Typography>
            <Skeleton></Skeleton>
          </Typography>
          <Button Theme={Theme}>
            <Skeleton variant="text" width={100} height={30} />
          </Button>
        </Grid>
        <Grid item sm={12} md={6} lg={4} className="Portfolio__Item">
          <Box className="Img__Box" sx={{ width: "100%", height: "200px" }}>
            <Skeleton variant="text" width={"100%"} height={"100%"} />
          </Box>
          <Typography>
            <Skeleton></Skeleton>
          </Typography>
          <Button Theme={Theme}>
            <Skeleton variant="text" width={100} height={30} />
          </Button>
        </Grid>
        <Grid item sm={12} md={6} lg={4} className="Portfolio__Item">
          <Box className="Img__Box" sx={{ width: "100%", height: "200px" }}>
            <Skeleton variant="text" width={"100%"} height={"100%"} />
          </Box>
          <Typography>
            <Skeleton></Skeleton>
          </Typography>
          <Button Theme={Theme}>
            <Skeleton variant="text" width={100} height={30} />
          </Button>
        </Grid>
      </Grid>
    </Container>
  ) : (
    <Container
      className="Portfolio__Container"
      sx={{
        color: Theme.palette.mainColor.textColor,
        position: "relative",
        zIndex: 0,
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
          {language === "VI" ? "Công Việc Gần Đây" : "Recent Work"}
        </Typography>
      </Grid>

      <Grid container spacing={2} className="Portfolio__List">
        {data.map((item, index) => (
          <Grid
            item
            sm={12}
            md={6}
            lg={4}
            className="Portfolio__Item"
            key={index}
          >
            <Box className="Img__Box">
              <img src={item.image} alt="project"></img>
            </Box>
            <Typography>{item.title}</Typography>
            <Button onClick={openDetail} Theme={Theme} value={index}>
              {language === "VI" ? "Xem Dự Án" : "View Project"}
            </Button>
          </Grid>
        ))}
      </Grid>
      <PortfolioDetail
        display={showDetail}
        detail={detail}
        closeDetail={closeDetail}
      ></PortfolioDetail>
    </Container>
  );
};

export default Portfolio;
