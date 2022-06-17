import React, { useEffect, useRef, useState } from "react";

import {
  Container,
  List,
  Typography,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactsIcon from "@mui/icons-material/Contacts";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import SettingsIcon from "@mui/icons-material/Settings";
import { Link } from "react-router-dom";
import { Box, useTheme } from "@mui/material";
import "./Header.scss";
import { useSelector, useDispatch } from "react-redux";
import { setLanguageValue } from "../../redux/language";
import styled from "styled-components";
import { set } from "mongoose";
const HeaderItem = styled.p`
  font-size: 20px;
  margin-left: 2rem;
  border-radius: 1rem;
  padding: 0.5rem 1rem;
  color: ${(props) => props.Theme.palette.mainColor.titleColor};
  position: relative;

  &::after {
    content: "";
    background-color: ${(props) => props.Theme.palette.mainColor.titleColor};
    height: 1px;
    width: 0%;
    position: absolute;
    bottom: 0;
    left: 50%;
    transition: all 0.3s ease-in-out;
  }
  &:hover::after {
    left: 0;
    width: 100%;
  }
`;
const Div = styled.div`
  .Menu__Main {
    border: 1px solid ${(props) => props.Theme.palette.mainColor.borderColor};
    border-radius: 20px;
    padding: 20px;
    position: absolute;
    right: 8px;
    top: 48px;
    width: 200px;
    &::after {
      right: 12px;
      top: -8px;
      content: "";
      position: absolute;
      border-left: 4px solid transparent;
      border-right: 4px solid transparent;
      border-bottom: 10px solid ${(props) => props.Theme.palette.mainColor.main};
      border-radius: 1px;
      z-index: -1;
      transform: rotate(16deg);
    }
    .Menu__Item {
      display: flex;
      margin-top: 10px;
      align-items: center;
      justify-content: flex-start;
      .Item__Icon {
        width: 40px;
        height: 40px;
        background-color: ${(props) =>
          props.Theme.palette.mainColor.backgroundColor};
        border: 1px solid
          ${(props) => props.Theme.palette.mainColor.borderColor};
        border-radius: 50%;
        display: inline-flex;
        justify-content: center;
        align-items: center;
      }
      .Item__Text {
        font-size: $fontSizeMedium;
        margin-left: 20px;
      }
    }
  }
`;
const MenuIcon = styled.div`
  width: 25px;
  height: 4px;
  background: ${(props) => props.Theme.palette.mainColor.main};
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(255, 101, 47, 0.2);
  transition: all 0.5s ease-in-out;
  position: relative;
  &::after,
  &::before {
    content: "";
    position: absolute;
    width: 26px;
    height: 4px;
    background: ${(props) => props.Theme.palette.mainColor.main};
    border-radius: 5px;
    /* box-shadow: 0 2px 5px rgba(255, 101, 47, 0.2); */
    transition: all 0.2s ease-in-out;
    left: 0;
  }
  &::after {
    transform: translateY(8px);
  }
  &::before {
    transform: translateY(-8px);
  }
  &.open {
    transform: translateX(-50px);
    background: transparent;
    box-shadow: none;
  }
  &.open::after {
    transform: rotate(-45deg) translate(35px, 35px);
  }
  &.open::before {
    transform: rotate(45deg) translate(35px, -35px);
  }
`;
const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 1s ease-in-out;
  a {
    display: flex;
    justify-content: center;
    text-align: center;
  }
  img {
    width: 50px;
    height: 50px;
  }
  &:hover {
    cursor: pointer;
    transform: rotate(360deg);
  }
`;
const Header = () => {
  const language = useSelector((state) => state.language.value);
  const [open, setOpen] = useState(false);
  const mode = useSelector((state) => state.mode.value);
  const menuELe = useRef(null);
  const dispatch = useDispatch();

  const closeButton = useRef(null);
  const showMenu = () => {
    // setOpen((prev) => {
    //   if (!prev) {
    //     closeButton.current.classList.add("open");
    //   } else {
    //     closeButton.current.classList.remove("open");
    //   }
    //   return !prev;
    // });
    setOpen((prev) => !prev);
  };
  const closeMenu = () => {
    setOpen(false);
  };
  const handleLang = (e) => {
    // setLanguage(e.target.value);
    dispatch(setLanguageValue(e.target.value));
  };
  const Theme = useTheme();

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuELe.current && !menuELe.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuELe]);

  return (
    <Box>
      <Container
        className="Header__Container"
        sx={{
          backgroundColor: Theme.palette.mainColor.backgroundColor,
          border: `1px solid ${Theme.palette.mainColor.borderColor}`,
          color: Theme.palette.mainColor.titleColor,
        }}
      >
        {/* <Typography
          component="h2"
          className="Header__logo"
          sx={{
            lineHeight: "3.5rem",
            fontWeight: 600,
          }}
        >
          <img src="./image/logo1.svg"></img>
        </Typography> */}
        <Logo
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link to="/">
            <img
              src={
                mode === "light"
                  ? "./image/logo--light.svg"
                  : "./image/logo--dark.svg"
              }
            ></img>
          </Link>
        </Logo>
        <List
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Link to="/">
            <HeaderItem Theme={Theme}>
              {language === "VI" ? "Trang Chủ" : "Home"}
            </HeaderItem>
          </Link>
          <Link to="/about">
            <HeaderItem Theme={Theme}>
              {language === "VI" ? "Giới Thiệu" : "About"}
            </HeaderItem>
          </Link>
          <Link to="/portfolio">
            <HeaderItem Theme={Theme}>
              {language === "VI" ? "Dự Án" : "Project"}
            </HeaderItem>
          </Link>
          <Link to="/contact">
            <HeaderItem Theme={Theme}>
              {language === "VI" ? "Liên Hệ" : "Contact"}
            </HeaderItem>
          </Link>
          <Link to="/setting">
            <HeaderItem Theme={Theme}>
              {language === "VI" ? "Cài Đặt" : "Setting"}
            </HeaderItem>
          </Link>
        </List>
      </Container>
      <Box className="Setting__Language">
        <ToggleButtonGroup
          color="primary"
          value={language}
          exclusive
          onChange={handleLang}
          label="Language"
          sx={{ height: "30px" }}
        >
          <ToggleButton value="EN">EN</ToggleButton>
          <ToggleButton value="VI">VI</ToggleButton>
        </ToggleButtonGroup>
      </Box>
      <Box
        className="Menu__Container"
        ref={menuELe}
        sx={{ color: Theme.palette.mainColor.main }}
      >
        <Box className="Menu__Icon" onClick={showMenu}>
          <MenuIcon Theme={Theme} className={open ? "open" : ""}></MenuIcon>
        </Box>
        <Div Theme={Theme}>
          <Box
            className={open ? "Menu__Main" : "Menu__Main displayHide"}
            sx={{
              backgroundImage: `linear-gradient(to bottom right, ${Theme.palette.mainColor.backgroundImageOne}, ${Theme.palette.mainColor.backgroundImageTwo})`,
              border: `1px solid ${Theme.palette.mainColor.borderColor}`,
            }}
          >
            <Link
              to="/"
              onClick={() => {
                setOpen(false);
              }}
            >
              <Box className="Menu__Item">
                <Box className="Item__Icon">
                  <HomeIcon></HomeIcon>
                </Box>
                <Typography className="Item__Text">
                  {language === "VI" ? "Trang Chủ" : "Home"}
                </Typography>
              </Box>
            </Link>

            <Link
              to="/about"
              onClick={() => {
                setOpen(false);
              }}
            >
              <Box className="Menu__Item">
                <Box className="Item__Icon">
                  <InfoIcon></InfoIcon>
                </Box>
                <Typography className="Item__Text">
                  {language === "VI" ? "Giới Thiệu" : "About"}
                </Typography>
              </Box>
            </Link>
            <Link
              to="/portfolio"
              onClick={() => {
                setOpen(false);
              }}
            >
              <Box className="Menu__Item">
                <Box className="Item__Icon">
                  <AccountTreeIcon></AccountTreeIcon>
                </Box>
                <Typography className="Item__Text">
                  {language === "VI" ? "Dự Án" : "Project"}
                </Typography>
              </Box>
            </Link>
            <Link
              to="/contact"
              onClick={() => {
                setOpen(false);
              }}
            >
              <Box className="Menu__Item">
                <Box className="Item__Icon">
                  <ContactsIcon></ContactsIcon>
                </Box>
                <Typography className="Item__Text">
                  {language === "VI" ? "Liên Hệ" : "Contact"}
                </Typography>
              </Box>
            </Link>
            <Link
              to="/setting"
              onClick={() => {
                setOpen(false);
              }}
            >
              <Box className="Menu__Item">
                <Box className="Item__Icon">
                  <SettingsIcon></SettingsIcon>
                </Box>
                <Typography className="Item__Text">
                  {language === "VI" ? "Cài Đặt" : "Setting"}
                </Typography>
              </Box>
            </Link>
          </Box>
        </Div>
      </Box>
    </Box>
  );
};

export default Header;
