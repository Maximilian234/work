import {makeStyles} from "@mui/styles"

export const useStyles = makeStyles( (ctx)=>{
  return {
  
  container: {
    backgroundColor: "#121212",
    
  },

  boxInput: {
    display:"flex",
    position: "relative",
    maxWidth: "90%",
    padding:"0 0 20px 20px",
    
  }

  }
})

export default useStyles;

