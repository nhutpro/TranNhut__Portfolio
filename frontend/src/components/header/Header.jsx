import React, { useEffect, useRef, useState } from "react";
import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
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
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import "./Header.scss";
const Header = () => {
  const [open, setOpen] = useState(false);
  const menuELe = useRef(null);
  const [alignment, setAlignment] = React.useState("web");
  const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    "& .MuiSwitch-switchBase": {
      margin: 1,
      padding: 0,
      transform: "translateX(6px)",
      "&.Mui-checked": {
        color: "#fff",
        transform: "translateX(22px)",
        "& .MuiSwitch-thumb:before": {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            "#fff"
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor:
            theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
      width: 32,
      height: 32,
      "&:before": {
        content: "''",
        position: "absolute",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
    },
    "& .MuiSwitch-track": {
      opacity: 1,
      backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      borderRadius: 20 / 2,
    },
  }));
  const LanguageSwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    "& .MuiSwitch-switchBase": {
      margin: 1,
      padding: 0,
      transform: "translateX(6px)",
      "&.Mui-checked": {
        color: "#fff",
        transform: "translateX(22px)",
        "& .MuiSwitch-thumb:before": {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            "#fff"
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor:
            theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
      width: 32,
      height: 32,
      "&:before": {
        content: "''",
        position: "absolute",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
    },
    "& .MuiSwitch-track": {
      opacity: 1,
      backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      borderRadius: 20 / 2,
    },
  }));
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
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

  return (
    <Box>
      <Container className="Header__Container">
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
              Home
            </Typography>
          </Link>
          <Link to="/about">
            <Typography component="p" className="Header__item">
              About
            </Typography>
          </Link>
          <Link to="/portfolio">
            <Typography component="p" className="Header__item">
              Portfolio
            </Typography>
          </Link>
          <Link to="/contact">
            <Typography component="p" className="Header__item">
              Contact
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
