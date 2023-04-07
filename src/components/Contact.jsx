import React from 'react';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Snackbar from '@mui/material/Snackbar';

export default function Contact({ companyName, email }) {

  const [open, setOpen] = React.useState(false);

  return (
    <>
      <h1 id="contact">Contact Us</h1>

      <p>
        We would love to hear from you! Whether you have questions about our mobile application, want to get involved in the psychedelic community, or simply want to say hello, we're here to help.
      </p>
      <p>
        You can reach us by email at <a className="link" href="mailto:info@circles-n-cycles.com">{email}</a>, or by filling out the form below. We will do our best to respond to your inquiry within 24-48 hours.
      </p>

      <Paper elevation={4}>
        <form style={{ padding: '35px' }}>
          <TextField id="subject" label="Subject" variant="outlined" fullWidth />
          <br />
          <br />
          <TextField id="subject" label="Your Message" variant="outlined" multiline rows={5} fullWidth />
          <br />
          <br />
          <Button variant="contained" endIcon={<SendIcon />} onClick={() => setOpen(true)} color='secondary'>
            Send
          </Button>
          <Snackbar
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            open={open}
            autoHideDuration={3000}
            onClose={(event, reason) => { if (reason === 'clickaway') return; setOpen(false); }}
            message="Oops something went wrong!"
          />
        </form>
      </Paper>
      <p>
        Thank you for your interest in {companyName}. We look forward to connecting with you!
      </p>
    </>
  );
}