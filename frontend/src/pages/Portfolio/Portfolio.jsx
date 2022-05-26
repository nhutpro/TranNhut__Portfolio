import React, { useState } from "react";
import {
  Container,
  Box,
  List,
  ListItem,
  Typography,
  Grid,
} from "@mui/material";
import "./Portfolio.scss";
import PortfolioDetail from "../../components/portfolioDetail/PortfolioDetail";
const Portfolio = () => {
  const [showDetail, setShowDetail] = useState(false);
  const closeDetail = () => {
    setShowDetail(false);
  };
  const openDetail = () => {
    setShowDetail(true);
  };
  return (
    <Container className="Portfolio__Container">
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className="Title__Container"
      >
        <Typography component="h1">Recect Work</Typography>
      </Grid>

      <Grid container spacing={2} className="Portfolio__List">
        <Grid item sm={12} md={6} lg={4} className="Portfolio__Item">
          <Box className="Img__Box">
            <img src="https://cdn.vietnambiz.vn/2020/1/15/photo-1579088919332-157908891933486975461.jpg"></img>
          </Box>
          <Typography>Education</Typography>
          <button onClick={openDetail}>View Project</button>
        </Grid>
        <Grid item sm={12} md={6} lg={4} className="Portfolio__Item">
          <Box className="Img__Box">
            <img src="https://cdn.vietnambiz.vn/2020/1/15/photo-1579088919332-157908891933486975461.jpg"></img>
          </Box>
          <Typography>Education</Typography>
          <button>View Project</button>
        </Grid>
        <Grid item sm={12} md={6} lg={4} className="Portfolio__Item">
          <Box className="Img__Box">
            <img src="https://cdn.vietnambiz.vn/2020/1/15/photo-1579088919332-157908891933486975461.jpg"></img>
          </Box>
          <Typography>Education</Typography>
          <button>View Project</button>
        </Grid>
        <Grid item sm={12} md={6} lg={4} className="Portfolio__Item">
          <Box className="Img__Box">
            <img src="https://cdn.vietnambiz.vn/2020/1/15/photo-1579088919332-157908891933486975461.jpg"></img>
          </Box>
          <Typography>Education</Typography>
          <button>View Project</button>
        </Grid>
        <Grid item sm={12} md={6} lg={4} className="Portfolio__Item">
          <Box className="Img__Box">
            <img src="https://cdn.vietnambiz.vn/2020/1/15/photo-1579088919332-157908891933486975461.jpg"></img>
          </Box>
          <Typography>Education</Typography>
          <button>View Project</button>
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
