import { Button, Dialog, ListItemText, TextField } from "@material-ui/core";
import { List } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addChat } from "../store/chats2/action";
import { useParams } from "react-router-dom";
import  "./list.css"

export const Chtaroom = () => {
  // const [room] = useState(["Room1", "Room2", "Room3"]);
  const [visable, setVisible] = useState(false)
  const [chatName, setChatName] = useState('');
  const dispatch = useDispatch();
  const chats = useSelector(state=> state.chats.chatList);// chats указываем без { } - без скобок т.к. chatList - пустой
  const {id} = useParams();


  const handleOpen = () => setVisible(true);  
  const handleChange = (event) => setChatName(event.target.value);

  const onAddChat = () => {
    dispatch(addChat(chatName));
    setChatName('');
    setVisible(false);
  }


  return (
<>
        <List sx={{ width: "100%", 
        maxWidth: 360, 
        bgcolor: "background.paper", 
        border:"1px solid",
        height:"80vh", 
        paddingLeft:"20px"}}>
          {chats?.map((chat, keymap) => { // проверяем chats знаком "?" на наличии значения массива chatList
            return (
              <ListItemText className='text' key={keymap}>
                <Link className='link' key={keymap.id} to={`/chat/${chat.id}`}>
                  {chat.name}
                </Link>          
            </ListItemText>
            );
          })}         
        </List>
          <button onClick={handleOpen}> addChat </button>
          <Dialog open={visable} onClose={()=>setVisible(false)}>
            <TextField value={chatName} onChange={handleChange}/>
            <Button onClick={onAddChat}>Отправить</Button>
          </Dialog>
 </>   
  );
};

export default Chtaroom;
