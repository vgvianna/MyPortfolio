import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "./index.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Azul mais escuro para o tema principal
    },
    secondary: {
      main: "#ff4081", // Cor para os botões de ação
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
