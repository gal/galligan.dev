import { Link } from "@mui/material";
import React from "react";

export default function PageNotFound() {
  return (
    <>
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, zIndex: -1 }}>
        <h2>Page not found. <Link href="/" color="inherit">Return to home</Link></h2>
    </div>
    </>
  );
}