import { useCallback} from "react";
// import store from "../../store";
import { exampleAction } from "../../store/profile/actions/actions";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useDispatch, useSelector } from "react-redux";

export const Profile = () => {
//   const [dummy, setDummy] = useState();
  const {showName,name} = useSelector(state=>state);
  const dispatch = useDispatch();

  
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
        <FormControlLabel 
        control={<Checkbox checked={showName} onChange={toggleShowName} />} 
        label="Отобразить имя профиля?" 
        name="showName"
        />       
      </FormGroup>
      <h1>СТР. ПРОФИЛЬ</h1>
      {<div>НИК: {showName ? name: 'No Name'}</div>}
      {/* {{showName && }<div>НИК: {showName ? name: 'No Name'}</div>} */}
      {/* <button onClick={toggleShowName}>Показать имя</button> */}
    </div>
  );
};

export default Profile;
