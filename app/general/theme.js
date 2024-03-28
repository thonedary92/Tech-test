"use client";
import React from "react";
import { createTheme } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    primary: {
      main: "#3F0035",
    },
    secondary: {
      main: "#7b0035",
    },
    body: "#ffffff",
    border: "rgba(0, 0, 0, 0.2)",
    input: "#ffffff", //--input-color-light
    active: "#20a8d8", //--active-blue-color
    required: "#c77171",
    text: "#000000",
  },
});

export default theme;
