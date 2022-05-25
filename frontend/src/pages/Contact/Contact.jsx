import React from "react";
import { Grid, Container, Typography, Box, TextField } from "@mui/material";
import "./Contact.scss";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
const Contact = () => {
  return (
    <Container className="Contact">
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className="Title__Container"
      >
        <Typography component="h1">Contact</Typography>
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
              label="Name"
              variant="filled"
              color="success"
              className="Contact__Input"
            />
            <TextField
              label="Email"
              variant="filled"
              color="success"
              className="Contact__Input"
            />
            <TextField
              label="Subject"
              variant="filled"
              color="success"
              className="Contact__Input"
            />
            <TextField
              label="Message"
              variant="filled"
              color="success"
              className="Contact__Input"
            />
          </Box>
          <button className="Form__submit">Send Message</button>
        </Grid>
        <Grid item sx={12} lg={6} className="Contact__Info">
          <Container className="Contact__Item" sx={{ padding: 0 }}>
            <Typography component="h2">Email</Typography>
            <Typography component="p">Tnhut803@gmail.com</Typography>
          </Container>
          <Container className="Contact__Item" sx={{ padding: 0 }}>
            <Typography component="h2">Phone</Typography>
            <Typography component="p">0393625460</Typography>
          </Container>
          <Container className="Contact__Item" sx={{ padding: 0 }}>
            <Typography component="h2">Follow me</Typography>
            <Box component="div">
              <Box component="span" className="Contact__Icon">
                <FacebookOutlinedIcon></FacebookOutlinedIcon>
              </Box>
              <Box component="span" className="Contact__Icon">
                <LinkedInIcon></LinkedInIcon>
              </Box>
              <Box component="span" className="Contact__Icon">
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
