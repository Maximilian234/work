
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./message";



ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById("root")
);

// props - это данные, которые передаем от родительского компонента дочернему компоненту. Что-то похожее аргументы функции
