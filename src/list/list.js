import { ListItemText } from "@material-ui/core";
import { List } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import  "./list.css"

export const Chtaroom = () => {
  const [room] = useState(["Room1", "Room2", "Room3"]);

  


  return (

        <List sx={{ width: "100%", 
        maxWidth: 360, 
        bgcolor: "background.paper", 
        border:"1px solid",
        height:"80vh", 
        paddingLeft:"20px"}}>
          {room.map((el, keymap) => {
            return (
              <ListItemText className='text' key={keymap}>
                <Link className='link' key={el} to={`/chat/${el}`}>
                  {el}
                </Link>          
            </ListItemText>
            );
          })}         
        </List>

    
  );
};

export default Chtaroom;
