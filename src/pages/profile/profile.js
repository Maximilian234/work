import { useCallback, useState } from "react";
// import store from "../../store";
import { changeName, exampleAction } from "../../store/profile/actions/actions";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useDispatch, useSelector } from "react-redux";
import { IconButton, TextField } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Send } from "@mui/icons-material";

export const Profile = () => {
  //   const [dummy, setDummy] = useState();
  const { showName, name } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const [value, setValue] = useState(name);

  const handleText = (event) => {
    console.log(event.target.value);
    setValue(event.target.value);
  };

  const handleButton = () => {
    if (value === " ") { 
      console.log(value)
      toast.error(' Name not provided ');
      alert("error");
    } else if(value) {
      dispatch(changeName(value)); 
      toast.success(' Changed the name ');
    } else {
      toast.error(' Name not provided ');
      alert('Ложь')
    }
  };

  //   const { showName, name } = store.getState();
  //   const dispatch = store.dispatch

  const toggleShowName = useCallback(() => {
    console.log("checked");
    // setDummy({});
    dispatch(exampleAction);
  }, [dispatch]);

  console.log("showName", name);

  return (
    <div>
      <FormGroup>
      <h1>СТР. ПРОФИЛЬ</h1>

        <FormControlLabel
          control={<Checkbox checked={showName} onChange={toggleShowName} />}
          label="Отобразить имя профиля?"
          name="showName"
        />
      </FormGroup>

      <TextField value={value} onChange={handleText} />
      <IconButton 
      onClick={handleButton}>
        <Send />
        </IconButton>
      <ToastContainer/>
      
      {<div>НИК: {showName ? name : "Is hidden"}</div>}
      {/* {{showName && }<div>НИК: {showName ? name: 'No Name'}</div>} */}
      {/* <button onClick={toggleShowName}>Показать имя</button> */}
      {/* <h2>{value}</h2> */}
    </div>
  );
};

export default Profile;
