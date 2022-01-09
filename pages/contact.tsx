import { Button, TextField } from "@mui/material";
import React from "react";

import styles from './contact.module.css';

export default function Contact() {
  return (
    <>
      <form action="/api/mail" method="POST" className={styles.form} style={{ color: 'white', display: "flex", flexDirection: 'column', justifyContent: "center", alignItems: "center", height: "100vh", width: '60%', margin: 'auto', position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, zIndex: -1 }}>
        <TextField
          name="sender"
          sx={{ input: { color: 'white' } }}
          label="Name/Contact" color='success'
        />
        <TextField
          name="subject"
          sx={{ input: { color: 'white' } }}
          label="Subject" color="success" />
        <TextField
          name="body"
          sx={{ input: { color: 'white' } }}
          label="Message" color="success" multiline minRows="6"/>
        <Button
          type="submit"
          sx={{ input: { color: 'white' } }}
          variant="contained"
          color="primary"
          style={{ margin: '1em auto' }}
        >
          Send
        </Button>
      </form>
    </>
  )
}
