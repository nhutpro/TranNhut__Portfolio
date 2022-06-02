import { React } from "react";
import { Container, Typography, Box, useTheme } from "@mui/material";

import "./PortfolioDetail.scss";
const PortfolioDetail = ({ display, closeDetail }) => {
  const Theme = useTheme();

  return (
    <Box
      className={
        display
          ? "PortfolioDetail__Container"
          : "PortfolioDetail__Container displayHide"
      }
      sx={{
        color: Theme.palette.mainColor.textColor,
        backgroundImage: `linear-gradient(to bottom right, ${Theme.palette.mainColor.backgroundImageOne}, ${Theme.palette.mainColor.backgroundImageTwo})`,
      }}
    >
      <Box className="PortfolioDetail__Main">
        <Box className="PortfolioDetail__Img">
          <img
            src="https://cdn.vietnambiz.vn/2020/1/15/photo-1579088919332-157908891933486975461.jpg"
            alt="ảnh"
          />
        </Box>
        <Box className="PortfolioDetail__Text">
          <Typography component="h2" className="Project__Name">
            Title
          </Typography>
          <Typography component="p" className="Project__Des">
            Description
          </Typography>
          <Typography component="p" className="Text--Bold">
            Create -{" "}
            <Typography component="span" className="Text--Bold">
              Time
            </Typography>
          </Typography>
          <Typography component="p" className="Text--Bold">
            Technologies Used -{" "}
            <Typography component="span" className="Text--Bold">
              Html, Css, Bootstrap 4
            </Typography>
          </Typography>
          <Typography component="p" className="Text--Bold">
            Role -
            <Typography component="span" className="Text--Bold">
              Frontend
            </Typography>
          </Typography>
          <Typography component="p" className="Text--Bold">
            View Online -
            <Typography component="span" className="Text--Normal">
              www.domain.com
            </Typography>
          </Typography>
        </Box>
        <button className="button--close" onClick={() => closeDetail()}>
          X
        </button>
      </Box>
    </Box>
  );
};
export default PortfolioDetail;
