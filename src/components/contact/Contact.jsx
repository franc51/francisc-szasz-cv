import "./Contact.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { TypeAnimation } from "react-type-animation";

import { useNavigate } from "react-router-dom";

const Contact = () => {
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    setIsSending(true);
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields.");
      setIsSending(false);
      return;
    }
    const templateParams = {
      sender_name: formData.name,
      sender_email: formData.email,
      sender_subject: formData.subject,
      sender_message: formData.message,
    };
    emailjs
      .send(
        "service_1xewkt5",
        "template_vfzk977",
        templateParams,
        "KSKcnRkzisR40rcif"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
          setIsSending(false);
          setIsSent(true);
        },
        (err) => {
          console.log("FAILED...", err);
          alert("Failed to send message.");
          setIsSending(false);
        }
      );
  };

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
        <div className="contact_form">
          <h1>Let's build something cool together</h1>
          <Box
            className="inputs"
            component="form"
            onSubmit={handleSubmit}
            sx={{ "& > :not(style)": { m: 1, width: "40ch" } }}
            noValidate
            autoComplete="off"
          >
            <TextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              variant="outlined"
            />
            <TextField
              label="E-mail"
              name="email"
              value={formData.email}
              onChange={handleChange}
              variant="outlined"
            />
            <TextField
              label="Subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              variant="outlined"
            />
            <TextField
              label="Your message"
              name="message"
              multiline
              maxRows={4}
              value={formData.message}
              onChange={handleChange}
            />
            <Stack spacing={2} direction="row" className="stack">
              <Button
                className="submit_btn"
                type="submit"
                submit_btn
                variant="contained"
                startIcon={<SendIcon />}
                disabled={isSending}
              >
                {isSending ? "Sending..." : "Submit"}
              </Button>
            </Stack>
            <p className="success">
              {isSent ? "Your message has been sent!" : ""}
            </p>
          </Box>
        </div>
        <div className="cloud">
          <TypeAnimation
            className="thank_you"
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "Hey!",
              2000,
              "Let's chat.",
              2000,
              "Let's develop.",
              2000,
              "Let's build.",
              3000,
              "Let's code.",
              4000,
              "Let's create digital experiences.",
              2000,
              "I'll get back to you soon.",
              5000,
            ]}
            speed={10}
            repeat={Infinity}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
