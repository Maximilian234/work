import { ADD_MESSAGE } from "./action";

const initialState = {
  messageList2: {}
};

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      const { id, message } = action.payload; // деструктуризация объекта
      const currentList = state.messageList2[id] || [];
      return {
        ...state,
        messageList2: {
          ...state.messageList2,
          [id]: [
            ...currentList,
            {
              ...message,
              id: `${id}${currentList.length}`,
            },
          ],
        },
      };
    default:
      return state;
  }
};

export default messagesReducer;
