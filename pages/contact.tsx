import { Button, TextField } from "@mui/material";
import Script from "next/script";
import React from "react";

import styles from "./contact.module.css";

export default function Contact() {
  return (
    <>
      <Script src="https://js.hcaptcha.com/1/api.js" async defer></Script>
      <form
        action="/api/mail"
        method="POST"
        className={styles.form}
        style={{
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "60%",
          margin: "auto",
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          zIndex: -1,
        }}
      >
        <TextField
          name="sender"
          sx={{ input: { color: "white" } }}
          label="Name/Contact"
          color="success"
        />
        <TextField
          name="subject"
          sx={{ input: { color: "white" } }}
          label="Subject"
          color="success"
        />
        <TextField
          name="body"
          sx={{ input: { color: "white" } }}
          label="Message"
          color="success"
          multiline
          minRows="6"
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="h-captcha"
          data-theme="dark"
          data-size="compact"
          data-sitekey="de7a866c-8d5f-4d17-9e99-9fcfc210c43f"
        ></div>

        <Button
          type="submit"
          sx={{ input: { color: "white" } }}
          variant="contained"
          color="primary"
          style={{ margin: "1em auto" }}
        >
          Send
        </Button>
      </form>
    </>
  );
}
