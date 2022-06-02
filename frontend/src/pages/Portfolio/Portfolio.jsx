import React, { useState } from "react";
import {
  Container,
  Box,
  List,
  ListItem,
  Typography,
  Grid,
  useTheme,
} from "@mui/material";
import styled from "styled-components";
import "./Portfolio.scss";
import PortfolioDetail from "../../components/portfolioDetail/PortfolioDetail";
const Button = styled.button`
  list-style: 1.5rem;
  font-size: 20px;
  background-color: ${(props) => props.Theme.palette.mainColor.backgroundColor};
  border: 1px solid ${(props) => props.Theme.palette.mainColor.borderColor};
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
  const closeDetail = () => {
    setShowDetail(false);
  };
  const openDetail = () => {
    setShowDetail(true);
  };
  const Theme = useTheme();

  return (
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
        <Typography component="h1">Recent Work</Typography>
      </Grid>

      <Grid container spacing={2} className="Portfolio__List">
        <Grid item sm={12} md={6} lg={4} className="Portfolio__Item">
          <Box className="Img__Box">
            <img src="https://cdn.vietnambiz.vn/2020/1/15/photo-1579088919332-157908891933486975461.jpg"></img>
          </Box>
          <Typography>Education</Typography>
          <Button onClick={openDetail} Theme={Theme}>
            View Project
          </Button>
        </Grid>
      </Grid>
      <PortfolioDetail
        display={showDetail}
        closeDetail={closeDetail}
      ></PortfolioDetail>
    </Container>
  );
};

export default Portfolio;
