import { React } from "react";
import { Typography, Box, useTheme } from "@mui/material";
import { useSelector } from "react-redux";
import moment from "moment";
import styled from "styled-components";
import "./PortfolioDetail.scss";
import { useRef } from "react";
const Button = styled.button`
  background-color: ${(props) => props.Theme.palette.mainColor.backgroundColor};
  border: 1px solid ${(props) => props.Theme.palette.mainColor.backgroundColor};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  position: absolute;
  top: -15px;
  right: -10px;
  color: ${(props) => props.Theme.palette.mainColor.main};
  transform: all 0.5s ease;
  span {
    transition: all 0.5s ease;
    font-size: 20px;
    font-weight: 400;
  }
  &:hover {
    transform: scale(105%);
    span {
      font-size: 20px;
      font-weight: 700;
      cursor: pointer;
    }
  }
`;

const PortfolioDetail = ({ display, closeDetail, detail }) => {
  const Theme = useTheme();
  const language = useSelector((state) => state.language.value);
  const portfolioEle = useRef(null);
  const handleClick = (e) => {
    if (portfolioEle.current && !portfolioEle.current.contains(e.target)) {
      closeDetail();
    }
  };
  return !detail ? (
    <></>
  ) : (
    <Box
      onClick={handleClick}
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
      <Box className="PortfolioDetail__Main" ref={portfolioEle}>
        <Box className="PortfolioDetail__Img">
          <img src={detail.image} alt="ảnh" />
        </Box>
        <Box className="PortfolioDetail__Text">
          <Typography component="p" className="Project__Des">
            {detail.description}
          </Typography>
          <Typography component="p" className="Text--Bold">
            {language === "VI" ? "Thời Gian Tạo: " : "Create-Time: "}
            <Typography component="span" className="Text--Normal">
              {moment(detail.time).format("DD/MM/YYYY")}
            </Typography>
          </Typography>
          <Typography component="p" className="Text--Bold">
            {language === "VI" ? "Công Nghệ Sử Dụng: " : "Technologies: "}
            <Typography component="span" className="Text--Normal">
              {detail.technology}
            </Typography>
          </Typography>
          <Typography component="p" className="Text--Bold">
            {language === "VI" ? "Vai Trò: " : "Role: "}
            <Typography component="span" className="Text--Normal">
              {detail.role}
            </Typography>
          </Typography>
          <Typography component="p" className="Text--Bold">
            {language === "VI" ? "Xem Website: " : "Visit Website: "}
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
          <span>X</span>
        </Button>
      </Box>
    </Box>
  );
};
export default PortfolioDetail;
