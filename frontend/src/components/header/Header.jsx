import React, { useEffect, useRef, useState } from "react";
import { styled } from "@mui/material/styles";

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
import { Link } from "react-router-dom";
import { Box, useTheme } from "@mui/material";
import "./Header.scss";
import { useSelector } from "react-redux";

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
  const Theme = useTheme();
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
            <Typography component="p" className="Header__item">
              {language === "VI" ? "Trang Chủ" : "Home"}
            </Typography>
          </Link>
          <Link to="/about">
            <Typography component="p" className="Header__item">
              {language === "VI" ? "Giới Thiệu" : "About"}
            </Typography>
          </Link>
          <Link to="/portfolio">
            <Typography component="p" className="Header__item">
              {language === "VI" ? "Dự Án" : "Portfolio"}
            </Typography>
          </Link>
          <Link to="/contact">
            <Typography component="p" className="Header__item">
              {language === "VI" ? "Liên Hệ" : "Contact"}
            </Typography>
          </Link>
        </List>

        {/* <FormGroup>
        <FormControlLabel
          control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
          label="Dark Mode"
        />
      </FormGroup>
      <ToggleButtonGroup
        color="primary"
        value={alignment}
        exclusive
        onChange={handleChange}
      >
        <ToggleButton value="web">EN</ToggleButton>
        <ToggleButton value="android">VI</ToggleButton>
      </ToggleButtonGroup> */}
      </Container>
      <div className="Menu__Container" ref={menuELe}>
        <Box className="Menu__Icon" onClick={showMenu}>
          <MenuIcon></MenuIcon>
        </Box>
        <Box className={open ? "Menu__Main" : "Menu__Main displayHide"}>
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
        </Box>
      </div>
    </Box>
  );
};

export default Header;
