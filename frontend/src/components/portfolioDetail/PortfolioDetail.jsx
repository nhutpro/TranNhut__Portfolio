import { React } from "react";
import { Container, Typography, Box, useTheme } from "@mui/material";
import { useSelector } from "react-redux";
import moment from "moment";
import styled from "styled-components";
import "./PortfolioDetail.scss";
const Button = styled.button`
  background-color: ${(props) => props.Theme.palette.mainColor.backgroundColor};
  border: 1px solid ${(props) => props.Theme.palette.mainColor.backgroundColor};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  position: absolute;
  top: -15px;
  right: -10px;
  color: ${(props) => props.Theme.palette.mainColor.mainColor};
`;

const PortfolioDetail = ({ display, closeDetail, detail }) => {
  const Theme = useTheme();
  // const language = useSelector((state) => state.language.value);
  return !detail ? (
    <></>
  ) : (
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
          <img src={detail.image} alt="ảnh" />
        </Box>
        <Box className="PortfolioDetail__Text">
          <Typography component="h2" className="Project__Name">
            {detail.title}
          </Typography>
          <Typography component="p" className="Project__Des">
            {detail.description}
          </Typography>
          <Typography component="p" className="Text--Bold">
            Create -{" "}
            <Typography component="span" className="Text--Bold">
              Time {moment(detail.time).format("DD/MM/YYYY")}
            </Typography>
          </Typography>
          <Typography component="p" className="Text--Bold">
            Technologies Used -{" "}
            <Typography component="span" className="Text--Bold">
              {detail.technology}
            </Typography>
          </Typography>
          <Typography component="p" className="Text--Bold">
            Role -
            <Typography component="span" className="Text--Bold">
              {detail.role}
            </Typography>
          </Typography>
          <Typography component="p" className="Text--Bold">
            View Online -
            <Typography
              component="a"
              href={detail.website}
              target="_blank"
              className="Text--Normal"
            >
              {detail.website}
            </Typography>
          </Typography>
        </Box>
        <Button
          Theme={Theme}
          className="button--close"
          onClick={() => closeDetail()}
        >
          X
        </Button>
      </Box>
    </Box>
  );
};
export default PortfolioDetail;
