import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((ctx) => {
  return {
    header: {
      flex: "0 1 400px",
      paddingLeft: "20px",
    },

    chatroom: {
      display: "flex",
    },

    content: {
      flex: "1 0 auto",
      display: "flex",
      flexDirection: "column-reverse",
      border: "1px solid",
    },

    h1: {
      paddingLeft: "20px",
      fontSize: "24px",
    },
  };
});
