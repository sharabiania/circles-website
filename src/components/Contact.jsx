import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';


export default function Contact({ companyName, email }) {
  return (
    <>
      <h1 id="contact">Contact Us</h1>

      <p>
        We would love to hear from you! Whether you have questions about our mobile application, want to get involved in the psychedelic community, or simply want to say hello, we're here to help.
      </p>
      <p>
        You can reach us by email at <a class="link" href="mailto:info@circles-n-cycles.com">{email}</a>, or by filling out the form below. We will do our best to respond to your inquiry within 24-48 hours.
      </p>

     <Paper elevation={3}>
        <form style={{padding: '35px'}}>
          <TextField id="subject" label="Subject" variant="outlined" fullWidth />
          <br />
          <br />
          <TextField id="subject" label="Your Message" variant="outlined" multiline rows={5} fullWidth/>

        </form>
        </Paper> 
      <p>
        Thank you for your interest in {companyName}. We look forward to connecting with you!
      </p>
    </>
  );
}