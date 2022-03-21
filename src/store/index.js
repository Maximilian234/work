import { applyMiddleware, combineReducers, compose, createStore } from "redux";
// import thunk from "redux-thunk";
import chatsReducer from "./chats2/reducer";
import messagesReducer from "./messages2/reducer";
import middleware from "./middleware";
import profileReducer from "./profile/actions/reducer";
// import createSagaMiddleware from "@redux-saga/core";
// import mySaga from "./saga";
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'

const reducer = combineReducers({
  chats: chatsReducer,
  messages2: messagesReducer,
  profile: profileReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;

// const sagaMiddleware = createSagaMiddleware();

const persitConfig = {
  key: 'root',
  storage,
}

const persisetReducer = persistReducer(persitConfig, reducer)

const store = createStore(
  persisetReducer,
  composeEnhancers(applyMiddleware(middleware))
  
  );

  // sagaMiddleware.run(mySaga)

export default store;
export const persistor = persistStore(store);

