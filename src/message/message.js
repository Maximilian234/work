import { useState, useEffect } from "react";
import "./style.css";
import "./common";
import { AUTHOR } from "./common";
import {
  Avatar,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TextField,
} from "@mui/material";
import { AccountCircle, Android, Chat, Send } from "@mui/icons-material";
import Chtaroom from "../list/list";
// import { render } from "react-dom";
// import { propsToClassKey } from "@mui/styles";

export const App = () => {
  const [value, setValue] = useState("");
  const [messagelist, setMessagelist] = useState([]);
  // messagelist - это переменная массива, которую хочу использовать.
  // setMessagelist - это функция, для изменения значения массива messageList
  // useState - это функция для изменения состояния. возвращает массив;
  // messagelist - это значение по умолчанию для переменной состояния. Как обычная переменная
  // Вызывая функцию setMessagelist для изменения значения messagelist в используемом компоненте, например handleButton, будет повторно активирован хуком useState([]) и начнет заново отображаться с новым значением messagelist

  const Elem = (props) => {
    return <h2> {props.render("Выбрать чат")} </h2>;
  };

  useEffect(() => {
    let timeOutBot = null;
    const lastmessage = messagelist[messagelist.length - 1];

    if (lastmessage?.user !== AUTHOR.bot && messagelist.length) {
      console.log("ok");
      timeOutBot = setTimeout(() => {
        setMessagelist([
          ...messagelist,
          { user: AUTHOR.bot, value: AUTHOR.textBot },
        ]);
      }, 2500);
    }
    return () => clearInterval(timeOutBot);
  }, [messagelist]);

  const handleClick = (event) => {
    setValue(event.target.value);
  };

  const nahdleKey = (event) => {
    if (event.code === "Enter") {
      handleButton();
    }
  };

  const handleButton = () => {
    if (value) {
      setMessagelist([
        ...messagelist,
        {
          user: AUTHOR.user,
          value,
        },
      ]);
      setValue("");
    } else {
      alert("error");
    }
  };

  return (
    <div className="container">
      <div className="containerBox">
        
        <div className="boxChat">
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            {messagelist.map((item, keyId) => {
              return (
                <ListItem key={keyId}>
                  <ListItemAvatar>
                    <Avatar>
                      {item.user === AUTHOR.user ? (
                        <AccountCircle />
                      ) : (
                        <Android />
                      )}
                    </Avatar>
                    <ListItemText>{item.value}</ListItemText>
                  </ListItemAvatar>
                </ListItem>
              );
            })}
          </List>
        </div>
        <div className="boxInput">
          <TextField
            autoFocus
            color="secondary"
            id="standard-basic"
            label="Standard"
            variant="standard"
            value={value}
            onKeyPress={nahdleKey}
            onChange={handleClick}
            fullWidth
          />

          <IconButton className="button" type={"button"} onClick={handleButton}>
            <Send />
          </IconButton>
        </div>
      </div>
      <Elem
        render={(num) => {
          return <div>{num}</div>;
        }}
      />
      <div children={<Chat />} />
      <Chtaroom/>
    </div>
  );
};

export default App;
