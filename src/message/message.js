import { useState, useRef } from "react";
import { useStyles } from "./messages-style.js";
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
import { AccountCircle, Android, Send } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addMessage, addMessageWithSaga } from "../store/messages2/action.js";


export const App = () => {
  const stk = useStyles();
  const ref = useRef();
  const [value, setValue] = useState("");
  const { name } = useSelector((state) => state.profile);
  const messages2 = useSelector((state) => state.messages2.messageList2);
  const { id } = useParams();
  const getMessagesByChatId = messages2[id];
  const dispatch = useDispatch();
  // messagelist - это переменная массива, которую хочу использовать.
  // setMessagelist - это функция, для изменения значения массива messageList
  // useState - это функция для изменения состояния. возвращает массив;
  // messagelist - это значение по умолчанию для переменной состояния. Как обычная переменная
  // Вызывая функцию setMessagelist для изменения значения messagelist в используемом компоненте, например handleButton, будет повторно активирован хуком useState([]) и начнет заново отображаться с новым значением messagelist

  const handleClick = (event) => {
    setValue(event.target.value);
  };

  const nahdleKey = (event) => {
    if (event.code === "Enter") {
      handleButton();
    }
  };

  const handleButton = () => {
    if (value !== "") {
      const message = {
        user: name,
        text: value,
      };
      dispatch(addMessage(id, message));
      setValue("");
    }
  };

  return (
    <div ref={ref} className={stk.container}>
      <>
        <div className={stk.boxChat}>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            {getMessagesByChatId?.map((item, keyId) => {
              return (
                <ListItem key={keyId}>
                  <ListItemAvatar>
                    <Avatar>
                      {item.user !== AUTHOR.bot ? (
                        <AccountCircle alt={name} />
                      ) : (
                        <Android />
                      )}
                    </Avatar>
                    <ListItemText secondary={item.user} />
                  </ListItemAvatar>
                  {item.text}
                </ListItem>
              );
            })}
          </List>
        </div>
        <div className={stk.boxInput}>
          <TextField
            autoFocus
            color="info"
            id="standard-basic"
            label="Standard"
            variant="standard"
            value={value}
            onKeyPress={nahdleKey}
            onChange={handleClick}
            fullWidth
          />
          <IconButton
            className={stk.button}
            type={"button"}
            onClick={handleButton}
          >
            <Send />
          </IconButton>
        </div>
      </>
    </div>
  );
};

export default App;

// const [messagelist, setMessagelist] = useState([]);

// const handleButton = () => {
//   if (value) {
//     setMessagelist([
//       ...messagelist,
//       {
//         user: name,
//         value,
//       },
//     ]);
//     setValue("");
//   } else {
//     alert("error");
//   }
// };

// useEffect(() => {
//   let timeOutBot = null;
//   const lastmessage = messagelist[messagelist.length - 1];

//   if (lastmessage?.user !== AUTHOR.bot && messagelist.length) {
//     timeOutBot = setTimeout(() => {
//       setMessagelist([
//         ...messagelist,
//         { user: AUTHOR.bot, value: AUTHOR.textBot },
//       ]);
//     }, 2500);
//   }
//   return () => clearInterval(timeOutBot);
// }, [messagelist]);
