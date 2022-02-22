import { ListItemText } from "@material-ui/core";
import { List } from "@mui/material";
import { useState } from "react";
// import { useState } from "react";

export const Chtaroom = () => {

const [room] = useState(["item1", "item2", "item3"]);
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
          {room.map((el, keymap)=>{
              return (
                <ListItemText key={keymap}>{el}</ListItemText>
              )
          }
          )}
      
    </List>
  );
};

export default Chtaroom;
