import React from "react";
import "./Contact.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  return (
    <div className="main_container">
      <button className="goback_btn" onClick={() => navigate("/")}>
        Go back
      </button>
      <div className="contact_container">
        <div className="contact_details">
          <img src="/assets/profil-formal.PNG" alt=""></img>
          <h1>Contact Details</h1>
          <h2>Francisc Szasz</h2>
          <p>+40 720 628 821</p>
          <a href="https://www.linkedin.com/in/francisc-szasz-342b16137/">
            Linkedin
          </a>
          <a href="https://github.com/franc51">Github</a>
          <a href="https://github.com/franc51">francisc_szasz@yahoo.com</a>
        </div>
        <hr></hr>
        <div className="contact_form">
          <h1>Let's build something cool together</h1>
          <Box
            className="inputs"
            component="form"
            sx={{ "& > :not(style)": { m: 1, width: "40ch" } }}
            noValidate
            autoComplete="off"
          >
            <TextField id="outlined-basic" label="Name" variant="outlined" />
            <TextField id="outlined-basic" label="E-mail" variant="outlined" />
            <TextField id="outlined-basic" label="Subject" variant="outlined" />
            <TextField
              id="outlined-multiline-flexible"
              label="Your message"
              multiline
              maxRows={4}
            />{" "}
          </Box>
          <Stack spacing={2} direction="row" className="submit_btn">
            <Button submit_btn variant="contained" startIcon={<SendIcon />}>
              Submit
            </Button>
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default Contact;
