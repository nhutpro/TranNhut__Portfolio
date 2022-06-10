import React from "react";
import {
  Grid,
  Container,
  Typography,
  Box,
  TextField,
  useTheme,
  Skeleton,
} from "@mui/material";
import "./Contact.scss";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Button = styled.button`
  width: 30%;
  list-style: 1.5rem;
  font-size: 20px;
  background-color: ${(props) => props.Theme.palette.mainColor.backgroundColor};
  border: 1px solid ${(props) => props.Theme.palette.mainColor.borderColor};
  border-radius: 1rem;
  padding: 0.5rem 0.5rem;
  margin-top: 1rem;
  position: relative;
  z-index: 0;
  &:first-child {
    margin-right: 10px;
  }
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
const Contact = () => {
  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Trường Này Không Được Để Trống";
    }

    if (!values.email) {
      errors.email = "Trường Này Không Được Để Trống";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Email Không Hợp Lệ";
    }
    if (!values.subject) {
      errors.subject = "Trường Này Không Được Để Trống";
    }
    if (!values.message) {
      errors.message = "Trường Này Không Được Để Trống";
    }

    return errors;
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validate,
    onSubmit: (values) => {
      console.log(values);
      const postContact = async () => {
        const respond = await axios({
          method: "POST",
          url: process.env.REACT_APP_SERVER + "/contact",
          data: { ...values },
        });
        if (respond.status === 200) {
          formik.resetForm();
          toast.success(
            language === "VI" ? "Đã gửi thành công" : "sent successfully",
            {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            }
          );
        }
      };
      postContact();
    },
  });
  const Theme = useTheme();

  const [data, setData] = useState(false);
  const [loading, setLoading] = useState(true);
  const language = useSelector((state) => state.language.value);

  useEffect(() => {
    const getProfile = async () => {
      try {
        setLoading(true);
        const profile = await axios.get(
          process.env.REACT_APP_SERVER + "/profile?lang=" + language
        );
        setData(profile.data);
        setLoading(false);
      } catch (err) {}
    };
    getProfile();
  }, [language]);

  return loading ? (
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
          <Skeleton variant="text" width={100} height={35}></Skeleton>
        </Typography>
      </Grid>
      <Grid container direction="row" className="Contact__Main">
        <Grid item xs={12} lg={6} className="Contact__Form">
          <Skeleton width={"100%"} height={200}></Skeleton>
        </Grid>
        <Grid item xs={12} lg={6} className="Contact__Info">
          <Container className="Contact__Item" sx={{ padding: 0 }}>
            <Typography component="h2">
              <Skeleton></Skeleton>
            </Typography>
            <Typography component="p">
              <Skeleton></Skeleton>
            </Typography>
          </Container>
          <Container className="Contact__Item" sx={{ padding: 0 }}>
            <Typography component="h2">
              <Skeleton></Skeleton>
            </Typography>
            <Typography component="p">
              <Skeleton></Skeleton>
            </Typography>
          </Container>
          <Container className="Contact__Item" sx={{ padding: 0 }}>
            <Typography component="h2">
              <Skeleton></Skeleton>
            </Typography>
            <Typography component="h2">
              <Skeleton></Skeleton>
            </Typography>
          </Container>
        </Grid>
      </Grid>
    </Container>
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
              "& > :not(style)": {
                m: 1,
              },
            }}
            Validate
            autoComplete="off"
            onSubmit={formik.handleSubmit}
          >
            <TextField
              id="name"
              name="name"
              type="text"
              label={language === "VI" ? "Họ Và Tên" : "Name"}
              variant="filled"
              color="primary"
              className="Contact__Input"
              onChange={formik.handleChange}
              value={formik.values.name}
              sx={{
                input: {
                  color: Theme.palette.mainColor.textColor,
                },
              }}
            />
            <Typography
              component="p"
              sx={{ fontWeight: 500, color: Theme.palette.mainColor.main }}
            >
              {formik.errors.name ? formik.errors.name : ""}
            </Typography>
            <TextField
              id="email"
              name="email"
              type="email"
              label="Email"
              variant="filled"
              color="primary"
              className="Contact__Input"
              onChange={formik.handleChange}
              value={formik.values.email}
              sx={{
                input: {
                  color: Theme.palette.mainColor.textColor,
                },
              }}
            />
            <Typography
              component="p"
              sx={{ fontWeight: 500, color: Theme.palette.mainColor.main }}
            >
              {formik.errors.email ? formik.errors.email : ""}
            </Typography>

            <TextField
              id="subject"
              name="subject"
              type="text"
              label={language === "VI" ? "Tiêu Đề" : "Subject"}
              variant="filled"
              color="primary"
              className="Contact__Input"
              onChange={formik.handleChange}
              value={formik.values.subject}
              sx={{
                input: {
                  color: Theme.palette.mainColor.textColor,
                },
              }}
            />
            <Typography
              component="p"
              sx={{ fontWeight: 500, color: Theme.palette.mainColor.main }}
            >
              {formik.errors.subject ? formik.errors.subject : ""}
            </Typography>
            <TextField
              id="message"
              name="message"
              label={language === "VI" ? "Nội Dung" : "Message"}
              variant="filled"
              color="primary"
              className="Contact__Input"
              onChange={formik.handleChange}
              value={formik.values.message}
              sx={{
                input: {
                  color: Theme.palette.mainColor.textColor,
                },
              }}
            />
            <Typography
              component="p"
              sx={{ fontWeight: 500, color: Theme.palette.mainColor.main }}
            >
              {formik.errors.message ? formik.errors.message : ""}
            </Typography>
            <Button type="submit" Theme={Theme}>
              {language === "VI" ? "Gửi" : "Send Message"}
            </Button>
          </Box>
          {/* <button className="Form__submit">Send Message</button> */}
        </Grid>
        <Grid item xs={12} lg={6} className="Contact__Info">
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
