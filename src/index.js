import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./header/header";
import Home from "./pages/home/home";
import Profile from "./pages/profile/profile";
import Chats from "./pages/chats/chats";
import { NotFound } from "./notFound";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
          <Header />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/chat/*" element={<Chats/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

//* <BrouwserRouter/> Все содержимое записываем в него. Без этого компонента ничего работать не будет.
//* "Routes" раньше назывался "switch" служит для выборки. Очень похожь на цикл "switch case" сравнивает найденый компонент внутри себя и выводит
//* path это пропс, который указывает путь на нужную страницу
//* Компонент Route указывает расположение нужного элемента, например ChatPage
//* element это пропс, который содержит страницу
//* props - это данные, которые передаем от родительского компонента дочернему компоненту. Что-то похожее аргументы функции
