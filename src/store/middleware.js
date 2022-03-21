import { AUTHOR } from "../message/common";
import { addMessage, ADD_MESSAGE } from "./messages2/action";

const middleware = (store) => (next) => (action) => {

  if (
    action.type === ADD_MESSAGE &&
    action.payload.message.author !== AUTHOR.bot
  ) {
    const botMessage = {
      author: AUTHOR.bot,
      text: "Привет я БОТ",
    };
    setTimeout(() => {
      store.dispatch(addMessage(action.payload.id, botMessage))
    }, 1000);
  }
  return next(action);
};

export default middleware;
