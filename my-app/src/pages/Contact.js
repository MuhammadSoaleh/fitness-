import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useAuth } from '../user/Auth';

function Contact() {
  const [contact, setContact] = useState({
    username: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleInput = (e) => {
    const name  = e.target.name;
    const value  = e.target.value;
    setContact(() => ({
      ...contact,
      [name]: value,
    }));
  };
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      setContact({
        username: user.username,
        email: user.email,
        subject: "",
        message: "",
      });
    }
  }, [user]);

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });
      const data = await response.json();
      if (response.ok) {
        alert("Message sent successfully!");
      } else {
        alert("Failed to send message");
      }
    } catch (error) {
      alert("Error sending message");
    }
  };

  return (
    <div
      style={{
        backgroundImage: "url('https://www.mirroroutlet.co.uk/media/wysiwyg/Gym-_all_-web-banner.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '44rem',
        width: '100%',
        overflow: 'hidden',
      }}
    >
      <h1 className="text-center" style={{ color: 'black' }}>
        How Can I Help You?
      </h1>
      <div className="container col-6 my-3">
        <form onSubmit={handleSubmit}>
          <TextField
            className="mx-3"
            name="username"
            onChange={handleInput}
            value={contact.username}
            label="Username"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
            variant="standard"
          />
          <TextField
            className="mx-3"
            name="email"
            onChange={handleInput}
            value={contact.email}
            label="Email"
            variant="filled"
            size="small"
          />
          <TextField
            className="mx-3"
            name="subject"
            onChange={handleInput}
            value={contact.subject}
            label="Subject"
            variant="filled"
            size="small"
          />
          <TextField
            className="my-3"
            name="message"
            onChange={handleInput}
            value={contact.message}
            fullWidth
            label="Message"
            multiline
            rows={4}
            variant="outlined"
          />
          <Button variant="contained" className='w-100' type="submit" endIcon={<SendIcon />}>
            Contact Us
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
