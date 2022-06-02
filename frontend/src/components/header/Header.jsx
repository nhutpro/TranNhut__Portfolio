import React, { useEffect, useRef, useState } from "react";

import {
  Container,
  ListItemText,
  List,
  Typography,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactsIcon from "@mui/icons-material/Contacts";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import SettingsIcon from "@mui/icons-material/Settings";
import { Link } from "react-router-dom";
import { Box, useTheme } from "@mui/material";
import "./Header.scss";
import { useSelector } from "react-redux";
import styled from "styled-components";
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
const Header = () => {
  const [open, setOpen] = useState(false);
  const menuELe = useRef(null);
  const language = useSelector((state) => state.language.value);

  const showMenu = () => {
    setOpen((prevValue) => !prevValue);
  };
  const closeMenu = () => {
    setOpen(false);
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
        <Typography
          component="h2"
          className="Header__logo"
          sx={{
            lineHeight: "3.5rem",
            fontWeight: 600,
          }}
        >
          T.Nhựt
        </Typography>
        <List
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Link to="/">
            <HeaderItem Theme={Theme}>Home</HeaderItem>
          </Link>
          <Link to="/about">
            <HeaderItem Theme={Theme}>About</HeaderItem>
          </Link>
          <Link to="/portfolio">
            <HeaderItem Theme={Theme}>Portfolio</HeaderItem>
          </Link>
          <Link to="/contact">
            <HeaderItem Theme={Theme}>Contact</HeaderItem>
          </Link>
        </List>
        <Link to="/setting">
          <Box
            className="Setting"
            sx={{
              backgroundColor: Theme.palette.mainColor.backgroundColor,
              border: `1px solid ${Theme.palette.mainColor.borderColor}`,
            }}
          >
            <SettingsIcon></SettingsIcon>
          </Box>
        </Link>
      </Container>
      <Box
        className="Menu__Container"
        ref={menuELe}
        sx={{ color: Theme.palette.mainColor.main }}
      >
        <Box className="Menu__Icon" onClick={showMenu}>
          <MenuIcon></MenuIcon>
        </Box>
        <Box
          className={open ? "Menu__Main" : "Menu__Main displayHide"}
          sx={{
            zIndex: 1,
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
              <Typography className="Item__Text">Home</Typography>
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
              <Typography className="Item__Text">About</Typography>
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
              <Typography className="Item__Text">Portfolio</Typography>
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
              <Typography className="Item__Text">Contact</Typography>
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
              <Typography className="Item__Text">Setting</Typography>
            </Box>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
