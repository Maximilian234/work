
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./message";
import {createTheme } from "@mui/material";
import {ThemeProvider} from "@emotion/react";



const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <App/>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// props - это данные, которые передаем от родительского компонента дочернему компоненту. Что-то похожее аргументы функции
