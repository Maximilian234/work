
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Message } from "./message";


const name = "Maxim";

ReactDOM.render(
  <React.StrictMode>
    <Message myname={ name }/>
  </React.StrictMode>,
  document.getElementById("root")
);

// props - это данные, которые передаем от родительского компонента дочернему компоненту. Что-то похожее аргументы функции
