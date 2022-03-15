import { combineReducers, createStore } from "redux";
import chatsReducer from "./chats2/reducer";
import messagesReducer from "./messages2/reducer";

import profileReducer from "./profile/actions/reducer";

const reducer = combineReducers({
  chats: chatsReducer,
  messages2: messagesReducer,
  profile: profileReducer,
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
