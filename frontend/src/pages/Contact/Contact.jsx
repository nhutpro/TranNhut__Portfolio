import React from "react";
import {
  Grid,
  Container,
  Typography,
  Box,
  TextField,
  useTheme,
} from "@mui/material";
import "./Contact.scss";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";
const Contact = () => {
  const Theme = useTheme();
  const Button = styled.button`
    list-style: 1.5rem;
    font-size: 20px;
    background-color: ${Theme.palette.mainColor.backgroundColor};
    border: 1px solid ${Theme.palette.mainColor.borderColor};
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
      background-color: ${Theme.palette.mainColor.main};
      width: 0%;
      height: 100%;
      border-radius: 1rem;
      left: 50%;
      top: 0;
      z-index: -1;
      transition: all 0.3s ease-in-out;
    }
    &:hover {
      color: ${Theme.palette.mainColor.buttonHover};
    }
    &:hover::before {
      width: 100%;
      left: 0;
    }
  `;
  const [data, setData] = useState(false);
  const [loading, setLoading] = useState(true);
  const language = useSelector((state) => state.language.value);
  console.log(loading);
  useEffect(() => {
    const getProfile = async () => {
      try {
        setLoading(true);
        const profile = await axios.get(
          "http://localhost:5000/profile?lang=" + language
        );
        setData(profile.data);
        setLoading(false);
      } catch (err) {}
    };
    getProfile();
  }, [language]);
  console.log(data.socialmedia);
  return loading ? (
    <></>
  ) : (
    <Container
      className="Contact"
      sx={{
        backgroundColor: Theme.palette.mainColor.backgroundColor,
        border: `1px solid ${Theme.palette.mainColor.borderColor}`,
        color: Theme.palette.mainColor.textColor,
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
          {language === "VI" ? "Liên Hệ" : "Contract"}
        </Typography>
      </Grid>
      <Grid container direction="row" className="Contact__Main">
        <Grid item xs={12} lg={6} className="Contact__Form">
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              label={language === "VI" ? "Họ Và Tên" : "Name"}
              variant="filled"
              color="primary"
              className="Contact__Input"
              sx={{
                input: {
                  color: Theme.palette.mainColor.textColor,
                },
              }}
            />
            <TextField
              label="Email"
              variant="filled"
              color="primary"
              className="Contact__Input"
              sx={{
                input: {
                  color: Theme.palette.mainColor.textColor,
                },
              }}
            />
            <TextField
              label={language === "VI" ? "Tiêu Đề" : "Subject"}
              variant="filled"
              color="primary"
              className="Contact__Input"
              sx={{
                input: {
                  color: Theme.palette.mainColor.textColor,
                },
              }}
            />
            <TextField
              label={language === "VI" ? "Nội Dung" : "Message"}
              variant="filled"
              color="primary"
              className="Contact__Input"
              sx={{
                input: {
                  color: Theme.palette.mainColor.textColor,
                },
              }}
            />
          </Box>
          {/* <button className="Form__submit">Send Message</button> */}
          <Button>{language === "VI" ? "Gửi" : "Send Message"}</Button>
        </Grid>
        <Grid item sx={12} lg={6} className="Contact__Info">
          <Container className="Contact__Item" sx={{ padding: 0 }}>
            <Typography component="h2">Email</Typography>
            <Typography component="p">{data.email}</Typography>
          </Container>
          <Container className="Contact__Item" sx={{ padding: 0 }}>
            <Typography component="h2">
              {language === "VI" ? "Điện Thoại" : "Phone"}
            </Typography>
            <Typography component="p">{data.phone}</Typography>
          </Container>
          <Container className="Contact__Item" sx={{ padding: 0 }}>
            <Typography component="h2">
              {language === "VI" ? "Theo Dõi Tôi Tại" : "Follow Me"}
            </Typography>
            <Box
              component="div"
              sx={{ color: Theme.palette.mainColor.main, marginTop: "10px" }}
            >
              <Box
                component="a"
                href={data.socialmedia.facebook}
                target="_blank"
                className="Contact__Icon"
              >
                <FacebookOutlinedIcon></FacebookOutlinedIcon>
              </Box>
              <Box
                component="a"
                href={data.socialmedia.linkedin}
                target="_blank"
                className="Contact__Icon"
              >
                <LinkedInIcon></LinkedInIcon>
              </Box>
              <Box
                component="a"
                href={data.socialmedia.git}
                target="_blank"
                className="Contact__Icon"
              >
                <GitHubIcon></GitHubIcon>
              </Box>
            </Box>
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
